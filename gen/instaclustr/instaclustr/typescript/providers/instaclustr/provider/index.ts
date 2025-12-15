// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstaclustrProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#terraform_key InstaclustrProvider#terraform_key}
  */
  readonly terraformKey: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#alias InstaclustrProvider#alias}
  */
  readonly alias?: string;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#endpoints InstaclustrProvider#endpoints}
  */
  readonly endpoints?: InstaclustrProviderEndpoints[] | cdktf.IResolvable;
}
export interface InstaclustrProviderEndpoints {
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#aws_encryption_key_v2 InstaclustrProvider#aws_encryption_key_v2}
  */
  readonly awsEncryptionKeyV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#aws_endpoint_dns_names_v2 InstaclustrProvider#aws_endpoint_dns_names_v2}
  */
  readonly awsEndpointDnsNamesV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#aws_endpoint_service_principal_v2 InstaclustrProvider#aws_endpoint_service_principal_v2}
  */
  readonly awsEndpointServicePrincipalV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#aws_fsxn_v2 InstaclustrProvider#aws_fsxn_v2}
  */
  readonly awsFsxnV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#aws_security_group_firewall_rule_v2 InstaclustrProvider#aws_security_group_firewall_rule_v2}
  */
  readonly awsSecurityGroupFirewallRuleV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#aws_security_group_firewall_rules_v2 InstaclustrProvider#aws_security_group_firewall_rules_v2}
  */
  readonly awsSecurityGroupFirewallRulesV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#aws_vpc_peer_v2 InstaclustrProvider#aws_vpc_peer_v2}
  */
  readonly awsVpcPeerV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#azure_private_link_service_subscription_v2 InstaclustrProvider#azure_private_link_service_subscription_v2}
  */
  readonly azurePrivateLinkServiceSubscriptionV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#azure_vnet_peer_v2 InstaclustrProvider#azure_vnet_peer_v2}
  */
  readonly azureVnetPeerV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#cadence_cluster_v2 InstaclustrProvider#cadence_cluster_v2}
  */
  readonly cadenceClusterV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#cassandra_cluster_v2 InstaclustrProvider#cassandra_cluster_v2}
  */
  readonly cassandraClusterV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#clickhouse_cluster_v2 InstaclustrProvider#clickhouse_cluster_v2}
  */
  readonly clickhouseClusterV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#clickhouse_configuration_v2 InstaclustrProvider#clickhouse_configuration_v2}
  */
  readonly clickhouseConfigurationV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#clickhouse_integration_domain_v2 InstaclustrProvider#clickhouse_integration_domain_v2}
  */
  readonly clickhouseIntegrationDomainV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#clickhouse_integration_kafka_v2 InstaclustrProvider#clickhouse_integration_kafka_v2}
  */
  readonly clickhouseIntegrationKafkaV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#clickhouse_integration_private_s3_v2 InstaclustrProvider#clickhouse_integration_private_s3_v2}
  */
  readonly clickhouseIntegrationPrivateS3V2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#clickhouse_integration_s3_fsxn_v2 InstaclustrProvider#clickhouse_integration_s3_fsxn_v2}
  */
  readonly clickhouseIntegrationS3FsxnV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#clickhouse_integration_s3_v2 InstaclustrProvider#clickhouse_integration_s3_v2}
  */
  readonly clickhouseIntegrationS3V2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#cluster_exclusion_window_v2 InstaclustrProvider#cluster_exclusion_window_v2}
  */
  readonly clusterExclusionWindowV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#cluster_network_firewall_rule_v2 InstaclustrProvider#cluster_network_firewall_rule_v2}
  */
  readonly clusterNetworkFirewallRuleV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#cluster_network_firewall_rules_v2 InstaclustrProvider#cluster_network_firewall_rules_v2}
  */
  readonly clusterNetworkFirewallRulesV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#cluster_waiter_v2 InstaclustrProvider#cluster_waiter_v2}
  */
  readonly clusterWaiterV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#couchbase_cluster_v2 InstaclustrProvider#couchbase_cluster_v2}
  */
  readonly couchbaseClusterV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#gcp_service_attachments_accept_list_v2 InstaclustrProvider#gcp_service_attachments_accept_list_v2}
  */
  readonly gcpServiceAttachmentsAcceptListV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#gcp_vpc_peer_v2 InstaclustrProvider#gcp_vpc_peer_v2}
  */
  readonly gcpVpcPeerV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#kafka_acl_v2 InstaclustrProvider#kafka_acl_v2}
  */
  readonly kafkaAclV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#kafka_acl_v3 InstaclustrProvider#kafka_acl_v3}
  */
  readonly kafkaAclV3?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#kafka_client_metric_subscription InstaclustrProvider#kafka_client_metric_subscription}
  */
  readonly kafkaClientMetricSubscription?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#kafka_cluster_v2 InstaclustrProvider#kafka_cluster_v2}
  */
  readonly kafkaClusterV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#kafka_cluster_v3 InstaclustrProvider#kafka_cluster_v3}
  */
  readonly kafkaClusterV3?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#kafka_connect_cluster_v2 InstaclustrProvider#kafka_connect_cluster_v2}
  */
  readonly kafkaConnectClusterV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#kafka_connect_mirror_v2 InstaclustrProvider#kafka_connect_mirror_v2}
  */
  readonly kafkaConnectMirrorV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#kafka_topic_v2 InstaclustrProvider#kafka_topic_v2}
  */
  readonly kafkaTopicV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#kafka_topic_v3 InstaclustrProvider#kafka_topic_v3}
  */
  readonly kafkaTopicV3?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#kafka_user_certificate_v2 InstaclustrProvider#kafka_user_certificate_v2}
  */
  readonly kafkaUserCertificateV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#kafka_user_v2 InstaclustrProvider#kafka_user_v2}
  */
  readonly kafkaUserV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#kafka_user_v3 InstaclustrProvider#kafka_user_v3}
  */
  readonly kafkaUserV3?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#kafka_user_v4 InstaclustrProvider#kafka_user_v4}
  */
  readonly kafkaUserV4?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#kafka_user_v5 InstaclustrProvider#kafka_user_v5}
  */
  readonly kafkaUserV5?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#mcp_gateway_cluster_v2 InstaclustrProvider#mcp_gateway_cluster_v2}
  */
  readonly mcpGatewayClusterV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#mongodb_cluster_v2 InstaclustrProvider#mongodb_cluster_v2}
  */
  readonly mongodbClusterV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#opensearch_cluster_v2 InstaclustrProvider#opensearch_cluster_v2}
  */
  readonly opensearchClusterV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#opensearch_egress_rule_v2 InstaclustrProvider#opensearch_egress_rule_v2}
  */
  readonly opensearchEgressRuleV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#opensearch_portal26_cluster_v2 InstaclustrProvider#opensearch_portal26_cluster_v2}
  */
  readonly opensearchPortal26ClusterV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#postgresql_cluster_v2 InstaclustrProvider#postgresql_cluster_v2}
  */
  readonly postgresqlClusterV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#postgresql_configuration_v2 InstaclustrProvider#postgresql_configuration_v2}
  */
  readonly postgresqlConfigurationV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#redis_cluster_v2 InstaclustrProvider#redis_cluster_v2}
  */
  readonly redisClusterV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#redis_user_v2 InstaclustrProvider#redis_user_v2}
  */
  readonly redisUserV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#valkey_cluster_v2 InstaclustrProvider#valkey_cluster_v2}
  */
  readonly valkeyClusterV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#valkey_user_v2 InstaclustrProvider#valkey_user_v2}
  */
  readonly valkeyUserV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#zero_inbound_access_gateway_v2 InstaclustrProvider#zero_inbound_access_gateway_v2}
  */
  readonly zeroInboundAccessGatewayV2?: string;
  /**
  * Use this to override the resource endpoint URL (the default one or the one constructed from the `region`).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#zookeeper_cluster_v2 InstaclustrProvider#zookeeper_cluster_v2}
  */
  readonly zookeeperClusterV2?: string;
}

