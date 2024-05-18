import React from "react";
import Strings from "../../data/strings/Strings";
import { NavLink as Link } from "react-router-dom";
import "./ExternalLinks.scss";

const ExternalLinks = () => {
  return (
    <div className="linksPageContainer">
      <div className="nwaccClubs">
        <h2 className="linksHeader">
          {Strings.externalLinks.nwaccClubs.header}
        </h2>
        {Strings.externalLinks.nwaccClubs.links.map((club) => {
          return (
            <Link className="corvetteLinks" to={club.url} key={club.index}>
              {club.name}
            </Link>
          );
        })}
      </div>
      <div className="otherWesternClubs">
        <h2 className="linksHeader">
          {Strings.externalLinks.otherWesternClubs.header}
        </h2>
        {Strings.externalLinks.otherWesternClubs.links.map((club) => {
          return (
            <Link className="corvetteLinks" to={club.url} key={club.index}>
              {club.name}
            </Link>
          );
        })}
      </div>
      <div className="canadianClubs">
        <h2 className="linksHeader">
          {Strings.externalLinks.canadianClubs.header}
        </h2>
        {Strings.externalLinks.canadianClubs.links.map((club) => {
          return (
            <Link className="corvetteLinks" to={club.url} key={club.index}>
              {club.name}
            </Link>
          );
        })}
      </div>
      <div className="internationalClubs">
        <h2 className="linksHeader">
          {Strings.externalLinks.internationalClubs.header}
        </h2>
        {Strings.externalLinks.internationalClubs.links.map((club) => {
          return (
            <Link className="corvetteLinks" to={club.url} key={club.index}>
              {club.name}
            </Link>
          );
        })}
      </div>
      <div className="forums">
        <h2 className="linksHeader">{Strings.externalLinks.forums.header}</h2>
        {Strings.externalLinks.forums.links.map((club) => {
          return (
            <Link className="corvetteLinks" to={club.url} key={club.index}>
              {club.name}
            </Link>
          );
        })}
      </div>
      <div className="registries">
        <h2 className="linksHeader">
          {Strings.externalLinks.registries.header}
        </h2>
        {Strings.externalLinks.registries.links.map((club) => {
          return (
            <Link className="corvetteLinks" to={club.url} key={club.index}>
              {club.name}
            </Link>
          );
        })}
      </div>
      <div className="organizations">
        <h2 className="linksHeader">
          {Strings.externalLinks.organizations.header}
        </h2>
        {Strings.externalLinks.organizations.links.map((club) => {
          return (
            <Link className="corvetteLinks" to={club.url} key={club.index}>
              {club.name}
            </Link>
          );
        })}
      </div>
      <div className="magazines">
        <h2 className="linksHeader">
          {Strings.externalLinks.magazines.header}
        </h2>
        {Strings.externalLinks.magazines.links.map((club) => {
          return (
            <Link className="corvetteLinks" to={club.url} key={club.index}>
              {club.name}
            </Link>
          );
        })}
      </div>
      <div className="other">
        <h2 className="linksHeader">{Strings.externalLinks.other.header}</h2>
        {Strings.externalLinks.other.links.map((club) => {
          return (
            <Link className="corvetteLinks" to={club.url} key={club.index}>
              {club.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ExternalLinks;
