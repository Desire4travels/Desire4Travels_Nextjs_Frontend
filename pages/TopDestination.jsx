import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './TopDestination.module.css';
import DestinationCard from '../components/DestinationCard';

import { event as gtagEvent } from '../lib/gtag'; // Google Analytics tracking

const TopDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('https://desire4travels-1.onrender.com/api/destinations?limit=4&random=true')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        const loaded = data.destinations || [];
        setDestinations(loaded);

        //Fire GA Event for loaded destinations
        gtagEvent({
          action: 'top_destinations_loaded',
          params: {
            count: loaded.length,
          },
        });
      })
      .catch(err => {
        console.error('Failed to fetch destinations:', err);
      });
  }, []);

  return (
    <div className={styles['topdestination-section']}>
      <h2 className={styles['topdestination-heading']}>Top Destinations</h2>
      <div className={styles['topdestination-grid']}>
        {destinations.length > 0 ? (
          destinations.map(dest => (
            <DestinationCard
              key={dest.id}
              imgSrc={dest.image}
              title={dest.name}
              location={dest.location}
              tripType={dest.tripType}
              rating={dest.rating}
              showExtras={false}
              showLocation={false}
            />
          ))
        ) : (
          <p>No destinations available.</p>
        )}
      </div>
      <div className={styles['topdestination-link']}>
        <Link href="/destination" legacyBehavior>
          <a
            onClick={() =>
              gtagEvent({
                action: 'see_all_destinations_clicked',
              })
            }
          >
            See all →
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TopDestination;