export function instaclustrProviderEndpointsToTerraform(struct?: InstaclustrProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_encryption_key_v2: cdktf.stringToTerraform(struct!.awsEncryptionKeyV2),
    aws_endpoint_dns_names_v2: cdktf.stringToTerraform(struct!.awsEndpointDnsNamesV2),
    aws_endpoint_service_principal_v2: cdktf.stringToTerraform(struct!.awsEndpointServicePrincipalV2),
    aws_fsxn_v2: cdktf.stringToTerraform(struct!.awsFsxnV2),
    aws_security_group_firewall_rule_v2: cdktf.stringToTerraform(struct!.awsSecurityGroupFirewallRuleV2),
    aws_security_group_firewall_rules_v2: cdktf.stringToTerraform(struct!.awsSecurityGroupFirewallRulesV2),
    aws_vpc_peer_v2: cdktf.stringToTerraform(struct!.awsVpcPeerV2),
    azure_private_link_service_subscription_v2: cdktf.stringToTerraform(struct!.azurePrivateLinkServiceSubscriptionV2),
    azure_vnet_peer_v2: cdktf.stringToTerraform(struct!.azureVnetPeerV2),
    cadence_cluster_v2: cdktf.stringToTerraform(struct!.cadenceClusterV2),
    cassandra_cluster_v2: cdktf.stringToTerraform(struct!.cassandraClusterV2),
    clickhouse_cluster_v2: cdktf.stringToTerraform(struct!.clickhouseClusterV2),
    clickhouse_configuration_v2: cdktf.stringToTerraform(struct!.clickhouseConfigurationV2),
    clickhouse_integration_domain_v2: cdktf.stringToTerraform(struct!.clickhouseIntegrationDomainV2),
    clickhouse_integration_kafka_v2: cdktf.stringToTerraform(struct!.clickhouseIntegrationKafkaV2),
    clickhouse_integration_private_s3_v2: cdktf.stringToTerraform(struct!.clickhouseIntegrationPrivateS3V2),
    clickhouse_integration_s3_fsxn_v2: cdktf.stringToTerraform(struct!.clickhouseIntegrationS3FsxnV2),
    clickhouse_integration_s3_v2: cdktf.stringToTerraform(struct!.clickhouseIntegrationS3V2),
    cluster_exclusion_window_v2: cdktf.stringToTerraform(struct!.clusterExclusionWindowV2),
    cluster_network_firewall_rule_v2: cdktf.stringToTerraform(struct!.clusterNetworkFirewallRuleV2),
    cluster_network_firewall_rules_v2: cdktf.stringToTerraform(struct!.clusterNetworkFirewallRulesV2),
    cluster_waiter_v2: cdktf.stringToTerraform(struct!.clusterWaiterV2),
    couchbase_cluster_v2: cdktf.stringToTerraform(struct!.couchbaseClusterV2),
    gcp_service_attachments_accept_list_v2: cdktf.stringToTerraform(struct!.gcpServiceAttachmentsAcceptListV2),
    gcp_vpc_peer_v2: cdktf.stringToTerraform(struct!.gcpVpcPeerV2),
    kafka_acl_v2: cdktf.stringToTerraform(struct!.kafkaAclV2),
    kafka_acl_v3: cdktf.stringToTerraform(struct!.kafkaAclV3),
    kafka_client_metric_subscription: cdktf.stringToTerraform(struct!.kafkaClientMetricSubscription),
    kafka_cluster_v2: cdktf.stringToTerraform(struct!.kafkaClusterV2),
    kafka_cluster_v3: cdktf.stringToTerraform(struct!.kafkaClusterV3),
    kafka_connect_cluster_v2: cdktf.stringToTerraform(struct!.kafkaConnectClusterV2),
    kafka_connect_mirror_v2: cdktf.stringToTerraform(struct!.kafkaConnectMirrorV2),
    kafka_topic_v2: cdktf.stringToTerraform(struct!.kafkaTopicV2),
    kafka_topic_v3: cdktf.stringToTerraform(struct!.kafkaTopicV3),
    kafka_user_certificate_v2: cdktf.stringToTerraform(struct!.kafkaUserCertificateV2),
    kafka_user_v2: cdktf.stringToTerraform(struct!.kafkaUserV2),
    kafka_user_v3: cdktf.stringToTerraform(struct!.kafkaUserV3),
    kafka_user_v4: cdktf.stringToTerraform(struct!.kafkaUserV4),
    kafka_user_v5: cdktf.stringToTerraform(struct!.kafkaUserV5),
    mcp_gateway_cluster_v2: cdktf.stringToTerraform(struct!.mcpGatewayClusterV2),
    mongodb_cluster_v2: cdktf.stringToTerraform(struct!.mongodbClusterV2),
    opensearch_cluster_v2: cdktf.stringToTerraform(struct!.opensearchClusterV2),
    opensearch_egress_rule_v2: cdktf.stringToTerraform(struct!.opensearchEgressRuleV2),
    opensearch_portal26_cluster_v2: cdktf.stringToTerraform(struct!.opensearchPortal26ClusterV2),
    postgresql_cluster_v2: cdktf.stringToTerraform(struct!.postgresqlClusterV2),
    postgresql_configuration_v2: cdktf.stringToTerraform(struct!.postgresqlConfigurationV2),
    redis_cluster_v2: cdktf.stringToTerraform(struct!.redisClusterV2),
    redis_user_v2: cdktf.stringToTerraform(struct!.redisUserV2),
    valkey_cluster_v2: cdktf.stringToTerraform(struct!.valkeyClusterV2),
    valkey_user_v2: cdktf.stringToTerraform(struct!.valkeyUserV2),
    zero_inbound_access_gateway_v2: cdktf.stringToTerraform(struct!.zeroInboundAccessGatewayV2),
    zookeeper_cluster_v2: cdktf.stringToTerraform(struct!.zookeeperClusterV2),
  }
}


