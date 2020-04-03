import React from "react"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    <title>About</title>
    <h1>About me</h1>
    <p>
      I'm a recent graduate from Oregon State University, with a BS in CS.{" "}
      <br /> I graduated with a 3.5 GPA.
    </p>
    <p>
      While attending OSU I was a part-time student developer at The Center for
      Applied Systems & Software (
      <a href="http://cass.oregonstate.edu/">CASS</a>). Working here laid a
      solid foundation for me to improve not only developer skills, but working
      in Agile teams under deadlines.
    </p>
    <p>
      During my 2 years of employment, I worked on a multitude of projects using
      an abundance of tools, including:
    </p>
    <ul>
      <li>
        <a href="https://streamwebs.org/">Streamwebs</a> : Student Stewardship
        program website designed for K-12 classrooms to track and upload data
        about streams they visit. Django frontend with PostgreSQL backend.
      </li>
      <li>
        <a href="https://lf-itx.now.sh">Linux Foundation ITX Project</a> : React
        Site with Auth0 authentication used internally by the Linux Foundation
        to manage their Domains, Groups, Users and more.
      </li>
      <li>
        Oregon Department of Environmental Quality : The last project I was on
        before I graduated. .NET-based database management.
      </li>
    </ul>
    <hr />
    <h2>Internships</h2>
    <p>
      I went through <a href="https://www.mecopinc.org/">MECOP</a> while at
      Oregon State, and landed two six-month internships. This extended my time
      at school slightly, but gave me an extra year of experience in the
      industry. It also let me enter the workforce at the start the Coronavirus
      outbreak!
    </p>
    <h3>Portland General Electric</h3>
    <p>
      At PGE I first worked on the Business Intelligence team doing Data
      Warehousing, and became familiar with the ETL procedure. I had the
      opportunity to improve the ETL runtime of their outage tracker, bringing
      it's overall runtime from 15 to about 3 minutes. This allowed customers to
      see updates to their outages closer to realtime. In addition, I made
      dashboards to track usages of internal tools to provide insight on which
      tools should be focused for improvements.
    </p>
    <p>
      For the second half of my time spent at PGE, I worked on a team of 10
      other interns, led by our DevOps manager to work on a proof-of-concept of
      provisioning virtual machines through numerous cloud providers. Using
      Packer and Terraform, we provisioned VMs on Amazon Web Services, Microsoft
      Azure, and Google Cloud Platform.
    </p>

    <h3>Mentor Graphics</h3>
    <p>
      Mentor Graphics gave me the wonderful opportunity to work as a QA Intern
      on the Calibre team. I was continually improving their nightly automated
      testing suite, to run thousands of unit and regression tests. Jenkins was
      used to handle these time-sensitive tests, which needed to be viewed by
      standup each morning. Not only were the tests reported, but the log files
      had to be collated so the QA developers could annotate them. This gave me
      solid skills in Bash, and I also had to decipher Perl to figure out
      exactly how some of the reports were generated.
    </p>
    <p>
      In parallel with testing, I was put on a team with another Intern to
      create a validation tool for their migration to JIRA, from their own
      internal issue-tracking system. We were tasked with creating a Python
      program to query REST endpoints and compare against custom fields to
      ensure a smooth transition of over twenty-five thousand issues to JIRA.
    </p>
  </Layout>
)