export function instaclustrProviderEndpointsToHclTerraform(struct?: InstaclustrProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_encryption_key_v2: {
      value: cdktf.stringToHclTerraform(struct!.awsEncryptionKeyV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_endpoint_dns_names_v2: {
      value: cdktf.stringToHclTerraform(struct!.awsEndpointDnsNamesV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_endpoint_service_principal_v2: {
      value: cdktf.stringToHclTerraform(struct!.awsEndpointServicePrincipalV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_fsxn_v2: {
      value: cdktf.stringToHclTerraform(struct!.awsFsxnV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_security_group_firewall_rule_v2: {
      value: cdktf.stringToHclTerraform(struct!.awsSecurityGroupFirewallRuleV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_security_group_firewall_rules_v2: {
      value: cdktf.stringToHclTerraform(struct!.awsSecurityGroupFirewallRulesV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_vpc_peer_v2: {
      value: cdktf.stringToHclTerraform(struct!.awsVpcPeerV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_private_link_service_subscription_v2: {
      value: cdktf.stringToHclTerraform(struct!.azurePrivateLinkServiceSubscriptionV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_vnet_peer_v2: {
      value: cdktf.stringToHclTerraform(struct!.azureVnetPeerV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cadence_cluster_v2: {
      value: cdktf.stringToHclTerraform(struct!.cadenceClusterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cassandra_cluster_v2: {
      value: cdktf.stringToHclTerraform(struct!.cassandraClusterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clickhouse_cluster_v2: {
      value: cdktf.stringToHclTerraform(struct!.clickhouseClusterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clickhouse_configuration_v2: {
      value: cdktf.stringToHclTerraform(struct!.clickhouseConfigurationV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clickhouse_integration_domain_v2: {
      value: cdktf.stringToHclTerraform(struct!.clickhouseIntegrationDomainV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clickhouse_integration_kafka_v2: {
      value: cdktf.stringToHclTerraform(struct!.clickhouseIntegrationKafkaV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clickhouse_integration_private_s3_v2: {
      value: cdktf.stringToHclTerraform(struct!.clickhouseIntegrationPrivateS3V2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clickhouse_integration_s3_fsxn_v2: {
      value: cdktf.stringToHclTerraform(struct!.clickhouseIntegrationS3FsxnV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clickhouse_integration_s3_v2: {
      value: cdktf.stringToHclTerraform(struct!.clickhouseIntegrationS3V2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_exclusion_window_v2: {
      value: cdktf.stringToHclTerraform(struct!.clusterExclusionWindowV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_network_firewall_rule_v2: {
      value: cdktf.stringToHclTerraform(struct!.clusterNetworkFirewallRuleV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_network_firewall_rules_v2: {
      value: cdktf.stringToHclTerraform(struct!.clusterNetworkFirewallRulesV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_waiter_v2: {
      value: cdktf.stringToHclTerraform(struct!.clusterWaiterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    couchbase_cluster_v2: {
      value: cdktf.stringToHclTerraform(struct!.couchbaseClusterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_service_attachments_accept_list_v2: {
      value: cdktf.stringToHclTerraform(struct!.gcpServiceAttachmentsAcceptListV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_vpc_peer_v2: {
      value: cdktf.stringToHclTerraform(struct!.gcpVpcPeerV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_acl_v2: {
      value: cdktf.stringToHclTerraform(struct!.kafkaAclV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_acl_v3: {
      value: cdktf.stringToHclTerraform(struct!.kafkaAclV3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_client_metric_subscription: {
      value: cdktf.stringToHclTerraform(struct!.kafkaClientMetricSubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_cluster_v2: {
      value: cdktf.stringToHclTerraform(struct!.kafkaClusterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_cluster_v3: {
      value: cdktf.stringToHclTerraform(struct!.kafkaClusterV3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_connect_cluster_v2: {
      value: cdktf.stringToHclTerraform(struct!.kafkaConnectClusterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_connect_mirror_v2: {
      value: cdktf.stringToHclTerraform(struct!.kafkaConnectMirrorV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_topic_v2: {
      value: cdktf.stringToHclTerraform(struct!.kafkaTopicV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_topic_v3: {
      value: cdktf.stringToHclTerraform(struct!.kafkaTopicV3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_user_certificate_v2: {
      value: cdktf.stringToHclTerraform(struct!.kafkaUserCertificateV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_user_v2: {
      value: cdktf.stringToHclTerraform(struct!.kafkaUserV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_user_v3: {
      value: cdktf.stringToHclTerraform(struct!.kafkaUserV3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_user_v4: {
      value: cdktf.stringToHclTerraform(struct!.kafkaUserV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_user_v5: {
      value: cdktf.stringToHclTerraform(struct!.kafkaUserV5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mcp_gateway_cluster_v2: {
      value: cdktf.stringToHclTerraform(struct!.mcpGatewayClusterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mongodb_cluster_v2: {
      value: cdktf.stringToHclTerraform(struct!.mongodbClusterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opensearch_cluster_v2: {
      value: cdktf.stringToHclTerraform(struct!.opensearchClusterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opensearch_egress_rule_v2: {
      value: cdktf.stringToHclTerraform(struct!.opensearchEgressRuleV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opensearch_portal26_cluster_v2: {
      value: cdktf.stringToHclTerraform(struct!.opensearchPortal26ClusterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgresql_cluster_v2: {
      value: cdktf.stringToHclTerraform(struct!.postgresqlClusterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgresql_configuration_v2: {
      value: cdktf.stringToHclTerraform(struct!.postgresqlConfigurationV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redis_cluster_v2: {
      value: cdktf.stringToHclTerraform(struct!.redisClusterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redis_user_v2: {
      value: cdktf.stringToHclTerraform(struct!.redisUserV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valkey_cluster_v2: {
      value: cdktf.stringToHclTerraform(struct!.valkeyClusterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valkey_user_v2: {
      value: cdktf.stringToHclTerraform(struct!.valkeyUserV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_inbound_access_gateway_v2: {
      value: cdktf.stringToHclTerraform(struct!.zeroInboundAccessGatewayV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zookeeper_cluster_v2: {
      value: cdktf.stringToHclTerraform(struct!.zookeeperClusterV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs instaclustr}
*/
export class InstaclustrProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstaclustrProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstaclustrProvider to import
  * @param importFromId The id of the existing InstaclustrProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstaclustrProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs instaclustr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstaclustrProviderConfig
  */
  public constructor(scope: Construct, id: string, config: InstaclustrProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.36',
        providerVersionConstraint: '2.1.36'
      },
      terraformProviderSource: 'instaclustr/instaclustr'
    });
    this._terraformKey = config.terraformKey;
    this._alias = config.alias;
    this._endpoints = config.endpoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // terraform_key - computed: false, optional: false, required: true
  private _terraformKey?: string; 
  public get terraformKey() {
    return this._terraformKey;
  }
  public set terraformKey(value: string | undefined) {
    this._terraformKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformKeyInput() {
    return this._terraformKey;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: InstaclustrProviderEndpoints[] | cdktf.IResolvable; 
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: InstaclustrProviderEndpoints[] | cdktf.IResolvable | undefined) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      terraform_key: cdktf.stringToTerraform(this._terraformKey),
      alias: cdktf.stringToTerraform(this._alias),
      endpoints: cdktf.listMapper(instaclustrProviderEndpointsToTerraform, true)(this._endpoints),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      terraform_key: {
        value: cdktf.stringToHclTerraform(this._terraformKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoints: {
        value: cdktf.listMapperHcl(instaclustrProviderEndpointsToHclTerraform, true)(this._endpoints),
        isBlock: true,
        type: "set",
        storageClassType: "InstaclustrProviderEndpointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
