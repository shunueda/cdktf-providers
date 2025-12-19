// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbVirtualServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * acl id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_id SlbVirtualServer#acl_id}
  */
  readonly aclId?: number;
  /**
  * acl id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_id_shared SlbVirtualServer#acl_id_shared}
  */
  readonly aclIdShared?: number;
  /**
  * Access List name (IPv4 Access List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_name SlbVirtualServer#acl_name}
  */
  readonly aclName?: string;
  /**
  * Access List name (IPv4 Access List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_name_shared SlbVirtualServer#acl_name_shared}
  */
  readonly aclNameShared?: string;
  /**
  * Disable Respond to Virtual Server ARP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#arp_disable SlbVirtualServer#arp_disable}
  */
  readonly arpDisable?: number;
  /**
  * Create a description for VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#description SlbVirtualServer#description}
  */
  readonly description?: string;
  /**
  * Disable virtual server GARP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#disable_vip_adv SlbVirtualServer#disable_vip_adv}
  */
  readonly disableVipAdv?: number;
  /**
  * 'enable': Enable Virtual Server (default); 'disable': Disable Virtual Server; 'disable-when-all-ports-down': Disable Virtual Server when all member ports are down; 'disable-when-any-port-down': Disable Virtual Server when any member port is down;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#enable_disable_action SlbVirtualServer#enable_disable_action}
  */
  readonly enableDisableAction?: string;
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#ethernet SlbVirtualServer#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Enable extended statistics on virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#extended_stats SlbVirtualServer#extended_stats}
  */
  readonly extendedStats?: number;
  /**
  * Enable Gaming Protocol Compliance Check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#gaming_protocol_compliance SlbVirtualServer#gaming_protocol_compliance}
  */
  readonly gamingProtocolCompliance?: number;
  /**
  * Dynamic failover based on vip status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#ha_dynamic SlbVirtualServer#ha_dynamic}
  */
  readonly haDynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#id SlbVirtualServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#ip_address SlbVirtualServer#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * ipv6 acl name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#ipv6_acl SlbVirtualServer#ipv6_acl}
  */
  readonly ipv6Acl?: string;
  /**
  * ipv6 acl name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#ipv6_acl_shared SlbVirtualServer#ipv6_acl_shared}
  */
  readonly ipv6AclShared?: string;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#ipv6_address SlbVirtualServer#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * SLB Virtual Server Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#name SlbVirtualServer#name}
  */
  readonly name: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#netmask SlbVirtualServer#netmask}
  */
  readonly netmask?: string;
  /**
  * Route map reference (Name of route-map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#redistribute_route_map SlbVirtualServer#redistribute_route_map}
  */
  readonly redistributeRouteMap?: string;
  /**
  * Flag VIP for special redistribution handling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#redistribution_flagged SlbVirtualServer#redistribution_flagged}
  */
  readonly redistributionFlagged?: number;
  /**
  * Reference a policy template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_policy_template SlbVirtualServer#shared_partition_policy_template}
  */
  readonly sharedPartitionPolicyTemplate?: number;
  /**
  * Reference a virtual-server template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_vs_template SlbVirtualServer#shared_partition_vs_template}
  */
  readonly sharedPartitionVsTemplate?: number;
  /**
  * 'stats-data-enable': Enable statistical data collection for virtual server; 'stats-data-disable': Disable statistical data collection for virtual server;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#stats_data_action SlbVirtualServer#stats_data_action}
  */
  readonly statsDataAction?: string;
  /**
  * Suppress VIP internal loopback programming
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#suppress_internal_loopback SlbVirtualServer#suppress_internal_loopback}
  */
  readonly suppressInternalLoopback?: number;
  /**
  * NAT Logging template (NAT Logging template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_logging SlbVirtualServer#template_logging}
  */
  readonly templateLogging?: string;
  /**
  * Policy template (Policy template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_policy SlbVirtualServer#template_policy}
  */
  readonly templatePolicy?: string;
  /**
  * Policy Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_policy_shared SlbVirtualServer#template_policy_shared}
  */
  readonly templatePolicyShared?: string;
  /**
  * Scaleout template (Scaleout template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_scaleout SlbVirtualServer#template_scaleout}
  */
  readonly templateScaleout?: string;
  /**
  * Virtual server template (Virtual server template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_virtual_server SlbVirtualServer#template_virtual_server}
  */
  readonly templateVirtualServer?: string;
  /**
  * Virtual-Server Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_virtual_server_shared SlbVirtualServer#template_virtual_server_shared}
  */
  readonly templateVirtualServerShared?: string;
  /**
  * Use Interface IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#use_if_ip SlbVirtualServer#use_if_ip}
  */
  readonly useIfIp?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#user_tag SlbVirtualServer#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#uuid SlbVirtualServer#uuid}
  */
  readonly uuid?: string;
  /**
  * 'drop-packet': Drop packet for disabled virtual-port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#vport_disable_action SlbVirtualServer#vport_disable_action}
  */
  readonly vportDisableAction?: string;
  /**
  * Join a vrrp group (Specify ha VRRP-A vrid)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#vrid SlbVirtualServer#vrid}
  */
  readonly vrid?: number;
  /**
  * migrate_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#migrate_vip SlbVirtualServer#migrate_vip}
  */
  readonly migrateVip?: SlbVirtualServerMigrateVip;
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#port_list SlbVirtualServer#port_list}
  */
  readonly portList?: SlbVirtualServerPortListStruct[] | cdktf.IResolvable;
}
export interface SlbVirtualServerMigrateVip {
  /**
  * Cancel migration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#cancel_migration SlbVirtualServer#cancel_migration}
  */
  readonly cancelMigration?: number;
  /**
  * Complete the migration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#finish_migration SlbVirtualServer#finish_migration}
  */
  readonly finishMigration?: number;
  /**
  * Number of CPUs on the target platform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#target_data_cpu SlbVirtualServer#target_data_cpu}
  */
  readonly targetDataCpu?: number;
  /**
  * Specify IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#target_floating_ipv4 SlbVirtualServer#target_floating_ipv4}
  */
  readonly targetFloatingIpv4?: string;
  /**
  * Specify IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#target_floating_ipv6 SlbVirtualServer#target_floating_ipv6}
  */
  readonly targetFloatingIpv6?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#uuid SlbVirtualServer#uuid}
  */
  readonly uuid?: string;
}

export function slbVirtualServerMigrateVipToTerraform(struct?: SlbVirtualServerMigrateVipOutputReference | SlbVirtualServerMigrateVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cancel_migration: cdktf.numberToTerraform(struct!.cancelMigration),
    finish_migration: cdktf.numberToTerraform(struct!.finishMigration),
    target_data_cpu: cdktf.numberToTerraform(struct!.targetDataCpu),
    target_floating_ipv4: cdktf.stringToTerraform(struct!.targetFloatingIpv4),
    target_floating_ipv6: cdktf.stringToTerraform(struct!.targetFloatingIpv6),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbVirtualServerMigrateVipToHclTerraform(struct?: SlbVirtualServerMigrateVipOutputReference | SlbVirtualServerMigrateVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cancel_migration: {
      value: cdktf.numberToHclTerraform(struct!.cancelMigration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    finish_migration: {
      value: cdktf.numberToHclTerraform(struct!.finishMigration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_data_cpu: {
      value: cdktf.numberToHclTerraform(struct!.targetDataCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_floating_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.targetFloatingIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_floating_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.targetFloatingIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerMigrateVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbVirtualServerMigrateVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cancelMigration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelMigration = this._cancelMigration;
    }
    if (this._finishMigration !== undefined) {
      hasAnyValues = true;
      internalValueResult.finishMigration = this._finishMigration;
    }
    if (this._targetDataCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDataCpu = this._targetDataCpu;
    }
    if (this._targetFloatingIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFloatingIpv4 = this._targetFloatingIpv4;
    }
    if (this._targetFloatingIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFloatingIpv6 = this._targetFloatingIpv6;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerMigrateVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cancelMigration = undefined;
      this._finishMigration = undefined;
      this._targetDataCpu = undefined;
      this._targetFloatingIpv4 = undefined;
      this._targetFloatingIpv6 = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cancelMigration = value.cancelMigration;
      this._finishMigration = value.finishMigration;
      this._targetDataCpu = value.targetDataCpu;
      this._targetFloatingIpv4 = value.targetFloatingIpv4;
      this._targetFloatingIpv6 = value.targetFloatingIpv6;
      this._uuid = value.uuid;
    }
  }

  // cancel_migration - computed: false, optional: true, required: false
  private _cancelMigration?: number; 
  public get cancelMigration() {
    return this.getNumberAttribute('cancel_migration');
  }
  public set cancelMigration(value: number) {
    this._cancelMigration = value;
  }
  public resetCancelMigration() {
    this._cancelMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelMigrationInput() {
    return this._cancelMigration;
  }

  // finish_migration - computed: false, optional: true, required: false
  private _finishMigration?: number; 
  public get finishMigration() {
    return this.getNumberAttribute('finish_migration');
  }
  public set finishMigration(value: number) {
    this._finishMigration = value;
  }
  public resetFinishMigration() {
    this._finishMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishMigrationInput() {
    return this._finishMigration;
  }

  // target_data_cpu - computed: false, optional: true, required: false
  private _targetDataCpu?: number; 
  public get targetDataCpu() {
    return this.getNumberAttribute('target_data_cpu');
  }
  public set targetDataCpu(value: number) {
    this._targetDataCpu = value;
  }
  public resetTargetDataCpu() {
    this._targetDataCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDataCpuInput() {
    return this._targetDataCpu;
  }

  // target_floating_ipv4 - computed: false, optional: true, required: false
  private _targetFloatingIpv4?: string; 
  public get targetFloatingIpv4() {
    return this.getStringAttribute('target_floating_ipv4');
  }
  public set targetFloatingIpv4(value: string) {
    this._targetFloatingIpv4 = value;
  }
  public resetTargetFloatingIpv4() {
    this._targetFloatingIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFloatingIpv4Input() {
    return this._targetFloatingIpv4;
  }

  // target_floating_ipv6 - computed: false, optional: true, required: false
  private _targetFloatingIpv6?: string; 
  public get targetFloatingIpv6() {
    return this.getStringAttribute('target_floating_ipv6');
  }
  public set targetFloatingIpv6(value: string) {
    this._targetFloatingIpv6 = value;
  }
  public resetTargetFloatingIpv6() {
    this._targetFloatingIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFloatingIpv6Input() {
    return this._targetFloatingIpv6;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface SlbVirtualServerPortListAclListStruct {
  /**
  * ACL id VPORT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_id SlbVirtualServer#acl_id}
  */
  readonly aclId?: number;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_id_seq_num SlbVirtualServer#acl_id_seq_num}
  */
  readonly aclIdSeqNum?: number;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_id_seq_num_shared SlbVirtualServer#acl_id_seq_num_shared}
  */
  readonly aclIdSeqNumShared?: number;
  /**
  * acl id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_id_shared SlbVirtualServer#acl_id_shared}
  */
  readonly aclIdShared?: number;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_id_src_nat_pool SlbVirtualServer#acl_id_src_nat_pool}
  */
  readonly aclIdSrcNatPool?: string;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_id_src_nat_pool_shared SlbVirtualServer#acl_id_src_nat_pool_shared}
  */
  readonly aclIdSrcNatPoolShared?: string;
  /**
  * Apply an access list name (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_name SlbVirtualServer#acl_name}
  */
  readonly aclName?: string;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_name_seq_num SlbVirtualServer#acl_name_seq_num}
  */
  readonly aclNameSeqNum?: number;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_name_seq_num_shared SlbVirtualServer#acl_name_seq_num_shared}
  */
  readonly aclNameSeqNumShared?: number;
  /**
  * Apply an access list name (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_name_shared SlbVirtualServer#acl_name_shared}
  */
  readonly aclNameShared?: string;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_name_src_nat_pool SlbVirtualServer#acl_name_src_nat_pool}
  */
  readonly aclNameSrcNatPool?: string;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_name_src_nat_pool_shared SlbVirtualServer#acl_name_src_nat_pool_shared}
  */
  readonly aclNameSrcNatPoolShared?: string;
  /**
  * Policy based Source NAT from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_pool_id SlbVirtualServer#shared_partition_pool_id}
  */
  readonly sharedPartitionPoolId?: number;
  /**
  * Policy based Source NAT from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_pool_name SlbVirtualServer#shared_partition_pool_name}
  */
  readonly sharedPartitionPoolName?: number;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#v_acl_id_seq_num SlbVirtualServer#v_acl_id_seq_num}
  */
  readonly vAclIdSeqNum?: number;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#v_acl_id_seq_num_shared SlbVirtualServer#v_acl_id_seq_num_shared}
  */
  readonly vAclIdSeqNumShared?: number;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#v_acl_id_src_nat_pool SlbVirtualServer#v_acl_id_src_nat_pool}
  */
  readonly vAclIdSrcNatPool?: string;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#v_acl_id_src_nat_pool_shared SlbVirtualServer#v_acl_id_src_nat_pool_shared}
  */
  readonly vAclIdSrcNatPoolShared?: string;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#v_acl_name_seq_num SlbVirtualServer#v_acl_name_seq_num}
  */
  readonly vAclNameSeqNum?: number;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#v_acl_name_seq_num_shared SlbVirtualServer#v_acl_name_seq_num_shared}
  */
  readonly vAclNameSeqNumShared?: number;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#v_acl_name_src_nat_pool SlbVirtualServer#v_acl_name_src_nat_pool}
  */
  readonly vAclNameSrcNatPool?: string;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#v_acl_name_src_nat_pool_shared SlbVirtualServer#v_acl_name_src_nat_pool_shared}
  */
  readonly vAclNameSrcNatPoolShared?: string;
  /**
  * Policy based Source NAT from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#v_shared_partition_pool_id SlbVirtualServer#v_shared_partition_pool_id}
  */
  readonly vSharedPartitionPoolId?: number;
  /**
  * Policy based Source NAT from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#v_shared_partition_pool_name SlbVirtualServer#v_shared_partition_pool_name}
  */
  readonly vSharedPartitionPoolName?: number;
}

export function slbVirtualServerPortListAclListStructToTerraform(struct?: SlbVirtualServerPortListAclListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_id: cdktf.numberToTerraform(struct!.aclId),
    acl_id_seq_num: cdktf.numberToTerraform(struct!.aclIdSeqNum),
    acl_id_seq_num_shared: cdktf.numberToTerraform(struct!.aclIdSeqNumShared),
    acl_id_shared: cdktf.numberToTerraform(struct!.aclIdShared),
    acl_id_src_nat_pool: cdktf.stringToTerraform(struct!.aclIdSrcNatPool),
    acl_id_src_nat_pool_shared: cdktf.stringToTerraform(struct!.aclIdSrcNatPoolShared),
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    acl_name_seq_num: cdktf.numberToTerraform(struct!.aclNameSeqNum),
    acl_name_seq_num_shared: cdktf.numberToTerraform(struct!.aclNameSeqNumShared),
    acl_name_shared: cdktf.stringToTerraform(struct!.aclNameShared),
    acl_name_src_nat_pool: cdktf.stringToTerraform(struct!.aclNameSrcNatPool),
    acl_name_src_nat_pool_shared: cdktf.stringToTerraform(struct!.aclNameSrcNatPoolShared),
    shared_partition_pool_id: cdktf.numberToTerraform(struct!.sharedPartitionPoolId),
    shared_partition_pool_name: cdktf.numberToTerraform(struct!.sharedPartitionPoolName),
    v_acl_id_seq_num: cdktf.numberToTerraform(struct!.vAclIdSeqNum),
    v_acl_id_seq_num_shared: cdktf.numberToTerraform(struct!.vAclIdSeqNumShared),
    v_acl_id_src_nat_pool: cdktf.stringToTerraform(struct!.vAclIdSrcNatPool),
    v_acl_id_src_nat_pool_shared: cdktf.stringToTerraform(struct!.vAclIdSrcNatPoolShared),
    v_acl_name_seq_num: cdktf.numberToTerraform(struct!.vAclNameSeqNum),
    v_acl_name_seq_num_shared: cdktf.numberToTerraform(struct!.vAclNameSeqNumShared),
    v_acl_name_src_nat_pool: cdktf.stringToTerraform(struct!.vAclNameSrcNatPool),
    v_acl_name_src_nat_pool_shared: cdktf.stringToTerraform(struct!.vAclNameSrcNatPoolShared),
    v_shared_partition_pool_id: cdktf.numberToTerraform(struct!.vSharedPartitionPoolId),
    v_shared_partition_pool_name: cdktf.numberToTerraform(struct!.vSharedPartitionPoolName),
  }
}


export function slbVirtualServerPortListAclListStructToHclTerraform(struct?: SlbVirtualServerPortListAclListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_id: {
      value: cdktf.numberToHclTerraform(struct!.aclId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_id_seq_num: {
      value: cdktf.numberToHclTerraform(struct!.aclIdSeqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_id_seq_num_shared: {
      value: cdktf.numberToHclTerraform(struct!.aclIdSeqNumShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_id_shared: {
      value: cdktf.numberToHclTerraform(struct!.aclIdShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_id_src_nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.aclIdSrcNatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_id_src_nat_pool_shared: {
      value: cdktf.stringToHclTerraform(struct!.aclIdSrcNatPoolShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name_seq_num: {
      value: cdktf.numberToHclTerraform(struct!.aclNameSeqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_name_seq_num_shared: {
      value: cdktf.numberToHclTerraform(struct!.aclNameSeqNumShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_name_shared: {
      value: cdktf.stringToHclTerraform(struct!.aclNameShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name_src_nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.aclNameSrcNatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name_src_nat_pool_shared: {
      value: cdktf.stringToHclTerraform(struct!.aclNameSrcNatPoolShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_partition_pool_id: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_pool_name: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_acl_id_seq_num: {
      value: cdktf.numberToHclTerraform(struct!.vAclIdSeqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_acl_id_seq_num_shared: {
      value: cdktf.numberToHclTerraform(struct!.vAclIdSeqNumShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_acl_id_src_nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.vAclIdSrcNatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v_acl_id_src_nat_pool_shared: {
      value: cdktf.stringToHclTerraform(struct!.vAclIdSrcNatPoolShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v_acl_name_seq_num: {
      value: cdktf.numberToHclTerraform(struct!.vAclNameSeqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_acl_name_seq_num_shared: {
      value: cdktf.numberToHclTerraform(struct!.vAclNameSeqNumShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_acl_name_src_nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.vAclNameSrcNatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v_acl_name_src_nat_pool_shared: {
      value: cdktf.stringToHclTerraform(struct!.vAclNameSrcNatPoolShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v_shared_partition_pool_id: {
      value: cdktf.numberToHclTerraform(struct!.vSharedPartitionPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_shared_partition_pool_name: {
      value: cdktf.numberToHclTerraform(struct!.vSharedPartitionPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortListAclListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SlbVirtualServerPortListAclListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclId = this._aclId;
    }
    if (this._aclIdSeqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclIdSeqNum = this._aclIdSeqNum;
    }
    if (this._aclIdSeqNumShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclIdSeqNumShared = this._aclIdSeqNumShared;
    }
    if (this._aclIdShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclIdShared = this._aclIdShared;
    }
    if (this._aclIdSrcNatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclIdSrcNatPool = this._aclIdSrcNatPool;
    }
    if (this._aclIdSrcNatPoolShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclIdSrcNatPoolShared = this._aclIdSrcNatPoolShared;
    }
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._aclNameSeqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameSeqNum = this._aclNameSeqNum;
    }
    if (this._aclNameSeqNumShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameSeqNumShared = this._aclNameSeqNumShared;
    }
    if (this._aclNameShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameShared = this._aclNameShared;
    }
    if (this._aclNameSrcNatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameSrcNatPool = this._aclNameSrcNatPool;
    }
    if (this._aclNameSrcNatPoolShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameSrcNatPoolShared = this._aclNameSrcNatPoolShared;
    }
    if (this._sharedPartitionPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionPoolId = this._sharedPartitionPoolId;
    }
    if (this._sharedPartitionPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionPoolName = this._sharedPartitionPoolName;
    }
    if (this._vAclIdSeqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclIdSeqNum = this._vAclIdSeqNum;
    }
    if (this._vAclIdSeqNumShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclIdSeqNumShared = this._vAclIdSeqNumShared;
    }
    if (this._vAclIdSrcNatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclIdSrcNatPool = this._vAclIdSrcNatPool;
    }
    if (this._vAclIdSrcNatPoolShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclIdSrcNatPoolShared = this._vAclIdSrcNatPoolShared;
    }
    if (this._vAclNameSeqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclNameSeqNum = this._vAclNameSeqNum;
    }
    if (this._vAclNameSeqNumShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclNameSeqNumShared = this._vAclNameSeqNumShared;
    }
    if (this._vAclNameSrcNatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclNameSrcNatPool = this._vAclNameSrcNatPool;
    }
    if (this._vAclNameSrcNatPoolShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclNameSrcNatPoolShared = this._vAclNameSrcNatPoolShared;
    }
    if (this._vSharedPartitionPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vSharedPartitionPoolId = this._vSharedPartitionPoolId;
    }
    if (this._vSharedPartitionPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vSharedPartitionPoolName = this._vSharedPartitionPoolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortListAclListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclId = undefined;
      this._aclIdSeqNum = undefined;
      this._aclIdSeqNumShared = undefined;
      this._aclIdShared = undefined;
      this._aclIdSrcNatPool = undefined;
      this._aclIdSrcNatPoolShared = undefined;
      this._aclName = undefined;
      this._aclNameSeqNum = undefined;
      this._aclNameSeqNumShared = undefined;
      this._aclNameShared = undefined;
      this._aclNameSrcNatPool = undefined;
      this._aclNameSrcNatPoolShared = undefined;
      this._sharedPartitionPoolId = undefined;
      this._sharedPartitionPoolName = undefined;
      this._vAclIdSeqNum = undefined;
      this._vAclIdSeqNumShared = undefined;
      this._vAclIdSrcNatPool = undefined;
      this._vAclIdSrcNatPoolShared = undefined;
      this._vAclNameSeqNum = undefined;
      this._vAclNameSeqNumShared = undefined;
      this._vAclNameSrcNatPool = undefined;
      this._vAclNameSrcNatPoolShared = undefined;
      this._vSharedPartitionPoolId = undefined;
      this._vSharedPartitionPoolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclId = value.aclId;
      this._aclIdSeqNum = value.aclIdSeqNum;
      this._aclIdSeqNumShared = value.aclIdSeqNumShared;
      this._aclIdShared = value.aclIdShared;
      this._aclIdSrcNatPool = value.aclIdSrcNatPool;
      this._aclIdSrcNatPoolShared = value.aclIdSrcNatPoolShared;
      this._aclName = value.aclName;
      this._aclNameSeqNum = value.aclNameSeqNum;
      this._aclNameSeqNumShared = value.aclNameSeqNumShared;
      this._aclNameShared = value.aclNameShared;
      this._aclNameSrcNatPool = value.aclNameSrcNatPool;
      this._aclNameSrcNatPoolShared = value.aclNameSrcNatPoolShared;
      this._sharedPartitionPoolId = value.sharedPartitionPoolId;
      this._sharedPartitionPoolName = value.sharedPartitionPoolName;
      this._vAclIdSeqNum = value.vAclIdSeqNum;
      this._vAclIdSeqNumShared = value.vAclIdSeqNumShared;
      this._vAclIdSrcNatPool = value.vAclIdSrcNatPool;
      this._vAclIdSrcNatPoolShared = value.vAclIdSrcNatPoolShared;
      this._vAclNameSeqNum = value.vAclNameSeqNum;
      this._vAclNameSeqNumShared = value.vAclNameSeqNumShared;
      this._vAclNameSrcNatPool = value.vAclNameSrcNatPool;
      this._vAclNameSrcNatPoolShared = value.vAclNameSrcNatPoolShared;
      this._vSharedPartitionPoolId = value.vSharedPartitionPoolId;
      this._vSharedPartitionPoolName = value.vSharedPartitionPoolName;
    }
  }

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // acl_id_seq_num - computed: false, optional: true, required: false
  private _aclIdSeqNum?: number; 
  public get aclIdSeqNum() {
    return this.getNumberAttribute('acl_id_seq_num');
  }
  public set aclIdSeqNum(value: number) {
    this._aclIdSeqNum = value;
  }
  public resetAclIdSeqNum() {
    this._aclIdSeqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdSeqNumInput() {
    return this._aclIdSeqNum;
  }

  // acl_id_seq_num_shared - computed: false, optional: true, required: false
  private _aclIdSeqNumShared?: number; 
  public get aclIdSeqNumShared() {
    return this.getNumberAttribute('acl_id_seq_num_shared');
  }
  public set aclIdSeqNumShared(value: number) {
    this._aclIdSeqNumShared = value;
  }
  public resetAclIdSeqNumShared() {
    this._aclIdSeqNumShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdSeqNumSharedInput() {
    return this._aclIdSeqNumShared;
  }

  // acl_id_shared - computed: false, optional: true, required: false
  private _aclIdShared?: number; 
  public get aclIdShared() {
    return this.getNumberAttribute('acl_id_shared');
  }
  public set aclIdShared(value: number) {
    this._aclIdShared = value;
  }
  public resetAclIdShared() {
    this._aclIdShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdSharedInput() {
    return this._aclIdShared;
  }

  // acl_id_src_nat_pool - computed: false, optional: true, required: false
  private _aclIdSrcNatPool?: string; 
  public get aclIdSrcNatPool() {
    return this.getStringAttribute('acl_id_src_nat_pool');
  }
  public set aclIdSrcNatPool(value: string) {
    this._aclIdSrcNatPool = value;
  }
  public resetAclIdSrcNatPool() {
    this._aclIdSrcNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdSrcNatPoolInput() {
    return this._aclIdSrcNatPool;
  }

  // acl_id_src_nat_pool_shared - computed: false, optional: true, required: false
  private _aclIdSrcNatPoolShared?: string; 
  public get aclIdSrcNatPoolShared() {
    return this.getStringAttribute('acl_id_src_nat_pool_shared');
  }
  public set aclIdSrcNatPoolShared(value: string) {
    this._aclIdSrcNatPoolShared = value;
  }
  public resetAclIdSrcNatPoolShared() {
    this._aclIdSrcNatPoolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdSrcNatPoolSharedInput() {
    return this._aclIdSrcNatPoolShared;
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // acl_name_seq_num - computed: false, optional: true, required: false
  private _aclNameSeqNum?: number; 
  public get aclNameSeqNum() {
    return this.getNumberAttribute('acl_name_seq_num');
  }
  public set aclNameSeqNum(value: number) {
    this._aclNameSeqNum = value;
  }
  public resetAclNameSeqNum() {
    this._aclNameSeqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameSeqNumInput() {
    return this._aclNameSeqNum;
  }

  // acl_name_seq_num_shared - computed: false, optional: true, required: false
  private _aclNameSeqNumShared?: number; 
  public get aclNameSeqNumShared() {
    return this.getNumberAttribute('acl_name_seq_num_shared');
  }
  public set aclNameSeqNumShared(value: number) {
    this._aclNameSeqNumShared = value;
  }
  public resetAclNameSeqNumShared() {
    this._aclNameSeqNumShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameSeqNumSharedInput() {
    return this._aclNameSeqNumShared;
  }

  // acl_name_shared - computed: false, optional: true, required: false
  private _aclNameShared?: string; 
  public get aclNameShared() {
    return this.getStringAttribute('acl_name_shared');
  }
  public set aclNameShared(value: string) {
    this._aclNameShared = value;
  }
  public resetAclNameShared() {
    this._aclNameShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameSharedInput() {
    return this._aclNameShared;
  }

  // acl_name_src_nat_pool - computed: false, optional: true, required: false
  private _aclNameSrcNatPool?: string; 
  public get aclNameSrcNatPool() {
    return this.getStringAttribute('acl_name_src_nat_pool');
  }
  public set aclNameSrcNatPool(value: string) {
    this._aclNameSrcNatPool = value;
  }
  public resetAclNameSrcNatPool() {
    this._aclNameSrcNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameSrcNatPoolInput() {
    return this._aclNameSrcNatPool;
  }

  // acl_name_src_nat_pool_shared - computed: false, optional: true, required: false
  private _aclNameSrcNatPoolShared?: string; 
  public get aclNameSrcNatPoolShared() {
    return this.getStringAttribute('acl_name_src_nat_pool_shared');
  }
  public set aclNameSrcNatPoolShared(value: string) {
    this._aclNameSrcNatPoolShared = value;
  }
  public resetAclNameSrcNatPoolShared() {
    this._aclNameSrcNatPoolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameSrcNatPoolSharedInput() {
    return this._aclNameSrcNatPoolShared;
  }

  // shared_partition_pool_id - computed: false, optional: true, required: false
  private _sharedPartitionPoolId?: number; 
  public get sharedPartitionPoolId() {
    return this.getNumberAttribute('shared_partition_pool_id');
  }
  public set sharedPartitionPoolId(value: number) {
    this._sharedPartitionPoolId = value;
  }
  public resetSharedPartitionPoolId() {
    this._sharedPartitionPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPoolIdInput() {
    return this._sharedPartitionPoolId;
  }

  // shared_partition_pool_name - computed: false, optional: true, required: false
  private _sharedPartitionPoolName?: number; 
  public get sharedPartitionPoolName() {
    return this.getNumberAttribute('shared_partition_pool_name');
  }
  public set sharedPartitionPoolName(value: number) {
    this._sharedPartitionPoolName = value;
  }
  public resetSharedPartitionPoolName() {
    this._sharedPartitionPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPoolNameInput() {
    return this._sharedPartitionPoolName;
  }

  // v_acl_id_seq_num - computed: false, optional: true, required: false
  private _vAclIdSeqNum?: number; 
  public get vAclIdSeqNum() {
    return this.getNumberAttribute('v_acl_id_seq_num');
  }
  public set vAclIdSeqNum(value: number) {
    this._vAclIdSeqNum = value;
  }
  public resetVAclIdSeqNum() {
    this._vAclIdSeqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclIdSeqNumInput() {
    return this._vAclIdSeqNum;
  }

  // v_acl_id_seq_num_shared - computed: false, optional: true, required: false
  private _vAclIdSeqNumShared?: number; 
  public get vAclIdSeqNumShared() {
    return this.getNumberAttribute('v_acl_id_seq_num_shared');
  }
  public set vAclIdSeqNumShared(value: number) {
    this._vAclIdSeqNumShared = value;
  }
  public resetVAclIdSeqNumShared() {
    this._vAclIdSeqNumShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclIdSeqNumSharedInput() {
    return this._vAclIdSeqNumShared;
  }

  // v_acl_id_src_nat_pool - computed: false, optional: true, required: false
  private _vAclIdSrcNatPool?: string; 
  public get vAclIdSrcNatPool() {
    return this.getStringAttribute('v_acl_id_src_nat_pool');
  }
  public set vAclIdSrcNatPool(value: string) {
    this._vAclIdSrcNatPool = value;
  }
  public resetVAclIdSrcNatPool() {
    this._vAclIdSrcNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclIdSrcNatPoolInput() {
    return this._vAclIdSrcNatPool;
  }

  // v_acl_id_src_nat_pool_shared - computed: false, optional: true, required: false
  private _vAclIdSrcNatPoolShared?: string; 
  public get vAclIdSrcNatPoolShared() {
    return this.getStringAttribute('v_acl_id_src_nat_pool_shared');
  }
  public set vAclIdSrcNatPoolShared(value: string) {
    this._vAclIdSrcNatPoolShared = value;
  }
  public resetVAclIdSrcNatPoolShared() {
    this._vAclIdSrcNatPoolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclIdSrcNatPoolSharedInput() {
    return this._vAclIdSrcNatPoolShared;
  }

  // v_acl_name_seq_num - computed: false, optional: true, required: false
  private _vAclNameSeqNum?: number; 
  public get vAclNameSeqNum() {
    return this.getNumberAttribute('v_acl_name_seq_num');
  }
  public set vAclNameSeqNum(value: number) {
    this._vAclNameSeqNum = value;
  }
  public resetVAclNameSeqNum() {
    this._vAclNameSeqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclNameSeqNumInput() {
    return this._vAclNameSeqNum;
  }

  // v_acl_name_seq_num_shared - computed: false, optional: true, required: false
  private _vAclNameSeqNumShared?: number; 
  public get vAclNameSeqNumShared() {
    return this.getNumberAttribute('v_acl_name_seq_num_shared');
  }
  public set vAclNameSeqNumShared(value: number) {
    this._vAclNameSeqNumShared = value;
  }
  public resetVAclNameSeqNumShared() {
    this._vAclNameSeqNumShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclNameSeqNumSharedInput() {
    return this._vAclNameSeqNumShared;
  }

  // v_acl_name_src_nat_pool - computed: false, optional: true, required: false
  private _vAclNameSrcNatPool?: string; 
  public get vAclNameSrcNatPool() {
    return this.getStringAttribute('v_acl_name_src_nat_pool');
  }
  public set vAclNameSrcNatPool(value: string) {
    this._vAclNameSrcNatPool = value;
  }
  public resetVAclNameSrcNatPool() {
    this._vAclNameSrcNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclNameSrcNatPoolInput() {
    return this._vAclNameSrcNatPool;
  }

  // v_acl_name_src_nat_pool_shared - computed: false, optional: true, required: false
  private _vAclNameSrcNatPoolShared?: string; 
  public get vAclNameSrcNatPoolShared() {
    return this.getStringAttribute('v_acl_name_src_nat_pool_shared');
  }
  public set vAclNameSrcNatPoolShared(value: string) {
    this._vAclNameSrcNatPoolShared = value;
  }
  public resetVAclNameSrcNatPoolShared() {
    this._vAclNameSrcNatPoolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclNameSrcNatPoolSharedInput() {
    return this._vAclNameSrcNatPoolShared;
  }

  // v_shared_partition_pool_id - computed: false, optional: true, required: false
  private _vSharedPartitionPoolId?: number; 
  public get vSharedPartitionPoolId() {
    return this.getNumberAttribute('v_shared_partition_pool_id');
  }
  public set vSharedPartitionPoolId(value: number) {
    this._vSharedPartitionPoolId = value;
  }
  public resetVSharedPartitionPoolId() {
    this._vSharedPartitionPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vSharedPartitionPoolIdInput() {
    return this._vSharedPartitionPoolId;
  }

  // v_shared_partition_pool_name - computed: false, optional: true, required: false
  private _vSharedPartitionPoolName?: number; 
  public get vSharedPartitionPoolName() {
    return this.getNumberAttribute('v_shared_partition_pool_name');
  }
  public set vSharedPartitionPoolName(value: number) {
    this._vSharedPartitionPoolName = value;
  }
  public resetVSharedPartitionPoolName() {
    this._vSharedPartitionPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vSharedPartitionPoolNameInput() {
    return this._vSharedPartitionPoolName;
  }
}

export class SlbVirtualServerPortListAclListStructList extends cdktf.ComplexList {
  public internalValue? : SlbVirtualServerPortListAclListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SlbVirtualServerPortListAclListStructOutputReference {
    return new SlbVirtualServerPortListAclListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbVirtualServerPortListAflexScripts {
  /**
  * aFleX Script Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#aflex SlbVirtualServer#aflex}
  */
  readonly aflex?: string;
  /**
  * aFleX Script Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#aflex_shared SlbVirtualServer#aflex_shared}
  */
  readonly aflexShared?: string;
}

export function slbVirtualServerPortListAflexScriptsToTerraform(struct?: SlbVirtualServerPortListAflexScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex: cdktf.stringToTerraform(struct!.aflex),
    aflex_shared: cdktf.stringToTerraform(struct!.aflexShared),
  }
}


export function slbVirtualServerPortListAflexScriptsToHclTerraform(struct?: SlbVirtualServerPortListAflexScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflex: {
      value: cdktf.stringToHclTerraform(struct!.aflex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aflex_shared: {
      value: cdktf.stringToHclTerraform(struct!.aflexShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortListAflexScriptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SlbVirtualServerPortListAflexScripts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflex !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflex = this._aflex;
    }
    if (this._aflexShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexShared = this._aflexShared;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortListAflexScripts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aflex = undefined;
      this._aflexShared = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aflex = value.aflex;
      this._aflexShared = value.aflexShared;
    }
  }

  // aflex - computed: false, optional: true, required: false
  private _aflex?: string; 
  public get aflex() {
    return this.getStringAttribute('aflex');
  }
  public set aflex(value: string) {
    this._aflex = value;
  }
  public resetAflex() {
    this._aflex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexInput() {
    return this._aflex;
  }

  // aflex_shared - computed: false, optional: true, required: false
  private _aflexShared?: string; 
  public get aflexShared() {
    return this.getStringAttribute('aflex_shared');
  }
  public set aflexShared(value: string) {
    this._aflexShared = value;
  }
  public resetAflexShared() {
    this._aflexShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexSharedInput() {
    return this._aflexShared;
  }
}

export class SlbVirtualServerPortListAflexScriptsList extends cdktf.ComplexList {
  public internalValue? : SlbVirtualServerPortListAflexScripts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SlbVirtualServerPortListAflexScriptsOutputReference {
    return new SlbVirtualServerPortListAflexScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbVirtualServerPortListAuthCfg {
  /**
  * Specify AAA policy name to bind to the virtual port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#aaa_policy SlbVirtualServer#aaa_policy}
  */
  readonly aaaPolicy?: string;
}

export function slbVirtualServerPortListAuthCfgToTerraform(struct?: SlbVirtualServerPortListAuthCfgOutputReference | SlbVirtualServerPortListAuthCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aaa_policy: cdktf.stringToTerraform(struct!.aaaPolicy),
  }
}


export function slbVirtualServerPortListAuthCfgToHclTerraform(struct?: SlbVirtualServerPortListAuthCfgOutputReference | SlbVirtualServerPortListAuthCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aaa_policy: {
      value: cdktf.stringToHclTerraform(struct!.aaaPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortListAuthCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbVirtualServerPortListAuthCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aaaPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaPolicy = this._aaaPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortListAuthCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aaaPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aaaPolicy = value.aaaPolicy;
    }
  }

  // aaa_policy - computed: false, optional: true, required: false
  private _aaaPolicy?: string; 
  public get aaaPolicy() {
    return this.getStringAttribute('aaa_policy');
  }
  public set aaaPolicy(value: string) {
    this._aaaPolicy = value;
  }
  public resetAaaPolicy() {
    this._aaaPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaPolicyInput() {
    return this._aaaPolicy;
  }
}
export interface SlbVirtualServerPortListSamplingEnable {
  /**
  * 'all': all; 'curr_conn': Current established connections; 'total_l4_conn': Total L4 connections established; 'total_l7_conn': Total L7 connections established; 'total_tcp_conn': Total TCP connections established; 'total_conn': Total connections established; 'total_fwd_bytes': Bytes processed in forward direction; 'total_fwd_pkts': Packets processed in forward direction; 'total_rev_bytes': Bytes processed in reverse direction; 'total_rev_pkts': Packets processed in reverse direction; 'total_dns_pkts': Total DNS packets processed; 'total_mf_dns_pkts': Total MF DNS packets; 'es_total_failure_actions': Total failure actions; 'compression_bytes_before': Data into gzip compression engine; 'compression_bytes_after': Data out of gzip compression engine; 'compression_hit': Number of requests compressed; 'compression_miss': Number of requests NOT compressed; 'compression_miss_no_client': Compression miss no client; 'compression_miss_template_exclusion': Compression miss template exclusion; 'curr_req': Current requests; 'total_req': Total requests; 'total_req_succ': Total successful requests; 'peak_conn': Peak connections; 'curr_conn_rate': Current connection rate; 'last_rsp_time': Last response time; 'fastest_rsp_time': Fastest response time; 'slowest_rsp_time': Slowest response time; 'loc_permit': Geo-location Permit count; 'loc_deny': Geo-location Deny count; 'loc_conn': Geo-location Connection count; 'curr_ssl_conn': Current SSL connections; 'total_ssl_conn': Total SSL connections; 'backend-time-to-first-byte': Backend Time from Request to Response First Byte; 'backend-time-to-last-byte': Backend Time from Request to Response Last Byte; 'in-latency': Request Latency at Thunder; 'out-latency': Response Latency at Thunder; 'total_fwd_bytes_out': Bytes processed in forward direction (outbound); 'total_fwd_pkts_out': Packets processed in forward direction (outbound); 'total_rev_bytes_out': Bytes processed in reverse direction (outbound); 'total_rev_pkts_out': Packets processed in reverse direction (outbound); 'curr_req_rate': Current request rate; 'curr_resp': Current response; 'total_resp': Total response; 'total_resp_succ': Total successful responses; 'curr_resp_rate': Current response rate; 'dnsrrl_total_allowed': DNS Response-Rate-Limiting Total Responses Allowed; 'dnsrrl_total_dropped': DNS Response-Rate-Limiting Total Responses Dropped; 'dnsrrl_total_slipped': DNS Response-Rate-Limiting Total Responses Slipped; 'dnsrrl_bad_fqdn': DNS Response-Rate-Limiting Bad FQDN; 'throughput-bits-per-sec': Throughput in bits/sec; 'dynamic-memory-alloc': dynamic memory (bytes) allocated by the vport; 'dynamic-memory-free': dynamic memory (bytes) allocated by the vport; 'dynamic-memory': dynamic memory (bytes) used by the vport(alloc-free); 'ip_only_lb_fwd_bytes': IP-Only-LB Bytes processed in forward direction; 'ip_only_lb_rev_bytes': IP-Only-LB Bytes processed in reverse direction; 'ip_only_lb_fwd_pkts': IP-Only-LB Packets processed in forward direction; 'ip_only_lb_rev_pkts': IP-Only-LB Packets processed in reverse direction; 'total_dns_filter_type_drop': Total DNS Filter Type Drop; 'total_dns_filter_class_drop': Total DNS Filter Class Drop; 'dns_filter_type_a_drop': DNS Filter Type A Drop; 'dns_filter_type_aaaa_drop': DNS Filter Type AAAA Drop; 'dns_filter_type_cname_drop': DNS Filter Type CNAME Drop; 'dns_filter_type_mx_drop': DNS Filter Type MX Drop; 'dns_filter_type_ns_drop': DNS Filter Type NS Drop; 'dns_filter_type_srv_drop': DNS Filter Type SRV Drop; 'dns_filter_type_ptr_drop': DNS Filter Type PTR Drop; 'dns_filter_type_soa_drop': DNS Filter Type SOA Drop; 'dns_filter_type_txt_drop': DNS Filter Type TXT Drop; 'dns_filter_type_any_drop': DNS Filter Type Any Drop; 'dns_filter_type_others_drop': DNS Filter Type OTHERS Drop; 'dns_filter_class_internet_drop': DNS Filter Class INTERNET Drop; 'dns_filter_class_chaos_drop': DNS Filter Class CHAOS Drop; 'dns_filter_class_hesiod_drop': DNS Filter Class HESIOD Drop; 'dns_filter_class_none_drop': DNS Filter Class NONE Drop; 'dns_filter_class_any_drop': DNS Filter Class ANY Drop; 'dns_filter_class_others_drop': DNS Filter Class OTHERS Drop; 'dns_rpz_action_drop': DNS RPZ Action Drop; 'dns_rpz_action_pass_thru': DNS RPZ Action Pass Through; 'dns_rpz_action_tcp_only': DNS RPZ Action TCP Only; 'dns_rpz_action_nxdomain': DNS RPZ Action NXDOMAIN; 'dns_rpz_action_nodata': DNS RPZ Action NODATA; 'dns_rpz_action_local_data': DNS RPZ Action Local Data; 'dns_rpz_trigger_client_ip': DNS RPZ Trigger Client IP; 'dns_rpz_trigger_resp_ip': DNS RPZ Trigger Response IP; 'dns_rpz_trigger_ns_ip': DNS RPZ Trigger NS IP; 'dns_rpz_trigger_qname': DNS RPZ Trigger Qname IP; 'dns_rpz_trigger_ns_name': DNS RPZ Trigger NS Name; 'compression_bytes_before_br': Data into brotli compression engine; 'compression_bytes_after_br': Data out of brotli compression engine; 'compression_bytes_before_total': Data into compression engine; 'compression_bytes_after_total': Data out of compression engine; 'compression_hit_br': Number of requests compressed with brotli; 'compression_miss_br': Number of requests NOT compressed with brotli; 'compression_hit_total': Number of requests compressed; 'compression_miss_total': Number of requests NOT compressed; 'dnsrrl_total_tc': DNS Response-Rate-Limiting Total Responses Replied With Truncated; 'http1_client_idle_timeout': HTTP1 Client Idle Timeout; 'http2_client_idle_timeout': HTTP2 Client Idle Timeout; 'dnsrrl_nx_exceed': DNS Response-Rate-Limiting NX Responses Exceed Limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#counters1 SlbVirtualServer#counters1}
  */
  readonly counters1?: string;
}

export function slbVirtualServerPortListSamplingEnableToTerraform(struct?: SlbVirtualServerPortListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbVirtualServerPortListSamplingEnableToHclTerraform(struct?: SlbVirtualServerPortListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortListSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SlbVirtualServerPortListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbVirtualServerPortListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbVirtualServerPortListSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SlbVirtualServerPortListSamplingEnableOutputReference {
    return new SlbVirtualServerPortListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbVirtualServerPortListStruct {
  /**
  * 'enable': Enable; 'disable': Disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#action SlbVirtualServer#action}
  */
  readonly action?: string;
  /**
  * Disable aFlex entry sync for this port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#aflex_table_entry_syn_disable SlbVirtualServer#aflex_table_entry_syn_disable}
  */
  readonly aflexTableEntrySynDisable?: number;
  /**
  * Enable aFlex entry sync for this port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#aflex_table_entry_syn_enable SlbVirtualServer#aflex_table_entry_syn_enable}
  */
  readonly aflexTableEntrySynEnable?: number;
  /**
  * 'http': HTTP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#alt_protocol1 SlbVirtualServer#alt_protocol1}
  */
  readonly altProtocol1?: string;
  /**
  * 'tcp': TCP LB service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#alt_protocol2 SlbVirtualServer#alt_protocol2}
  */
  readonly altProtocol2?: string;
  /**
  * Alternate Virtual Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#alternate_port SlbVirtualServer#alternate_port}
  */
  readonly alternatePort?: number;
  /**
  * Virtual Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#alternate_port_number SlbVirtualServer#alternate_port_number}
  */
  readonly alternatePortNumber?: number;
  /**
  * Enable analytics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#attack_detection SlbVirtualServer#attack_detection}
  */
  readonly attackDetection?: number;
  /**
  * Configure auto NAT for the vport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#auto SlbVirtualServer#auto}
  */
  readonly auto?: number;
  /**
  * Prefer to use same source NAT address for a client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#clientip_sticky_nat SlbVirtualServer#clientip_sticky_nat}
  */
  readonly clientipStickyNat?: number;
  /**
  * Connection Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#conn_limit SlbVirtualServer#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * enable cpu compute on virtual port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#cpu_compute SlbVirtualServer#cpu_compute}
  */
  readonly cpuCompute?: number;
  /**
  * 'def-selection-if-pref-failed': Use default server selection method if prefer method failed; 'def-selection-if-pref-failed-disable': Stop using default server selection method if prefer method failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#def_selection_if_pref_failed SlbVirtualServer#def_selection_if_pref_failed}
  */
  readonly defSelectionIfPrefFailed?: string;
  /**
  * Enable playerid checks on UDP packets once the AX is in active mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#enable_playerid_check SlbVirtualServer#enable_playerid_check}
  */
  readonly enablePlayeridCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#enable_scaleout SlbVirtualServer#enable_scaleout}
  */
  readonly enableScaleout?: number;
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#eth_fwd SlbVirtualServer#eth_fwd}
  */
  readonly ethFwd?: number;
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#eth_rev SlbVirtualServer#eth_rev}
  */
  readonly ethRev?: number;
  /**
  * expand syn-cookie with timestamp and wscale
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#expand SlbVirtualServer#expand}
  */
  readonly expand?: number;
  /**
  * Enable extended statistics on virtual port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#extended_stats SlbVirtualServer#extended_stats}
  */
  readonly extendedStats?: number;
  /**
  * 'force-enable': Always enable; 'force-disable': Always disable; 'depends-on-config': Depends on configurations;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#fast_dns_cache SlbVirtualServer#fast_dns_cache}
  */
  readonly fastDnsCache?: string;
  /**
  * 'force': Force fast path in SLB processing; 'disable': Disable fast path in SLB processing;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#fast_path SlbVirtualServer#fast_path}
  */
  readonly fastPath?: string;
  /**
  * Force routing mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#force_routing_mode SlbVirtualServer#force_routing_mode}
  */
  readonly forceRoutingMode?: number;
  /**
  * Enable Global Server Load Balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#gslb_enable SlbVirtualServer#gslb_enable}
  */
  readonly gslbEnable?: number;
  /**
  * Enable GTP Session Load Balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#gtp_session_lb SlbVirtualServer#gtp_session_lb}
  */
  readonly gtpSessionLb?: number;
  /**
  * Enable for HA Conn sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#ha_conn_mirror SlbVirtualServer#ha_conn_mirror}
  */
  readonly haConnMirror?: number;
  /**
  * Ignore global substitute-source-mac
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#ignore_global SlbVirtualServer#ignore_global}
  */
  readonly ignoreGlobal?: number;
  /**
  * Enter name of IP Map List to be bound (IP Map List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#ip_map_list SlbVirtualServer#ip_map_list}
  */
  readonly ipMapList?: string;
  /**
  * Enable IP-Only LB mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#ip_only_lb SlbVirtualServer#ip_only_lb}
  */
  readonly ipOnlyLb?: number;
  /**
  * Use IP address round-robin behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#ip_smart_rr SlbVirtualServer#ip_smart_rr}
  */
  readonly ipSmartRr?: number;
  /**
  * Enable IP in IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#ipinip SlbVirtualServer#ipinip}
  */
  readonly ipinip?: number;
  /**
  * FPGA assist L7 packet parsing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#l7_hardware_assist SlbVirtualServer#l7_hardware_assist}
  */
  readonly l7HardwareAssist?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#l7_service_chain SlbVirtualServer#l7_service_chain}
  */
  readonly l7ServiceChain?: number;
  /**
  * enable dynamic memory compute on virtual port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#memory_compute SlbVirtualServer#memory_compute}
  */
  readonly memoryCompute?: number;
  /**
  * Message switching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#message_switching SlbVirtualServer#message_switching}
  */
  readonly messageSwitching?: number;
  /**
  * SLB Virtual Service Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#name SlbVirtualServer#name}
  */
  readonly name?: string;
  /**
  * Next-gen WAF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#ng_waf SlbVirtualServer#ng_waf}
  */
  readonly ngWaf?: number;
  /**
  * Don't automatically mark vport up when aFleX is bound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#no_auto_up_on_aflex SlbVirtualServer#no_auto_up_on_aflex}
  */
  readonly noAutoUpOnAflex?: number;
  /**
  * Disable destination NAT, this option only supports in wildcard VIP or when a connection is operated in SSLi + EP mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#no_dest_nat SlbVirtualServer#no_dest_nat}
  */
  readonly noDestNat?: number;
  /**
  * Do not log connection over limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#no_logging SlbVirtualServer#no_logging}
  */
  readonly noLogging?: number;
  /**
  * Enable for HA Conn sync for l4 tcp sessions on SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#on_syn SlbVirtualServer#on_syn}
  */
  readonly onSyn?: number;
  /**
  * Support server that allow only one connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#one_server_conn SlbVirtualServer#one_server_conn}
  */
  readonly oneServerConn?: number;
  /**
  * '0': No optimization; '1': Optimization level 1 (Experimental);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#optimization_level SlbVirtualServer#optimization_level}
  */
  readonly optimizationLevel?: string;
  /**
  * SIP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#p_template_sip_shared SlbVirtualServer#p_template_sip_shared}
  */
  readonly pTemplateSipShared?: number;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#packet_capture_template SlbVirtualServer#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * 'src-dst-ip-swap-persist': Create persist session after source IP and destination IP swap; 'use-src-ip-for-dst-persist': Use the source IP to create a destination persist session; 'use-dst-ip-for-src-persist': Use the destination IP to create source IP persist session;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#persist_type SlbVirtualServer#persist_type}
  */
  readonly persistType?: string;
  /**
  * Specify NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#pool SlbVirtualServer#pool}
  */
  readonly pool?: string;
  /**
  * Specify NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#pool_shared SlbVirtualServer#pool_shared}
  */
  readonly poolShared?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#port_number SlbVirtualServer#port_number}
  */
  readonly portNumber: number;
  /**
  * Enable port translation under no-dest-nat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#port_translation SlbVirtualServer#port_translation}
  */
  readonly portTranslation?: number;
  /**
  * Set auto NAT pool as higher precedence for source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#precedence SlbVirtualServer#precedence}
  */
  readonly precedence?: number;
  /**
  * 'tcp': TCP LB service; 'udp': UDP Port; 'others': for no tcp/udp protocol, do IP load balancing; 'diameter': diameter port; 'dns-tcp': DNS service over TCP; 'dns-udp': DNS service over UDP; 'fast-http': Fast HTTP Port; 'fix': FIX Port; 'ftp': File Transfer Protocol Port; 'ftp-proxy': ftp proxy port; 'http': HTTP Port; 'https': HTTPS port; 'imap': imap proxy port; 'mlb': Message based load balancing; 'mms': Microsoft Multimedia Service Port; 'mysql': mssql port; 'mssql': mssql; 'pop3': pop3 proxy port; 'radius': RADIUS Port; 'rtsp': Real Time Streaming Protocol Port; 'sip': Session initiation protocol over UDP; 'sip-tcp': Session initiation protocol over TCP; 'sips': Session initiation protocol over TLS; 'smpp-tcp': SMPP service over TCP; 'spdy': spdy port; 'spdys': spdys port; 'smtp': SMTP Port; 'mqtt': MQTT Port; 'mqtts': MQTTS Port; 'ssl-proxy': Generic SSL proxy; 'ssli': SSL insight; 'ssh': SSH Port; 'tcp-proxy': Generic TCP proxy; 'tftp': TFTP Port; 'fast-fix': Fast FIX port; 'http-over-quic': HTTP3-over-quic port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#protocol SlbVirtualServer#protocol}
  */
  readonly protocol: string;
  /**
  * 'v1': Force using old proxy; 'v2': Force using new proxy;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#proxy_layer SlbVirtualServer#proxy_layer}
  */
  readonly proxyLayer?: string;
  /**
  * Virtual Port range (Virtual Port range value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#range SlbVirtualServer#range}
  */
  readonly range?: number;
  /**
  * Specify the log message rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#rate SlbVirtualServer#rate}
  */
  readonly rate?: number;
  /**
  * Redirect HTTP to HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#redirect_to_https SlbVirtualServer#redirect_to_https}
  */
  readonly redirectToHttps?: number;
  /**
  * Reply ACME http-01 challenge. This option only takes effect in HTTP port 80
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#reply_acme_challenge SlbVirtualServer#reply_acme_challenge}
  */
  readonly replyAcmeChallenge?: number;
  /**
  * Use alternate virtual port when L7 request fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#req_fail SlbVirtualServer#req_fail}
  */
  readonly reqFail?: number;
  /**
  * 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#reselection SlbVirtualServer#reselection}
  */
  readonly reselection?: string;
  /**
  * Send client reset when connection number over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#reset SlbVirtualServer#reset}
  */
  readonly reset?: number;
  /**
  * Send client reset when server selection fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#reset_on_server_selection_fail SlbVirtualServer#reset_on_server_selection_fail}
  */
  readonly resetOnServerSelectionFail?: number;
  /**
  * Web Category List name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#resolve_web_cat_list SlbVirtualServer#resolve_web_cat_list}
  */
  readonly resolveWebCatList?: string;
  /**
  * rtp traffic try to match the real server of sip smp call-id session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#rtp_sip_call_id_match SlbVirtualServer#rtp_sip_call_id_match}
  */
  readonly rtpSipCallIdMatch?: number;
  /**
  * Specify the interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#secs SlbVirtualServer#secs}
  */
  readonly secs?: number;
  /**
  * Use alternate virtual port when server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#serv_sel_fail SlbVirtualServer#serv_sel_fail}
  */
  readonly servSelFail?: number;
  /**
  * Bind a use-rcv-hop-for-resp Server Group to this Virtual Server (Server Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#server_group SlbVirtualServer#server_group}
  */
  readonly serverGroup?: string;
  /**
  * Bind a Service Group to this Virtual Server (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#service_group SlbVirtualServer#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * Reference a Cache template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_cache_template SlbVirtualServer#shared_partition_cache_template}
  */
  readonly sharedPartitionCacheTemplate?: number;
  /**
  * Reference a Client SSL template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_client_ssl_template SlbVirtualServer#shared_partition_client_ssl_template}
  */
  readonly sharedPartitionClientSslTemplate?: number;
  /**
  * Reference a connection reuse template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_connection_reuse_template SlbVirtualServer#shared_partition_connection_reuse_template}
  */
  readonly sharedPartitionConnectionReuseTemplate?: number;
  /**
  * Reference a dblb template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_dblb_template SlbVirtualServer#shared_partition_dblb_template}
  */
  readonly sharedPartitionDblbTemplate?: number;
  /**
  * Reference a Diameter template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_diameter_template SlbVirtualServer#shared_partition_diameter_template}
  */
  readonly sharedPartitionDiameterTemplate?: number;
  /**
  * Reference a dns template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_dns_template SlbVirtualServer#shared_partition_dns_template}
  */
  readonly sharedPartitionDnsTemplate?: number;
  /**
  * Reference a DNS over HTTP(s) template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_doh_template SlbVirtualServer#shared_partition_doh_template}
  */
  readonly sharedPartitionDohTemplate?: number;
  /**
  * Reference a dynamic service template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_dynamic_service_template SlbVirtualServer#shared_partition_dynamic_service_template}
  */
  readonly sharedPartitionDynamicServiceTemplate?: number;
  /**
  * Reference a external service template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_external_service_template SlbVirtualServer#shared_partition_external_service_template}
  */
  readonly sharedPartitionExternalServiceTemplate?: number;
  /**
  * Reference a FIX template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_fix_template SlbVirtualServer#shared_partition_fix_template}
  */
  readonly sharedPartitionFixTemplate?: number;
  /**
  * Reference a http policy template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_http_policy_template SlbVirtualServer#shared_partition_http_policy_template}
  */
  readonly sharedPartitionHttpPolicyTemplate?: number;
  /**
  * Reference a HTTP template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_http_template SlbVirtualServer#shared_partition_http_template}
  */
  readonly sharedPartitionHttpTemplate?: number;
  /**
  * Reference a IMAP/POP3 template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_imap_pop3_template SlbVirtualServer#shared_partition_imap_pop3_template}
  */
  readonly sharedPartitionImapPop3Template?: number;
  /**
  * Reference a persist cookie template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_persist_cookie_template SlbVirtualServer#shared_partition_persist_cookie_template}
  */
  readonly sharedPartitionPersistCookieTemplate?: number;
  /**
  * Reference a persist destination ip template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_persist_destination_ip_template SlbVirtualServer#shared_partition_persist_destination_ip_template}
  */
  readonly sharedPartitionPersistDestinationIpTemplate?: number;
  /**
  * Reference a persist source ip template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_persist_source_ip_template SlbVirtualServer#shared_partition_persist_source_ip_template}
  */
  readonly sharedPartitionPersistSourceIpTemplate?: number;
  /**
  * Reference a persist SSL SID template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_persist_ssl_sid_template SlbVirtualServer#shared_partition_persist_ssl_sid_template}
  */
  readonly sharedPartitionPersistSslSidTemplate?: number;
  /**
  * Reference a policy template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_policy_template SlbVirtualServer#shared_partition_policy_template}
  */
  readonly sharedPartitionPolicyTemplate?: number;
  /**
  * Specify NAT pool or pool group from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_pool SlbVirtualServer#shared_partition_pool}
  */
  readonly sharedPartitionPool?: number;
  /**
  * Reference a QUIC template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_quic_template SlbVirtualServer#shared_partition_quic_template}
  */
  readonly sharedPartitionQuicTemplate?: number;
  /**
  * Reference a SSL Server template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_server_ssl_template SlbVirtualServer#shared_partition_server_ssl_template}
  */
  readonly sharedPartitionServerSslTemplate?: number;
  /**
  * Reference a smpp template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_smpp_template SlbVirtualServer#shared_partition_smpp_template}
  */
  readonly sharedPartitionSmppTemplate?: number;
  /**
  * Reference a SMTP template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_smtp_template SlbVirtualServer#shared_partition_smtp_template}
  */
  readonly sharedPartitionSmtpTemplate?: number;
  /**
  * Reference a tcp template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_tcp SlbVirtualServer#shared_partition_tcp}
  */
  readonly sharedPartitionTcp?: number;
  /**
  * Reference a TCP Proxy template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_tcp_proxy_template SlbVirtualServer#shared_partition_tcp_proxy_template}
  */
  readonly sharedPartitionTcpProxyTemplate?: number;
  /**
  * Reference a UDP template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_udp SlbVirtualServer#shared_partition_udp}
  */
  readonly sharedPartitionUdp?: number;
  /**
  * Reference a Virtual Port template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#shared_partition_virtual_port_template SlbVirtualServer#shared_partition_virtual_port_template}
  */
  readonly sharedPartitionVirtualPortTemplate?: number;
  /**
  * Enable print extended stats in showtech
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#showtech_print_extended_stats SlbVirtualServer#showtech_print_extended_stats}
  */
  readonly showtechPrintExtendedStats?: number;
  /**
  * Skip rev tuple hash insertion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#skip_rev_hash SlbVirtualServer#skip_rev_hash}
  */
  readonly skipRevHash?: number;
  /**
  * Enable source NAT traffic against VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#snat_on_vip SlbVirtualServer#snat_on_vip}
  */
  readonly snatOnVip?: number;
  /**
  * 'stats-data-enable': Enable statistical data collection for virtual port; 'stats-data-disable': Disable statistical data collection for virtual port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#stats_data_action SlbVirtualServer#stats_data_action}
  */
  readonly statsDataAction?: string;
  /**
  * Substitute Source MAC Address to that of the outgoing interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#substitute_source_mac SlbVirtualServer#substitute_source_mac}
  */
  readonly substituteSourceMac?: number;
  /**
  * Support HTTP2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#support_http2 SlbVirtualServer#support_http2}
  */
  readonly supportHttp2?: number;
  /**
  * Enable syn-cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#syn_cookie SlbVirtualServer#syn_cookie}
  */
  readonly synCookie?: number;
  /**
  * RAM caching template (Cache Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_cache SlbVirtualServer#template_cache}
  */
  readonly templateCache?: string;
  /**
  * Cache Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_cache_shared SlbVirtualServer#template_cache_shared}
  */
  readonly templateCacheShared?: string;
  /**
  * Client SSH Template (Client SSH Config Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_client_ssh SlbVirtualServer#template_client_ssh}
  */
  readonly templateClientSsh?: string;
  /**
  * Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_client_ssl SlbVirtualServer#template_client_ssl}
  */
  readonly templateClientSsl?: string;
  /**
  * Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_client_ssl_shared SlbVirtualServer#template_client_ssl_shared}
  */
  readonly templateClientSslShared?: string;
  /**
  * Connection Reuse Template (Connection Reuse Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_connection_reuse SlbVirtualServer#template_connection_reuse}
  */
  readonly templateConnectionReuse?: string;
  /**
  * Connection Reuse Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_connection_reuse_shared SlbVirtualServer#template_connection_reuse_shared}
  */
  readonly templateConnectionReuseShared?: string;
  /**
  * DBLB Template (DBLB template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_dblb SlbVirtualServer#template_dblb}
  */
  readonly templateDblb?: string;
  /**
  * DBLB Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_dblb_shared SlbVirtualServer#template_dblb_shared}
  */
  readonly templateDblbShared?: string;
  /**
  * Diameter Template (diameter template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_diameter SlbVirtualServer#template_diameter}
  */
  readonly templateDiameter?: string;
  /**
  * Diameter Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_diameter_shared SlbVirtualServer#template_diameter_shared}
  */
  readonly templateDiameterShared?: string;
  /**
  * DNS template (DNS template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_dns SlbVirtualServer#template_dns}
  */
  readonly templateDns?: string;
  /**
  * DNS Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_dns_shared SlbVirtualServer#template_dns_shared}
  */
  readonly templateDnsShared?: string;
  /**
  * DNS over HTTP(s) Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_doh SlbVirtualServer#template_doh}
  */
  readonly templateDoh?: string;
  /**
  * DNS over HTTP(s) Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_doh_shared SlbVirtualServer#template_doh_shared}
  */
  readonly templateDohShared?: string;
  /**
  * Dynamic Service Template (dynamic-service template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_dynamic_service SlbVirtualServer#template_dynamic_service}
  */
  readonly templateDynamicService?: string;
  /**
  * Dynamic Service Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_dynamic_service_shared SlbVirtualServer#template_dynamic_service_shared}
  */
  readonly templateDynamicServiceShared?: string;
  /**
  * External service template (external-service template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_external_service SlbVirtualServer#template_external_service}
  */
  readonly templateExternalService?: string;
  /**
  * External Service Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_external_service_shared SlbVirtualServer#template_external_service_shared}
  */
  readonly templateExternalServiceShared?: string;
  /**
  * FIX template (FIX Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_fix SlbVirtualServer#template_fix}
  */
  readonly templateFix?: string;
  /**
  * FIX Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_fix_shared SlbVirtualServer#template_fix_shared}
  */
  readonly templateFixShared?: string;
  /**
  * FTP port template (Ftp template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_ftp SlbVirtualServer#template_ftp}
  */
  readonly templateFtp?: string;
  /**
  * HTTP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_http SlbVirtualServer#template_http}
  */
  readonly templateHttp?: string;
  /**
  * http-policy template (http-policy template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_http_policy SlbVirtualServer#template_http_policy}
  */
  readonly templateHttpPolicy?: string;
  /**
  * Http Policy Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_http_policy_shared SlbVirtualServer#template_http_policy_shared}
  */
  readonly templateHttpPolicyShared?: string;
  /**
  * HTTP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_http_shared SlbVirtualServer#template_http_shared}
  */
  readonly templateHttpShared?: string;
  /**
  * IMAP/POP3 Template (IMAP/POP3 Config Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_imap_pop3 SlbVirtualServer#template_imap_pop3}
  */
  readonly templateImapPop3?: string;
  /**
  * IMAP/POP3 Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_imap_pop3_shared SlbVirtualServer#template_imap_pop3_shared}
  */
  readonly templateImapPop3Shared?: string;
  /**
  * MQTT Template (MQTT Config Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_mqtt SlbVirtualServer#template_mqtt}
  */
  readonly templateMqtt?: string;
  /**
  * Cookie persistence (Cookie persistence template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_persist_cookie SlbVirtualServer#template_persist_cookie}
  */
  readonly templatePersistCookie?: string;
  /**
  * Cookie Persistence Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_persist_cookie_shared SlbVirtualServer#template_persist_cookie_shared}
  */
  readonly templatePersistCookieShared?: string;
  /**
  * Destination IP persistence (Destination IP persistence template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_persist_destination_ip SlbVirtualServer#template_persist_destination_ip}
  */
  readonly templatePersistDestinationIp?: string;
  /**
  * Destination IP Persistence Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_persist_destination_ip_shared SlbVirtualServer#template_persist_destination_ip_shared}
  */
  readonly templatePersistDestinationIpShared?: string;
  /**
  * Source IP persistence (Source IP persistence template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_persist_source_ip SlbVirtualServer#template_persist_source_ip}
  */
  readonly templatePersistSourceIp?: string;
  /**
  * Source IP Persistence Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_persist_source_ip_shared SlbVirtualServer#template_persist_source_ip_shared}
  */
  readonly templatePersistSourceIpShared?: string;
  /**
  * SSL SID persistence (SSL SID persistence template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_persist_ssl_sid SlbVirtualServer#template_persist_ssl_sid}
  */
  readonly templatePersistSslSid?: string;
  /**
  * SSL SID Persistence Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_persist_ssl_sid_shared SlbVirtualServer#template_persist_ssl_sid_shared}
  */
  readonly templatePersistSslSidShared?: string;
  /**
  * Policy Template (Policy template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_policy SlbVirtualServer#template_policy}
  */
  readonly templatePolicy?: string;
  /**
  * Policy Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_policy_shared SlbVirtualServer#template_policy_shared}
  */
  readonly templatePolicyShared?: string;
  /**
  * QUIC Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_quic SlbVirtualServer#template_quic}
  */
  readonly templateQuic?: string;
  /**
  * QUIC Config Client (QUIC Config name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_quic_client SlbVirtualServer#template_quic_client}
  */
  readonly templateQuicClient?: string;
  /**
  * QUIC Config Server (QUIC Config name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_quic_server SlbVirtualServer#template_quic_server}
  */
  readonly templateQuicServer?: string;
  /**
  * QUIC Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_quic_shared SlbVirtualServer#template_quic_shared}
  */
  readonly templateQuicShared?: string;
  /**
  * RAM caching template (Cache Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_ram_cache SlbVirtualServer#template_ram_cache}
  */
  readonly templateRamCache?: string;
  /**
  * ICAP reqmod template (reqmod-icap template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_reqmod_icap SlbVirtualServer#template_reqmod_icap}
  */
  readonly templateReqmodIcap?: string;
  /**
  * ICAP respmod service template (respmod-icap template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_respmod_icap SlbVirtualServer#template_respmod_icap}
  */
  readonly templateRespmodIcap?: string;
  /**
  * Scaleout template (Scaleout template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_scaleout SlbVirtualServer#template_scaleout}
  */
  readonly templateScaleout?: string;
  /**
  * Server SSH Template (Server SSH Config Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_server_ssh SlbVirtualServer#template_server_ssh}
  */
  readonly templateServerSsh?: string;
  /**
  * Server Side SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_server_ssl SlbVirtualServer#template_server_ssl}
  */
  readonly templateServerSsl?: string;
  /**
  * Server SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_server_ssl_shared SlbVirtualServer#template_server_ssl_shared}
  */
  readonly templateServerSslShared?: string;
  /**
  * SIP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_sip SlbVirtualServer#template_sip}
  */
  readonly templateSip?: string;
  /**
  * SIP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_sip_shared SlbVirtualServer#template_sip_shared}
  */
  readonly templateSipShared?: string;
  /**
  * SMPP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_smpp SlbVirtualServer#template_smpp}
  */
  readonly templateSmpp?: string;
  /**
  * SMPP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_smpp_shared SlbVirtualServer#template_smpp_shared}
  */
  readonly templateSmppShared?: string;
  /**
  * SMTP Template (SMTP Config Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_smtp SlbVirtualServer#template_smtp}
  */
  readonly templateSmtp?: string;
  /**
  * SMTP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_smtp_shared SlbVirtualServer#template_smtp_shared}
  */
  readonly templateSmtpShared?: string;
  /**
  * SSLi template (SSLi Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_ssli SlbVirtualServer#template_ssli}
  */
  readonly templateSsli?: string;
  /**
  * TCP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_tcp SlbVirtualServer#template_tcp}
  */
  readonly templateTcp?: string;
  /**
  * TCP Proxy Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_tcp_proxy SlbVirtualServer#template_tcp_proxy}
  */
  readonly templateTcpProxy?: string;
  /**
  * TCP Proxy Config Client (TCP Proxy Config name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_tcp_proxy_client SlbVirtualServer#template_tcp_proxy_client}
  */
  readonly templateTcpProxyClient?: string;
  /**
  * TCP Proxy Config Server (TCP Proxy Config name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_tcp_proxy_server SlbVirtualServer#template_tcp_proxy_server}
  */
  readonly templateTcpProxyServer?: string;
  /**
  * TCP Proxy Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_tcp_proxy_shared SlbVirtualServer#template_tcp_proxy_shared}
  */
  readonly templateTcpProxyShared?: string;
  /**
  * TCP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_tcp_shared SlbVirtualServer#template_tcp_shared}
  */
  readonly templateTcpShared?: string;
  /**
  * L4 UDP Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_udp SlbVirtualServer#template_udp}
  */
  readonly templateUdp?: string;
  /**
  * UDP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_udp_shared SlbVirtualServer#template_udp_shared}
  */
  readonly templateUdpShared?: string;
  /**
  * Virtual port template (Virtual port template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_virtual_port SlbVirtualServer#template_virtual_port}
  */
  readonly templateVirtualPort?: string;
  /**
  * Virtual Port Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#template_virtual_port_shared SlbVirtualServer#template_virtual_port_shared}
  */
  readonly templateVirtualPortShared?: string;
  /**
  * Trunk interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#trunk_fwd SlbVirtualServer#trunk_fwd}
  */
  readonly trunkFwd?: number;
  /**
  * Trunk interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#trunk_rev SlbVirtualServer#trunk_rev}
  */
  readonly trunkRev?: number;
  /**
  * Use alternate virtual port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#use_alternate_port SlbVirtualServer#use_alternate_port}
  */
  readonly useAlternatePort?: number;
  /**
  * Follow CGNv6 source NAT configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#use_cgnv6 SlbVirtualServer#use_cgnv6}
  */
  readonly useCgnv6?: number;
  /**
  * Use default forwarding if server selection failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#use_default_if_no_server SlbVirtualServer#use_default_if_no_server}
  */
  readonly useDefaultIfNoServer?: number;
  /**
  * Use receive hop for response to client(For packets on default-vlan, also config "vlan-global enable-def-vlan-l2-forwarding".)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#use_rcv_hop_for_resp SlbVirtualServer#use_rcv_hop_for_resp}
  */
  readonly useRcvHopForResp?: number;
  /**
  * Set use-rcv-hop group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#use_rcv_hop_group SlbVirtualServer#use_rcv_hop_group}
  */
  readonly useRcvHopGroup?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#user_tag SlbVirtualServer#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#uuid SlbVirtualServer#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify a GSLB View (ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#view SlbVirtualServer#view}
  */
  readonly view?: number;
  /**
  * Use alternate virtual port when down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#when_down SlbVirtualServer#when_down}
  */
  readonly whenDown?: number;
  /**
  * Use alternate virtual port when down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#when_down_protocol2 SlbVirtualServer#when_down_protocol2}
  */
  readonly whenDownProtocol2?: number;
  /**
  * 'send-504': Stay functional up and response with HTTP 504;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#when_server_selection_failed SlbVirtualServer#when_server_selection_failed}
  */
  readonly whenServerSelectionFailed?: string;
  /**
  * acl_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#acl_list SlbVirtualServer#acl_list}
  */
  readonly aclList?: SlbVirtualServerPortListAclListStruct[] | cdktf.IResolvable;
  /**
  * aflex_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#aflex_scripts SlbVirtualServer#aflex_scripts}
  */
  readonly aflexScripts?: SlbVirtualServerPortListAflexScripts[] | cdktf.IResolvable;
  /**
  * auth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#auth_cfg SlbVirtualServer#auth_cfg}
  */
  readonly authCfg?: SlbVirtualServerPortListAuthCfg;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#sampling_enable SlbVirtualServer#sampling_enable}
  */
  readonly samplingEnable?: SlbVirtualServerPortListSamplingEnable[] | cdktf.IResolvable;
}

export function slbVirtualServerPortListStructToTerraform(struct?: SlbVirtualServerPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    aflex_table_entry_syn_disable: cdktf.numberToTerraform(struct!.aflexTableEntrySynDisable),
    aflex_table_entry_syn_enable: cdktf.numberToTerraform(struct!.aflexTableEntrySynEnable),
    alt_protocol1: cdktf.stringToTerraform(struct!.altProtocol1),
    alt_protocol2: cdktf.stringToTerraform(struct!.altProtocol2),
    alternate_port: cdktf.numberToTerraform(struct!.alternatePort),
    alternate_port_number: cdktf.numberToTerraform(struct!.alternatePortNumber),
    attack_detection: cdktf.numberToTerraform(struct!.attackDetection),
    auto: cdktf.numberToTerraform(struct!.auto),
    clientip_sticky_nat: cdktf.numberToTerraform(struct!.clientipStickyNat),
    conn_limit: cdktf.numberToTerraform(struct!.connLimit),
    cpu_compute: cdktf.numberToTerraform(struct!.cpuCompute),
    def_selection_if_pref_failed: cdktf.stringToTerraform(struct!.defSelectionIfPrefFailed),
    enable_playerid_check: cdktf.numberToTerraform(struct!.enablePlayeridCheck),
    enable_scaleout: cdktf.numberToTerraform(struct!.enableScaleout),
    eth_fwd: cdktf.numberToTerraform(struct!.ethFwd),
    eth_rev: cdktf.numberToTerraform(struct!.ethRev),
    expand: cdktf.numberToTerraform(struct!.expand),
    extended_stats: cdktf.numberToTerraform(struct!.extendedStats),
    fast_dns_cache: cdktf.stringToTerraform(struct!.fastDnsCache),
    fast_path: cdktf.stringToTerraform(struct!.fastPath),
    force_routing_mode: cdktf.numberToTerraform(struct!.forceRoutingMode),
    gslb_enable: cdktf.numberToTerraform(struct!.gslbEnable),
    gtp_session_lb: cdktf.numberToTerraform(struct!.gtpSessionLb),
    ha_conn_mirror: cdktf.numberToTerraform(struct!.haConnMirror),
    ignore_global: cdktf.numberToTerraform(struct!.ignoreGlobal),
    ip_map_list: cdktf.stringToTerraform(struct!.ipMapList),
    ip_only_lb: cdktf.numberToTerraform(struct!.ipOnlyLb),
    ip_smart_rr: cdktf.numberToTerraform(struct!.ipSmartRr),
    ipinip: cdktf.numberToTerraform(struct!.ipinip),
    l7_hardware_assist: cdktf.numberToTerraform(struct!.l7HardwareAssist),
    l7_service_chain: cdktf.numberToTerraform(struct!.l7ServiceChain),
    memory_compute: cdktf.numberToTerraform(struct!.memoryCompute),
    message_switching: cdktf.numberToTerraform(struct!.messageSwitching),
    name: cdktf.stringToTerraform(struct!.name),
    ng_waf: cdktf.numberToTerraform(struct!.ngWaf),
    no_auto_up_on_aflex: cdktf.numberToTerraform(struct!.noAutoUpOnAflex),
    no_dest_nat: cdktf.numberToTerraform(struct!.noDestNat),
    no_logging: cdktf.numberToTerraform(struct!.noLogging),
    on_syn: cdktf.numberToTerraform(struct!.onSyn),
    one_server_conn: cdktf.numberToTerraform(struct!.oneServerConn),
    optimization_level: cdktf.stringToTerraform(struct!.optimizationLevel),
    p_template_sip_shared: cdktf.numberToTerraform(struct!.pTemplateSipShared),
    packet_capture_template: cdktf.stringToTerraform(struct!.packetCaptureTemplate),
    persist_type: cdktf.stringToTerraform(struct!.persistType),
    pool: cdktf.stringToTerraform(struct!.pool),
    pool_shared: cdktf.stringToTerraform(struct!.poolShared),
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    port_translation: cdktf.numberToTerraform(struct!.portTranslation),
    precedence: cdktf.numberToTerraform(struct!.precedence),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    proxy_layer: cdktf.stringToTerraform(struct!.proxyLayer),
    range: cdktf.numberToTerraform(struct!.range),
    rate: cdktf.numberToTerraform(struct!.rate),
    redirect_to_https: cdktf.numberToTerraform(struct!.redirectToHttps),
    reply_acme_challenge: cdktf.numberToTerraform(struct!.replyAcmeChallenge),
    req_fail: cdktf.numberToTerraform(struct!.reqFail),
    reselection: cdktf.stringToTerraform(struct!.reselection),
    reset: cdktf.numberToTerraform(struct!.reset),
    reset_on_server_selection_fail: cdktf.numberToTerraform(struct!.resetOnServerSelectionFail),
    resolve_web_cat_list: cdktf.stringToTerraform(struct!.resolveWebCatList),
    rtp_sip_call_id_match: cdktf.numberToTerraform(struct!.rtpSipCallIdMatch),
    secs: cdktf.numberToTerraform(struct!.secs),
    serv_sel_fail: cdktf.numberToTerraform(struct!.servSelFail),
    server_group: cdktf.stringToTerraform(struct!.serverGroup),
    service_group: cdktf.stringToTerraform(struct!.serviceGroup),
    shared_partition_cache_template: cdktf.numberToTerraform(struct!.sharedPartitionCacheTemplate),
    shared_partition_client_ssl_template: cdktf.numberToTerraform(struct!.sharedPartitionClientSslTemplate),
    shared_partition_connection_reuse_template: cdktf.numberToTerraform(struct!.sharedPartitionConnectionReuseTemplate),
    shared_partition_dblb_template: cdktf.numberToTerraform(struct!.sharedPartitionDblbTemplate),
    shared_partition_diameter_template: cdktf.numberToTerraform(struct!.sharedPartitionDiameterTemplate),
    shared_partition_dns_template: cdktf.numberToTerraform(struct!.sharedPartitionDnsTemplate),
    shared_partition_doh_template: cdktf.numberToTerraform(struct!.sharedPartitionDohTemplate),
    shared_partition_dynamic_service_template: cdktf.numberToTerraform(struct!.sharedPartitionDynamicServiceTemplate),
    shared_partition_external_service_template: cdktf.numberToTerraform(struct!.sharedPartitionExternalServiceTemplate),
    shared_partition_fix_template: cdktf.numberToTerraform(struct!.sharedPartitionFixTemplate),
    shared_partition_http_policy_template: cdktf.numberToTerraform(struct!.sharedPartitionHttpPolicyTemplate),
    shared_partition_http_template: cdktf.numberToTerraform(struct!.sharedPartitionHttpTemplate),
    shared_partition_imap_pop3_template: cdktf.numberToTerraform(struct!.sharedPartitionImapPop3Template),
    shared_partition_persist_cookie_template: cdktf.numberToTerraform(struct!.sharedPartitionPersistCookieTemplate),
    shared_partition_persist_destination_ip_template: cdktf.numberToTerraform(struct!.sharedPartitionPersistDestinationIpTemplate),
    shared_partition_persist_source_ip_template: cdktf.numberToTerraform(struct!.sharedPartitionPersistSourceIpTemplate),
    shared_partition_persist_ssl_sid_template: cdktf.numberToTerraform(struct!.sharedPartitionPersistSslSidTemplate),
    shared_partition_policy_template: cdktf.numberToTerraform(struct!.sharedPartitionPolicyTemplate),
    shared_partition_pool: cdktf.numberToTerraform(struct!.sharedPartitionPool),
    shared_partition_quic_template: cdktf.numberToTerraform(struct!.sharedPartitionQuicTemplate),
    shared_partition_server_ssl_template: cdktf.numberToTerraform(struct!.sharedPartitionServerSslTemplate),
    shared_partition_smpp_template: cdktf.numberToTerraform(struct!.sharedPartitionSmppTemplate),
    shared_partition_smtp_template: cdktf.numberToTerraform(struct!.sharedPartitionSmtpTemplate),
    shared_partition_tcp: cdktf.numberToTerraform(struct!.sharedPartitionTcp),
    shared_partition_tcp_proxy_template: cdktf.numberToTerraform(struct!.sharedPartitionTcpProxyTemplate),
    shared_partition_udp: cdktf.numberToTerraform(struct!.sharedPartitionUdp),
    shared_partition_virtual_port_template: cdktf.numberToTerraform(struct!.sharedPartitionVirtualPortTemplate),
    showtech_print_extended_stats: cdktf.numberToTerraform(struct!.showtechPrintExtendedStats),
    skip_rev_hash: cdktf.numberToTerraform(struct!.skipRevHash),
    snat_on_vip: cdktf.numberToTerraform(struct!.snatOnVip),
    stats_data_action: cdktf.stringToTerraform(struct!.statsDataAction),
    substitute_source_mac: cdktf.numberToTerraform(struct!.substituteSourceMac),
    support_http2: cdktf.numberToTerraform(struct!.supportHttp2),
    syn_cookie: cdktf.numberToTerraform(struct!.synCookie),
    template_cache: cdktf.stringToTerraform(struct!.templateCache),
    template_cache_shared: cdktf.stringToTerraform(struct!.templateCacheShared),
    template_client_ssh: cdktf.stringToTerraform(struct!.templateClientSsh),
    template_client_ssl: cdktf.stringToTerraform(struct!.templateClientSsl),
    template_client_ssl_shared: cdktf.stringToTerraform(struct!.templateClientSslShared),
    template_connection_reuse: cdktf.stringToTerraform(struct!.templateConnectionReuse),
    template_connection_reuse_shared: cdktf.stringToTerraform(struct!.templateConnectionReuseShared),
    template_dblb: cdktf.stringToTerraform(struct!.templateDblb),
    template_dblb_shared: cdktf.stringToTerraform(struct!.templateDblbShared),
    template_diameter: cdktf.stringToTerraform(struct!.templateDiameter),
    template_diameter_shared: cdktf.stringToTerraform(struct!.templateDiameterShared),
    template_dns: cdktf.stringToTerraform(struct!.templateDns),
    template_dns_shared: cdktf.stringToTerraform(struct!.templateDnsShared),
    template_doh: cdktf.stringToTerraform(struct!.templateDoh),
    template_doh_shared: cdktf.stringToTerraform(struct!.templateDohShared),
    template_dynamic_service: cdktf.stringToTerraform(struct!.templateDynamicService),
    template_dynamic_service_shared: cdktf.stringToTerraform(struct!.templateDynamicServiceShared),
    template_external_service: cdktf.stringToTerraform(struct!.templateExternalService),
    template_external_service_shared: cdktf.stringToTerraform(struct!.templateExternalServiceShared),
    template_fix: cdktf.stringToTerraform(struct!.templateFix),
    template_fix_shared: cdktf.stringToTerraform(struct!.templateFixShared),
    template_ftp: cdktf.stringToTerraform(struct!.templateFtp),
    template_http: cdktf.stringToTerraform(struct!.templateHttp),
    template_http_policy: cdktf.stringToTerraform(struct!.templateHttpPolicy),
    template_http_policy_shared: cdktf.stringToTerraform(struct!.templateHttpPolicyShared),
    template_http_shared: cdktf.stringToTerraform(struct!.templateHttpShared),
    template_imap_pop3: cdktf.stringToTerraform(struct!.templateImapPop3),
    template_imap_pop3_shared: cdktf.stringToTerraform(struct!.templateImapPop3Shared),
    template_mqtt: cdktf.stringToTerraform(struct!.templateMqtt),
    template_persist_cookie: cdktf.stringToTerraform(struct!.templatePersistCookie),
    template_persist_cookie_shared: cdktf.stringToTerraform(struct!.templatePersistCookieShared),
    template_persist_destination_ip: cdktf.stringToTerraform(struct!.templatePersistDestinationIp),
    template_persist_destination_ip_shared: cdktf.stringToTerraform(struct!.templatePersistDestinationIpShared),
    template_persist_source_ip: cdktf.stringToTerraform(struct!.templatePersistSourceIp),
    template_persist_source_ip_shared: cdktf.stringToTerraform(struct!.templatePersistSourceIpShared),
    template_persist_ssl_sid: cdktf.stringToTerraform(struct!.templatePersistSslSid),
    template_persist_ssl_sid_shared: cdktf.stringToTerraform(struct!.templatePersistSslSidShared),
    template_policy: cdktf.stringToTerraform(struct!.templatePolicy),
    template_policy_shared: cdktf.stringToTerraform(struct!.templatePolicyShared),
    template_quic: cdktf.stringToTerraform(struct!.templateQuic),
    template_quic_client: cdktf.stringToTerraform(struct!.templateQuicClient),
    template_quic_server: cdktf.stringToTerraform(struct!.templateQuicServer),
    template_quic_shared: cdktf.stringToTerraform(struct!.templateQuicShared),
    template_ram_cache: cdktf.stringToTerraform(struct!.templateRamCache),
    template_reqmod_icap: cdktf.stringToTerraform(struct!.templateReqmodIcap),
    template_respmod_icap: cdktf.stringToTerraform(struct!.templateRespmodIcap),
    template_scaleout: cdktf.stringToTerraform(struct!.templateScaleout),
    template_server_ssh: cdktf.stringToTerraform(struct!.templateServerSsh),
    template_server_ssl: cdktf.stringToTerraform(struct!.templateServerSsl),
    template_server_ssl_shared: cdktf.stringToTerraform(struct!.templateServerSslShared),
    template_sip: cdktf.stringToTerraform(struct!.templateSip),
    template_sip_shared: cdktf.stringToTerraform(struct!.templateSipShared),
    template_smpp: cdktf.stringToTerraform(struct!.templateSmpp),
    template_smpp_shared: cdktf.stringToTerraform(struct!.templateSmppShared),
    template_smtp: cdktf.stringToTerraform(struct!.templateSmtp),
    template_smtp_shared: cdktf.stringToTerraform(struct!.templateSmtpShared),
    template_ssli: cdktf.stringToTerraform(struct!.templateSsli),
    template_tcp: cdktf.stringToTerraform(struct!.templateTcp),
    template_tcp_proxy: cdktf.stringToTerraform(struct!.templateTcpProxy),
    template_tcp_proxy_client: cdktf.stringToTerraform(struct!.templateTcpProxyClient),
    template_tcp_proxy_server: cdktf.stringToTerraform(struct!.templateTcpProxyServer),
    template_tcp_proxy_shared: cdktf.stringToTerraform(struct!.templateTcpProxyShared),
    template_tcp_shared: cdktf.stringToTerraform(struct!.templateTcpShared),
    template_udp: cdktf.stringToTerraform(struct!.templateUdp),
    template_udp_shared: cdktf.stringToTerraform(struct!.templateUdpShared),
    template_virtual_port: cdktf.stringToTerraform(struct!.templateVirtualPort),
    template_virtual_port_shared: cdktf.stringToTerraform(struct!.templateVirtualPortShared),
    trunk_fwd: cdktf.numberToTerraform(struct!.trunkFwd),
    trunk_rev: cdktf.numberToTerraform(struct!.trunkRev),
    use_alternate_port: cdktf.numberToTerraform(struct!.useAlternatePort),
    use_cgnv6: cdktf.numberToTerraform(struct!.useCgnv6),
    use_default_if_no_server: cdktf.numberToTerraform(struct!.useDefaultIfNoServer),
    use_rcv_hop_for_resp: cdktf.numberToTerraform(struct!.useRcvHopForResp),
    use_rcv_hop_group: cdktf.numberToTerraform(struct!.useRcvHopGroup),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    view: cdktf.numberToTerraform(struct!.view),
    when_down: cdktf.numberToTerraform(struct!.whenDown),
    when_down_protocol2: cdktf.numberToTerraform(struct!.whenDownProtocol2),
    when_server_selection_failed: cdktf.stringToTerraform(struct!.whenServerSelectionFailed),
    acl_list: cdktf.listMapper(slbVirtualServerPortListAclListStructToTerraform, true)(struct!.aclList),
    aflex_scripts: cdktf.listMapper(slbVirtualServerPortListAflexScriptsToTerraform, true)(struct!.aflexScripts),
    auth_cfg: slbVirtualServerPortListAuthCfgToTerraform(struct!.authCfg),
    sampling_enable: cdktf.listMapper(slbVirtualServerPortListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbVirtualServerPortListStructToHclTerraform(struct?: SlbVirtualServerPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aflex_table_entry_syn_disable: {
      value: cdktf.numberToHclTerraform(struct!.aflexTableEntrySynDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_table_entry_syn_enable: {
      value: cdktf.numberToHclTerraform(struct!.aflexTableEntrySynEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alt_protocol1: {
      value: cdktf.stringToHclTerraform(struct!.altProtocol1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alt_protocol2: {
      value: cdktf.stringToHclTerraform(struct!.altProtocol2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alternate_port: {
      value: cdktf.numberToHclTerraform(struct!.alternatePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alternate_port_number: {
      value: cdktf.numberToHclTerraform(struct!.alternatePortNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attack_detection: {
      value: cdktf.numberToHclTerraform(struct!.attackDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto: {
      value: cdktf.numberToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clientip_sticky_nat: {
      value: cdktf.numberToHclTerraform(struct!.clientipStickyNat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.connLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_compute: {
      value: cdktf.numberToHclTerraform(struct!.cpuCompute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    def_selection_if_pref_failed: {
      value: cdktf.stringToHclTerraform(struct!.defSelectionIfPrefFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_playerid_check: {
      value: cdktf.numberToHclTerraform(struct!.enablePlayeridCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_scaleout: {
      value: cdktf.numberToHclTerraform(struct!.enableScaleout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth_fwd: {
      value: cdktf.numberToHclTerraform(struct!.ethFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth_rev: {
      value: cdktf.numberToHclTerraform(struct!.ethRev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expand: {
      value: cdktf.numberToHclTerraform(struct!.expand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extended_stats: {
      value: cdktf.numberToHclTerraform(struct!.extendedStats),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_dns_cache: {
      value: cdktf.stringToHclTerraform(struct!.fastDnsCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fast_path: {
      value: cdktf.stringToHclTerraform(struct!.fastPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_routing_mode: {
      value: cdktf.numberToHclTerraform(struct!.forceRoutingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_enable: {
      value: cdktf.numberToHclTerraform(struct!.gslbEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_session_lb: {
      value: cdktf.numberToHclTerraform(struct!.gtpSessionLb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_conn_mirror: {
      value: cdktf.numberToHclTerraform(struct!.haConnMirror),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_global: {
      value: cdktf.numberToHclTerraform(struct!.ignoreGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_map_list: {
      value: cdktf.stringToHclTerraform(struct!.ipMapList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_only_lb: {
      value: cdktf.numberToHclTerraform(struct!.ipOnlyLb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_smart_rr: {
      value: cdktf.numberToHclTerraform(struct!.ipSmartRr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipinip: {
      value: cdktf.numberToHclTerraform(struct!.ipinip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l7_hardware_assist: {
      value: cdktf.numberToHclTerraform(struct!.l7HardwareAssist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l7_service_chain: {
      value: cdktf.numberToHclTerraform(struct!.l7ServiceChain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_compute: {
      value: cdktf.numberToHclTerraform(struct!.memoryCompute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_switching: {
      value: cdktf.numberToHclTerraform(struct!.messageSwitching),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ng_waf: {
      value: cdktf.numberToHclTerraform(struct!.ngWaf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_auto_up_on_aflex: {
      value: cdktf.numberToHclTerraform(struct!.noAutoUpOnAflex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_dest_nat: {
      value: cdktf.numberToHclTerraform(struct!.noDestNat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_logging: {
      value: cdktf.numberToHclTerraform(struct!.noLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_syn: {
      value: cdktf.numberToHclTerraform(struct!.onSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.oneServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    optimization_level: {
      value: cdktf.stringToHclTerraform(struct!.optimizationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    p_template_sip_shared: {
      value: cdktf.numberToHclTerraform(struct!.pTemplateSipShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_capture_template: {
      value: cdktf.stringToHclTerraform(struct!.packetCaptureTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_type: {
      value: cdktf.stringToHclTerraform(struct!.persistType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_shared: {
      value: cdktf.stringToHclTerraform(struct!.poolShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_translation: {
      value: cdktf.numberToHclTerraform(struct!.portTranslation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    precedence: {
      value: cdktf.numberToHclTerraform(struct!.precedence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_layer: {
      value: cdktf.stringToHclTerraform(struct!.proxyLayer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.numberToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_to_https: {
      value: cdktf.numberToHclTerraform(struct!.redirectToHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_acme_challenge: {
      value: cdktf.numberToHclTerraform(struct!.replyAcmeChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_fail: {
      value: cdktf.numberToHclTerraform(struct!.reqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reselection: {
      value: cdktf.stringToHclTerraform(struct!.reselection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset: {
      value: cdktf.numberToHclTerraform(struct!.reset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset_on_server_selection_fail: {
      value: cdktf.numberToHclTerraform(struct!.resetOnServerSelectionFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resolve_web_cat_list: {
      value: cdktf.stringToHclTerraform(struct!.resolveWebCatList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rtp_sip_call_id_match: {
      value: cdktf.numberToHclTerraform(struct!.rtpSipCallIdMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secs: {
      value: cdktf.numberToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serv_sel_fail: {
      value: cdktf.numberToHclTerraform(struct!.servSelFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_group: {
      value: cdktf.stringToHclTerraform(struct!.serverGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_group: {
      value: cdktf.stringToHclTerraform(struct!.serviceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_partition_cache_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionCacheTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_client_ssl_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionClientSslTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_connection_reuse_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionConnectionReuseTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_dblb_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionDblbTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_diameter_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionDiameterTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_dns_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionDnsTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_doh_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionDohTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_dynamic_service_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionDynamicServiceTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_external_service_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionExternalServiceTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_fix_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionFixTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_http_policy_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionHttpPolicyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_http_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionHttpTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_imap_pop3_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionImapPop3Template),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_persist_cookie_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionPersistCookieTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_persist_destination_ip_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionPersistDestinationIpTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_persist_source_ip_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionPersistSourceIpTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_persist_ssl_sid_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionPersistSslSidTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_policy_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionPolicyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_pool: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionPool),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_quic_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionQuicTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_server_ssl_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionServerSslTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_smpp_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionSmppTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_smtp_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionSmtpTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_tcp: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_tcp_proxy_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionTcpProxyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_udp: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_virtual_port_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionVirtualPortTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    showtech_print_extended_stats: {
      value: cdktf.numberToHclTerraform(struct!.showtechPrintExtendedStats),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_rev_hash: {
      value: cdktf.numberToHclTerraform(struct!.skipRevHash),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_on_vip: {
      value: cdktf.numberToHclTerraform(struct!.snatOnVip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stats_data_action: {
      value: cdktf.stringToHclTerraform(struct!.statsDataAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitute_source_mac: {
      value: cdktf.numberToHclTerraform(struct!.substituteSourceMac),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    support_http2: {
      value: cdktf.numberToHclTerraform(struct!.supportHttp2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie: {
      value: cdktf.numberToHclTerraform(struct!.synCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_cache: {
      value: cdktf.stringToHclTerraform(struct!.templateCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_cache_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateCacheShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_client_ssh: {
      value: cdktf.stringToHclTerraform(struct!.templateClientSsh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_client_ssl: {
      value: cdktf.stringToHclTerraform(struct!.templateClientSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_client_ssl_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateClientSslShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_connection_reuse: {
      value: cdktf.stringToHclTerraform(struct!.templateConnectionReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_connection_reuse_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateConnectionReuseShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_dblb: {
      value: cdktf.stringToHclTerraform(struct!.templateDblb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_dblb_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateDblbShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_diameter: {
      value: cdktf.stringToHclTerraform(struct!.templateDiameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_diameter_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateDiameterShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_dns: {
      value: cdktf.stringToHclTerraform(struct!.templateDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_dns_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateDnsShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_doh: {
      value: cdktf.stringToHclTerraform(struct!.templateDoh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_doh_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateDohShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_dynamic_service: {
      value: cdktf.stringToHclTerraform(struct!.templateDynamicService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_dynamic_service_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateDynamicServiceShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_external_service: {
      value: cdktf.stringToHclTerraform(struct!.templateExternalService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_external_service_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateExternalServiceShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_fix: {
      value: cdktf.stringToHclTerraform(struct!.templateFix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_fix_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateFixShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_ftp: {
      value: cdktf.stringToHclTerraform(struct!.templateFtp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_http: {
      value: cdktf.stringToHclTerraform(struct!.templateHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_http_policy: {
      value: cdktf.stringToHclTerraform(struct!.templateHttpPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_http_policy_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateHttpPolicyShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_http_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateHttpShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_imap_pop3: {
      value: cdktf.stringToHclTerraform(struct!.templateImapPop3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_imap_pop3_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateImapPop3Shared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_mqtt: {
      value: cdktf.stringToHclTerraform(struct!.templateMqtt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_persist_cookie: {
      value: cdktf.stringToHclTerraform(struct!.templatePersistCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_persist_cookie_shared: {
      value: cdktf.stringToHclTerraform(struct!.templatePersistCookieShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_persist_destination_ip: {
      value: cdktf.stringToHclTerraform(struct!.templatePersistDestinationIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_persist_destination_ip_shared: {
      value: cdktf.stringToHclTerraform(struct!.templatePersistDestinationIpShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_persist_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.templatePersistSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_persist_source_ip_shared: {
      value: cdktf.stringToHclTerraform(struct!.templatePersistSourceIpShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_persist_ssl_sid: {
      value: cdktf.stringToHclTerraform(struct!.templatePersistSslSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_persist_ssl_sid_shared: {
      value: cdktf.stringToHclTerraform(struct!.templatePersistSslSidShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_policy: {
      value: cdktf.stringToHclTerraform(struct!.templatePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_policy_shared: {
      value: cdktf.stringToHclTerraform(struct!.templatePolicyShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_quic: {
      value: cdktf.stringToHclTerraform(struct!.templateQuic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_quic_client: {
      value: cdktf.stringToHclTerraform(struct!.templateQuicClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_quic_server: {
      value: cdktf.stringToHclTerraform(struct!.templateQuicServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_quic_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateQuicShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_ram_cache: {
      value: cdktf.stringToHclTerraform(struct!.templateRamCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_reqmod_icap: {
      value: cdktf.stringToHclTerraform(struct!.templateReqmodIcap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_respmod_icap: {
      value: cdktf.stringToHclTerraform(struct!.templateRespmodIcap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_scaleout: {
      value: cdktf.stringToHclTerraform(struct!.templateScaleout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_server_ssh: {
      value: cdktf.stringToHclTerraform(struct!.templateServerSsh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_server_ssl: {
      value: cdktf.stringToHclTerraform(struct!.templateServerSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_server_ssl_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateServerSslShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_sip: {
      value: cdktf.stringToHclTerraform(struct!.templateSip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_sip_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateSipShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_smpp: {
      value: cdktf.stringToHclTerraform(struct!.templateSmpp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_smpp_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateSmppShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_smtp: {
      value: cdktf.stringToHclTerraform(struct!.templateSmtp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_smtp_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateSmtpShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_ssli: {
      value: cdktf.stringToHclTerraform(struct!.templateSsli),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_tcp: {
      value: cdktf.stringToHclTerraform(struct!.templateTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_tcp_proxy: {
      value: cdktf.stringToHclTerraform(struct!.templateTcpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_tcp_proxy_client: {
      value: cdktf.stringToHclTerraform(struct!.templateTcpProxyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_tcp_proxy_server: {
      value: cdktf.stringToHclTerraform(struct!.templateTcpProxyServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_tcp_proxy_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateTcpProxyShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_tcp_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateTcpShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_udp: {
      value: cdktf.stringToHclTerraform(struct!.templateUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_udp_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateUdpShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_virtual_port: {
      value: cdktf.stringToHclTerraform(struct!.templateVirtualPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_virtual_port_shared: {
      value: cdktf.stringToHclTerraform(struct!.templateVirtualPortShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk_fwd: {
      value: cdktf.numberToHclTerraform(struct!.trunkFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk_rev: {
      value: cdktf.numberToHclTerraform(struct!.trunkRev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_alternate_port: {
      value: cdktf.numberToHclTerraform(struct!.useAlternatePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_cgnv6: {
      value: cdktf.numberToHclTerraform(struct!.useCgnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_default_if_no_server: {
      value: cdktf.numberToHclTerraform(struct!.useDefaultIfNoServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_rcv_hop_for_resp: {
      value: cdktf.numberToHclTerraform(struct!.useRcvHopForResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_rcv_hop_group: {
      value: cdktf.numberToHclTerraform(struct!.useRcvHopGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view: {
      value: cdktf.numberToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_down: {
      value: cdktf.numberToHclTerraform(struct!.whenDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_down_protocol2: {
      value: cdktf.numberToHclTerraform(struct!.whenDownProtocol2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_server_selection_failed: {
      value: cdktf.stringToHclTerraform(struct!.whenServerSelectionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_list: {
      value: cdktf.listMapperHcl(slbVirtualServerPortListAclListStructToHclTerraform, true)(struct!.aclList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbVirtualServerPortListAclListStructList",
    },
    aflex_scripts: {
      value: cdktf.listMapperHcl(slbVirtualServerPortListAflexScriptsToHclTerraform, true)(struct!.aflexScripts),
      isBlock: true,
      type: "list",
      storageClassType: "SlbVirtualServerPortListAflexScriptsList",
    },
    auth_cfg: {
      value: slbVirtualServerPortListAuthCfgToHclTerraform(struct!.authCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SlbVirtualServerPortListAuthCfgList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(slbVirtualServerPortListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbVirtualServerPortListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SlbVirtualServerPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._aflexTableEntrySynDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexTableEntrySynDisable = this._aflexTableEntrySynDisable;
    }
    if (this._aflexTableEntrySynEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexTableEntrySynEnable = this._aflexTableEntrySynEnable;
    }
    if (this._altProtocol1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.altProtocol1 = this._altProtocol1;
    }
    if (this._altProtocol2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.altProtocol2 = this._altProtocol2;
    }
    if (this._alternatePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternatePort = this._alternatePort;
    }
    if (this._alternatePortNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternatePortNumber = this._alternatePortNumber;
    }
    if (this._attackDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackDetection = this._attackDetection;
    }
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._clientipStickyNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientipStickyNat = this._clientipStickyNat;
    }
    if (this._connLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connLimit = this._connLimit;
    }
    if (this._cpuCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCompute = this._cpuCompute;
    }
    if (this._defSelectionIfPrefFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.defSelectionIfPrefFailed = this._defSelectionIfPrefFailed;
    }
    if (this._enablePlayeridCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePlayeridCheck = this._enablePlayeridCheck;
    }
    if (this._enableScaleout !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableScaleout = this._enableScaleout;
    }
    if (this._ethFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethFwd = this._ethFwd;
    }
    if (this._ethRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethRev = this._ethRev;
    }
    if (this._expand !== undefined) {
      hasAnyValues = true;
      internalValueResult.expand = this._expand;
    }
    if (this._extendedStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedStats = this._extendedStats;
    }
    if (this._fastDnsCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastDnsCache = this._fastDnsCache;
    }
    if (this._fastPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastPath = this._fastPath;
    }
    if (this._forceRoutingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceRoutingMode = this._forceRoutingMode;
    }
    if (this._gslbEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbEnable = this._gslbEnable;
    }
    if (this._gtpSessionLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSessionLb = this._gtpSessionLb;
    }
    if (this._haConnMirror !== undefined) {
      hasAnyValues = true;
      internalValueResult.haConnMirror = this._haConnMirror;
    }
    if (this._ignoreGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreGlobal = this._ignoreGlobal;
    }
    if (this._ipMapList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMapList = this._ipMapList;
    }
    if (this._ipOnlyLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipOnlyLb = this._ipOnlyLb;
    }
    if (this._ipSmartRr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSmartRr = this._ipSmartRr;
    }
    if (this._ipinip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipinip = this._ipinip;
    }
    if (this._l7HardwareAssist !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7HardwareAssist = this._l7HardwareAssist;
    }
    if (this._l7ServiceChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7ServiceChain = this._l7ServiceChain;
    }
    if (this._memoryCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryCompute = this._memoryCompute;
    }
    if (this._messageSwitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageSwitching = this._messageSwitching;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngWaf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngWaf = this._ngWaf;
    }
    if (this._noAutoUpOnAflex !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAutoUpOnAflex = this._noAutoUpOnAflex;
    }
    if (this._noDestNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDestNat = this._noDestNat;
    }
    if (this._noLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.noLogging = this._noLogging;
    }
    if (this._onSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSyn = this._onSyn;
    }
    if (this._oneServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneServerConn = this._oneServerConn;
    }
    if (this._optimizationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizationLevel = this._optimizationLevel;
    }
    if (this._pTemplateSipShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.pTemplateSipShared = this._pTemplateSipShared;
    }
    if (this._packetCaptureTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCaptureTemplate = this._packetCaptureTemplate;
    }
    if (this._persistType !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistType = this._persistType;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._poolShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolShared = this._poolShared;
    }
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._portTranslation !== undefined) {
      hasAnyValues = true;
      internalValueResult.portTranslation = this._portTranslation;
    }
    if (this._precedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.precedence = this._precedence;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._proxyLayer !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyLayer = this._proxyLayer;
    }
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._redirectToHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectToHttps = this._redirectToHttps;
    }
    if (this._replyAcmeChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyAcmeChallenge = this._replyAcmeChallenge;
    }
    if (this._reqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqFail = this._reqFail;
    }
    if (this._reselection !== undefined) {
      hasAnyValues = true;
      internalValueResult.reselection = this._reselection;
    }
    if (this._reset !== undefined) {
      hasAnyValues = true;
      internalValueResult.reset = this._reset;
    }
    if (this._resetOnServerSelectionFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetOnServerSelectionFail = this._resetOnServerSelectionFail;
    }
    if (this._resolveWebCatList !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveWebCatList = this._resolveWebCatList;
    }
    if (this._rtpSipCallIdMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtpSipCallIdMatch = this._rtpSipCallIdMatch;
    }
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._servSelFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.servSelFail = this._servSelFail;
    }
    if (this._serverGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverGroup = this._serverGroup;
    }
    if (this._serviceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroup = this._serviceGroup;
    }
    if (this._sharedPartitionCacheTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionCacheTemplate = this._sharedPartitionCacheTemplate;
    }
    if (this._sharedPartitionClientSslTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionClientSslTemplate = this._sharedPartitionClientSslTemplate;
    }
    if (this._sharedPartitionConnectionReuseTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionConnectionReuseTemplate = this._sharedPartitionConnectionReuseTemplate;
    }
    if (this._sharedPartitionDblbTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionDblbTemplate = this._sharedPartitionDblbTemplate;
    }
    if (this._sharedPartitionDiameterTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionDiameterTemplate = this._sharedPartitionDiameterTemplate;
    }
    if (this._sharedPartitionDnsTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionDnsTemplate = this._sharedPartitionDnsTemplate;
    }
    if (this._sharedPartitionDohTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionDohTemplate = this._sharedPartitionDohTemplate;
    }
    if (this._sharedPartitionDynamicServiceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionDynamicServiceTemplate = this._sharedPartitionDynamicServiceTemplate;
    }
    if (this._sharedPartitionExternalServiceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionExternalServiceTemplate = this._sharedPartitionExternalServiceTemplate;
    }
    if (this._sharedPartitionFixTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionFixTemplate = this._sharedPartitionFixTemplate;
    }
    if (this._sharedPartitionHttpPolicyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionHttpPolicyTemplate = this._sharedPartitionHttpPolicyTemplate;
    }
    if (this._sharedPartitionHttpTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionHttpTemplate = this._sharedPartitionHttpTemplate;
    }
    if (this._sharedPartitionImapPop3Template !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionImapPop3Template = this._sharedPartitionImapPop3Template;
    }
    if (this._sharedPartitionPersistCookieTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionPersistCookieTemplate = this._sharedPartitionPersistCookieTemplate;
    }
    if (this._sharedPartitionPersistDestinationIpTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionPersistDestinationIpTemplate = this._sharedPartitionPersistDestinationIpTemplate;
    }
    if (this._sharedPartitionPersistSourceIpTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionPersistSourceIpTemplate = this._sharedPartitionPersistSourceIpTemplate;
    }
    if (this._sharedPartitionPersistSslSidTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionPersistSslSidTemplate = this._sharedPartitionPersistSslSidTemplate;
    }
    if (this._sharedPartitionPolicyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionPolicyTemplate = this._sharedPartitionPolicyTemplate;
    }
    if (this._sharedPartitionPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionPool = this._sharedPartitionPool;
    }
    if (this._sharedPartitionQuicTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionQuicTemplate = this._sharedPartitionQuicTemplate;
    }
    if (this._sharedPartitionServerSslTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionServerSslTemplate = this._sharedPartitionServerSslTemplate;
    }
    if (this._sharedPartitionSmppTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionSmppTemplate = this._sharedPartitionSmppTemplate;
    }
    if (this._sharedPartitionSmtpTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionSmtpTemplate = this._sharedPartitionSmtpTemplate;
    }
    if (this._sharedPartitionTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionTcp = this._sharedPartitionTcp;
    }
    if (this._sharedPartitionTcpProxyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionTcpProxyTemplate = this._sharedPartitionTcpProxyTemplate;
    }
    if (this._sharedPartitionUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionUdp = this._sharedPartitionUdp;
    }
    if (this._sharedPartitionVirtualPortTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionVirtualPortTemplate = this._sharedPartitionVirtualPortTemplate;
    }
    if (this._showtechPrintExtendedStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.showtechPrintExtendedStats = this._showtechPrintExtendedStats;
    }
    if (this._skipRevHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipRevHash = this._skipRevHash;
    }
    if (this._snatOnVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatOnVip = this._snatOnVip;
    }
    if (this._statsDataAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsDataAction = this._statsDataAction;
    }
    if (this._substituteSourceMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.substituteSourceMac = this._substituteSourceMac;
    }
    if (this._supportHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportHttp2 = this._supportHttp2;
    }
    if (this._synCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookie = this._synCookie;
    }
    if (this._templateCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateCache = this._templateCache;
    }
    if (this._templateCacheShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateCacheShared = this._templateCacheShared;
    }
    if (this._templateClientSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateClientSsh = this._templateClientSsh;
    }
    if (this._templateClientSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateClientSsl = this._templateClientSsl;
    }
    if (this._templateClientSslShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateClientSslShared = this._templateClientSslShared;
    }
    if (this._templateConnectionReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateConnectionReuse = this._templateConnectionReuse;
    }
    if (this._templateConnectionReuseShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateConnectionReuseShared = this._templateConnectionReuseShared;
    }
    if (this._templateDblb !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDblb = this._templateDblb;
    }
    if (this._templateDblbShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDblbShared = this._templateDblbShared;
    }
    if (this._templateDiameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDiameter = this._templateDiameter;
    }
    if (this._templateDiameterShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDiameterShared = this._templateDiameterShared;
    }
    if (this._templateDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDns = this._templateDns;
    }
    if (this._templateDnsShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDnsShared = this._templateDnsShared;
    }
    if (this._templateDoh !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDoh = this._templateDoh;
    }
    if (this._templateDohShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDohShared = this._templateDohShared;
    }
    if (this._templateDynamicService !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDynamicService = this._templateDynamicService;
    }
    if (this._templateDynamicServiceShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDynamicServiceShared = this._templateDynamicServiceShared;
    }
    if (this._templateExternalService !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateExternalService = this._templateExternalService;
    }
    if (this._templateExternalServiceShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateExternalServiceShared = this._templateExternalServiceShared;
    }
    if (this._templateFix !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateFix = this._templateFix;
    }
    if (this._templateFixShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateFixShared = this._templateFixShared;
    }
    if (this._templateFtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateFtp = this._templateFtp;
    }
    if (this._templateHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateHttp = this._templateHttp;
    }
    if (this._templateHttpPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateHttpPolicy = this._templateHttpPolicy;
    }
    if (this._templateHttpPolicyShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateHttpPolicyShared = this._templateHttpPolicyShared;
    }
    if (this._templateHttpShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateHttpShared = this._templateHttpShared;
    }
    if (this._templateImapPop3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateImapPop3 = this._templateImapPop3;
    }
    if (this._templateImapPop3Shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateImapPop3Shared = this._templateImapPop3Shared;
    }
    if (this._templateMqtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateMqtt = this._templateMqtt;
    }
    if (this._templatePersistCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePersistCookie = this._templatePersistCookie;
    }
    if (this._templatePersistCookieShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePersistCookieShared = this._templatePersistCookieShared;
    }
    if (this._templatePersistDestinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePersistDestinationIp = this._templatePersistDestinationIp;
    }
    if (this._templatePersistDestinationIpShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePersistDestinationIpShared = this._templatePersistDestinationIpShared;
    }
    if (this._templatePersistSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePersistSourceIp = this._templatePersistSourceIp;
    }
    if (this._templatePersistSourceIpShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePersistSourceIpShared = this._templatePersistSourceIpShared;
    }
    if (this._templatePersistSslSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePersistSslSid = this._templatePersistSslSid;
    }
    if (this._templatePersistSslSidShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePersistSslSidShared = this._templatePersistSslSidShared;
    }
    if (this._templatePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePolicy = this._templatePolicy;
    }
    if (this._templatePolicyShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePolicyShared = this._templatePolicyShared;
    }
    if (this._templateQuic !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateQuic = this._templateQuic;
    }
    if (this._templateQuicClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateQuicClient = this._templateQuicClient;
    }
    if (this._templateQuicServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateQuicServer = this._templateQuicServer;
    }
    if (this._templateQuicShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateQuicShared = this._templateQuicShared;
    }
    if (this._templateRamCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateRamCache = this._templateRamCache;
    }
    if (this._templateReqmodIcap !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateReqmodIcap = this._templateReqmodIcap;
    }
    if (this._templateRespmodIcap !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateRespmodIcap = this._templateRespmodIcap;
    }
    if (this._templateScaleout !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateScaleout = this._templateScaleout;
    }
    if (this._templateServerSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateServerSsh = this._templateServerSsh;
    }
    if (this._templateServerSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateServerSsl = this._templateServerSsl;
    }
    if (this._templateServerSslShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateServerSslShared = this._templateServerSslShared;
    }
    if (this._templateSip !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateSip = this._templateSip;
    }
    if (this._templateSipShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateSipShared = this._templateSipShared;
    }
    if (this._templateSmpp !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateSmpp = this._templateSmpp;
    }
    if (this._templateSmppShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateSmppShared = this._templateSmppShared;
    }
    if (this._templateSmtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateSmtp = this._templateSmtp;
    }
    if (this._templateSmtpShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateSmtpShared = this._templateSmtpShared;
    }
    if (this._templateSsli !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateSsli = this._templateSsli;
    }
    if (this._templateTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateTcp = this._templateTcp;
    }
    if (this._templateTcpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateTcpProxy = this._templateTcpProxy;
    }
    if (this._templateTcpProxyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateTcpProxyClient = this._templateTcpProxyClient;
    }
    if (this._templateTcpProxyServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateTcpProxyServer = this._templateTcpProxyServer;
    }
    if (this._templateTcpProxyShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateTcpProxyShared = this._templateTcpProxyShared;
    }
    if (this._templateTcpShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateTcpShared = this._templateTcpShared;
    }
    if (this._templateUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateUdp = this._templateUdp;
    }
    if (this._templateUdpShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateUdpShared = this._templateUdpShared;
    }
    if (this._templateVirtualPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVirtualPort = this._templateVirtualPort;
    }
    if (this._templateVirtualPortShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVirtualPortShared = this._templateVirtualPortShared;
    }
    if (this._trunkFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkFwd = this._trunkFwd;
    }
    if (this._trunkRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkRev = this._trunkRev;
    }
    if (this._useAlternatePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAlternatePort = this._useAlternatePort;
    }
    if (this._useCgnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCgnv6 = this._useCgnv6;
    }
    if (this._useDefaultIfNoServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultIfNoServer = this._useDefaultIfNoServer;
    }
    if (this._useRcvHopForResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRcvHopForResp = this._useRcvHopForResp;
    }
    if (this._useRcvHopGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRcvHopGroup = this._useRcvHopGroup;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    if (this._whenDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenDown = this._whenDown;
    }
    if (this._whenDownProtocol2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenDownProtocol2 = this._whenDownProtocol2;
    }
    if (this._whenServerSelectionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenServerSelectionFailed = this._whenServerSelectionFailed;
    }
    if (this._aclList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclList = this._aclList?.internalValue;
    }
    if (this._aflexScripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexScripts = this._aflexScripts?.internalValue;
    }
    if (this._authCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCfg = this._authCfg?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._aflexTableEntrySynDisable = undefined;
      this._aflexTableEntrySynEnable = undefined;
      this._altProtocol1 = undefined;
      this._altProtocol2 = undefined;
      this._alternatePort = undefined;
      this._alternatePortNumber = undefined;
      this._attackDetection = undefined;
      this._auto = undefined;
      this._clientipStickyNat = undefined;
      this._connLimit = undefined;
      this._cpuCompute = undefined;
      this._defSelectionIfPrefFailed = undefined;
      this._enablePlayeridCheck = undefined;
      this._enableScaleout = undefined;
      this._ethFwd = undefined;
      this._ethRev = undefined;
      this._expand = undefined;
      this._extendedStats = undefined;
      this._fastDnsCache = undefined;
      this._fastPath = undefined;
      this._forceRoutingMode = undefined;
      this._gslbEnable = undefined;
      this._gtpSessionLb = undefined;
      this._haConnMirror = undefined;
      this._ignoreGlobal = undefined;
      this._ipMapList = undefined;
      this._ipOnlyLb = undefined;
      this._ipSmartRr = undefined;
      this._ipinip = undefined;
      this._l7HardwareAssist = undefined;
      this._l7ServiceChain = undefined;
      this._memoryCompute = undefined;
      this._messageSwitching = undefined;
      this._name = undefined;
      this._ngWaf = undefined;
      this._noAutoUpOnAflex = undefined;
      this._noDestNat = undefined;
      this._noLogging = undefined;
      this._onSyn = undefined;
      this._oneServerConn = undefined;
      this._optimizationLevel = undefined;
      this._pTemplateSipShared = undefined;
      this._packetCaptureTemplate = undefined;
      this._persistType = undefined;
      this._pool = undefined;
      this._poolShared = undefined;
      this._portNumber = undefined;
      this._portTranslation = undefined;
      this._precedence = undefined;
      this._protocol = undefined;
      this._proxyLayer = undefined;
      this._range = undefined;
      this._rate = undefined;
      this._redirectToHttps = undefined;
      this._replyAcmeChallenge = undefined;
      this._reqFail = undefined;
      this._reselection = undefined;
      this._reset = undefined;
      this._resetOnServerSelectionFail = undefined;
      this._resolveWebCatList = undefined;
      this._rtpSipCallIdMatch = undefined;
      this._secs = undefined;
      this._servSelFail = undefined;
      this._serverGroup = undefined;
      this._serviceGroup = undefined;
      this._sharedPartitionCacheTemplate = undefined;
      this._sharedPartitionClientSslTemplate = undefined;
      this._sharedPartitionConnectionReuseTemplate = undefined;
      this._sharedPartitionDblbTemplate = undefined;
      this._sharedPartitionDiameterTemplate = undefined;
      this._sharedPartitionDnsTemplate = undefined;
      this._sharedPartitionDohTemplate = undefined;
      this._sharedPartitionDynamicServiceTemplate = undefined;
      this._sharedPartitionExternalServiceTemplate = undefined;
      this._sharedPartitionFixTemplate = undefined;
      this._sharedPartitionHttpPolicyTemplate = undefined;
      this._sharedPartitionHttpTemplate = undefined;
      this._sharedPartitionImapPop3Template = undefined;
      this._sharedPartitionPersistCookieTemplate = undefined;
      this._sharedPartitionPersistDestinationIpTemplate = undefined;
      this._sharedPartitionPersistSourceIpTemplate = undefined;
      this._sharedPartitionPersistSslSidTemplate = undefined;
      this._sharedPartitionPolicyTemplate = undefined;
      this._sharedPartitionPool = undefined;
      this._sharedPartitionQuicTemplate = undefined;
      this._sharedPartitionServerSslTemplate = undefined;
      this._sharedPartitionSmppTemplate = undefined;
      this._sharedPartitionSmtpTemplate = undefined;
      this._sharedPartitionTcp = undefined;
      this._sharedPartitionTcpProxyTemplate = undefined;
      this._sharedPartitionUdp = undefined;
      this._sharedPartitionVirtualPortTemplate = undefined;
      this._showtechPrintExtendedStats = undefined;
      this._skipRevHash = undefined;
      this._snatOnVip = undefined;
      this._statsDataAction = undefined;
      this._substituteSourceMac = undefined;
      this._supportHttp2 = undefined;
      this._synCookie = undefined;
      this._templateCache = undefined;
      this._templateCacheShared = undefined;
      this._templateClientSsh = undefined;
      this._templateClientSsl = undefined;
      this._templateClientSslShared = undefined;
      this._templateConnectionReuse = undefined;
      this._templateConnectionReuseShared = undefined;
      this._templateDblb = undefined;
      this._templateDblbShared = undefined;
      this._templateDiameter = undefined;
      this._templateDiameterShared = undefined;
      this._templateDns = undefined;
      this._templateDnsShared = undefined;
      this._templateDoh = undefined;
      this._templateDohShared = undefined;
      this._templateDynamicService = undefined;
      this._templateDynamicServiceShared = undefined;
      this._templateExternalService = undefined;
      this._templateExternalServiceShared = undefined;
      this._templateFix = undefined;
      this._templateFixShared = undefined;
      this._templateFtp = undefined;
      this._templateHttp = undefined;
      this._templateHttpPolicy = undefined;
      this._templateHttpPolicyShared = undefined;
      this._templateHttpShared = undefined;
      this._templateImapPop3 = undefined;
      this._templateImapPop3Shared = undefined;
      this._templateMqtt = undefined;
      this._templatePersistCookie = undefined;
      this._templatePersistCookieShared = undefined;
      this._templatePersistDestinationIp = undefined;
      this._templatePersistDestinationIpShared = undefined;
      this._templatePersistSourceIp = undefined;
      this._templatePersistSourceIpShared = undefined;
      this._templatePersistSslSid = undefined;
      this._templatePersistSslSidShared = undefined;
      this._templatePolicy = undefined;
      this._templatePolicyShared = undefined;
      this._templateQuic = undefined;
      this._templateQuicClient = undefined;
      this._templateQuicServer = undefined;
      this._templateQuicShared = undefined;
      this._templateRamCache = undefined;
      this._templateReqmodIcap = undefined;
      this._templateRespmodIcap = undefined;
      this._templateScaleout = undefined;
      this._templateServerSsh = undefined;
      this._templateServerSsl = undefined;
      this._templateServerSslShared = undefined;
      this._templateSip = undefined;
      this._templateSipShared = undefined;
      this._templateSmpp = undefined;
      this._templateSmppShared = undefined;
      this._templateSmtp = undefined;
      this._templateSmtpShared = undefined;
      this._templateSsli = undefined;
      this._templateTcp = undefined;
      this._templateTcpProxy = undefined;
      this._templateTcpProxyClient = undefined;
      this._templateTcpProxyServer = undefined;
      this._templateTcpProxyShared = undefined;
      this._templateTcpShared = undefined;
      this._templateUdp = undefined;
      this._templateUdpShared = undefined;
      this._templateVirtualPort = undefined;
      this._templateVirtualPortShared = undefined;
      this._trunkFwd = undefined;
      this._trunkRev = undefined;
      this._useAlternatePort = undefined;
      this._useCgnv6 = undefined;
      this._useDefaultIfNoServer = undefined;
      this._useRcvHopForResp = undefined;
      this._useRcvHopGroup = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._view = undefined;
      this._whenDown = undefined;
      this._whenDownProtocol2 = undefined;
      this._whenServerSelectionFailed = undefined;
      this._aclList.internalValue = undefined;
      this._aflexScripts.internalValue = undefined;
      this._authCfg.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._aflexTableEntrySynDisable = value.aflexTableEntrySynDisable;
      this._aflexTableEntrySynEnable = value.aflexTableEntrySynEnable;
      this._altProtocol1 = value.altProtocol1;
      this._altProtocol2 = value.altProtocol2;
      this._alternatePort = value.alternatePort;
      this._alternatePortNumber = value.alternatePortNumber;
      this._attackDetection = value.attackDetection;
      this._auto = value.auto;
      this._clientipStickyNat = value.clientipStickyNat;
      this._connLimit = value.connLimit;
      this._cpuCompute = value.cpuCompute;
      this._defSelectionIfPrefFailed = value.defSelectionIfPrefFailed;
      this._enablePlayeridCheck = value.enablePlayeridCheck;
      this._enableScaleout = value.enableScaleout;
      this._ethFwd = value.ethFwd;
      this._ethRev = value.ethRev;
      this._expand = value.expand;
      this._extendedStats = value.extendedStats;
      this._fastDnsCache = value.fastDnsCache;
      this._fastPath = value.fastPath;
      this._forceRoutingMode = value.forceRoutingMode;
      this._gslbEnable = value.gslbEnable;
      this._gtpSessionLb = value.gtpSessionLb;
      this._haConnMirror = value.haConnMirror;
      this._ignoreGlobal = value.ignoreGlobal;
      this._ipMapList = value.ipMapList;
      this._ipOnlyLb = value.ipOnlyLb;
      this._ipSmartRr = value.ipSmartRr;
      this._ipinip = value.ipinip;
      this._l7HardwareAssist = value.l7HardwareAssist;
      this._l7ServiceChain = value.l7ServiceChain;
      this._memoryCompute = value.memoryCompute;
      this._messageSwitching = value.messageSwitching;
      this._name = value.name;
      this._ngWaf = value.ngWaf;
      this._noAutoUpOnAflex = value.noAutoUpOnAflex;
      this._noDestNat = value.noDestNat;
      this._noLogging = value.noLogging;
      this._onSyn = value.onSyn;
      this._oneServerConn = value.oneServerConn;
      this._optimizationLevel = value.optimizationLevel;
      this._pTemplateSipShared = value.pTemplateSipShared;
      this._packetCaptureTemplate = value.packetCaptureTemplate;
      this._persistType = value.persistType;
      this._pool = value.pool;
      this._poolShared = value.poolShared;
      this._portNumber = value.portNumber;
      this._portTranslation = value.portTranslation;
      this._precedence = value.precedence;
      this._protocol = value.protocol;
      this._proxyLayer = value.proxyLayer;
      this._range = value.range;
      this._rate = value.rate;
      this._redirectToHttps = value.redirectToHttps;
      this._replyAcmeChallenge = value.replyAcmeChallenge;
      this._reqFail = value.reqFail;
      this._reselection = value.reselection;
      this._reset = value.reset;
      this._resetOnServerSelectionFail = value.resetOnServerSelectionFail;
      this._resolveWebCatList = value.resolveWebCatList;
      this._rtpSipCallIdMatch = value.rtpSipCallIdMatch;
      this._secs = value.secs;
      this._servSelFail = value.servSelFail;
      this._serverGroup = value.serverGroup;
      this._serviceGroup = value.serviceGroup;
      this._sharedPartitionCacheTemplate = value.sharedPartitionCacheTemplate;
      this._sharedPartitionClientSslTemplate = value.sharedPartitionClientSslTemplate;
      this._sharedPartitionConnectionReuseTemplate = value.sharedPartitionConnectionReuseTemplate;
      this._sharedPartitionDblbTemplate = value.sharedPartitionDblbTemplate;
      this._sharedPartitionDiameterTemplate = value.sharedPartitionDiameterTemplate;
      this._sharedPartitionDnsTemplate = value.sharedPartitionDnsTemplate;
      this._sharedPartitionDohTemplate = value.sharedPartitionDohTemplate;
      this._sharedPartitionDynamicServiceTemplate = value.sharedPartitionDynamicServiceTemplate;
      this._sharedPartitionExternalServiceTemplate = value.sharedPartitionExternalServiceTemplate;
      this._sharedPartitionFixTemplate = value.sharedPartitionFixTemplate;
      this._sharedPartitionHttpPolicyTemplate = value.sharedPartitionHttpPolicyTemplate;
      this._sharedPartitionHttpTemplate = value.sharedPartitionHttpTemplate;
      this._sharedPartitionImapPop3Template = value.sharedPartitionImapPop3Template;
      this._sharedPartitionPersistCookieTemplate = value.sharedPartitionPersistCookieTemplate;
      this._sharedPartitionPersistDestinationIpTemplate = value.sharedPartitionPersistDestinationIpTemplate;
      this._sharedPartitionPersistSourceIpTemplate = value.sharedPartitionPersistSourceIpTemplate;
      this._sharedPartitionPersistSslSidTemplate = value.sharedPartitionPersistSslSidTemplate;
      this._sharedPartitionPolicyTemplate = value.sharedPartitionPolicyTemplate;
      this._sharedPartitionPool = value.sharedPartitionPool;
      this._sharedPartitionQuicTemplate = value.sharedPartitionQuicTemplate;
      this._sharedPartitionServerSslTemplate = value.sharedPartitionServerSslTemplate;
      this._sharedPartitionSmppTemplate = value.sharedPartitionSmppTemplate;
      this._sharedPartitionSmtpTemplate = value.sharedPartitionSmtpTemplate;
      this._sharedPartitionTcp = value.sharedPartitionTcp;
      this._sharedPartitionTcpProxyTemplate = value.sharedPartitionTcpProxyTemplate;
      this._sharedPartitionUdp = value.sharedPartitionUdp;
      this._sharedPartitionVirtualPortTemplate = value.sharedPartitionVirtualPortTemplate;
      this._showtechPrintExtendedStats = value.showtechPrintExtendedStats;
      this._skipRevHash = value.skipRevHash;
      this._snatOnVip = value.snatOnVip;
      this._statsDataAction = value.statsDataAction;
      this._substituteSourceMac = value.substituteSourceMac;
      this._supportHttp2 = value.supportHttp2;
      this._synCookie = value.synCookie;
      this._templateCache = value.templateCache;
      this._templateCacheShared = value.templateCacheShared;
      this._templateClientSsh = value.templateClientSsh;
      this._templateClientSsl = value.templateClientSsl;
      this._templateClientSslShared = value.templateClientSslShared;
      this._templateConnectionReuse = value.templateConnectionReuse;
      this._templateConnectionReuseShared = value.templateConnectionReuseShared;
      this._templateDblb = value.templateDblb;
      this._templateDblbShared = value.templateDblbShared;
      this._templateDiameter = value.templateDiameter;
      this._templateDiameterShared = value.templateDiameterShared;
      this._templateDns = value.templateDns;
      this._templateDnsShared = value.templateDnsShared;
      this._templateDoh = value.templateDoh;
      this._templateDohShared = value.templateDohShared;
      this._templateDynamicService = value.templateDynamicService;
      this._templateDynamicServiceShared = value.templateDynamicServiceShared;
      this._templateExternalService = value.templateExternalService;
      this._templateExternalServiceShared = value.templateExternalServiceShared;
      this._templateFix = value.templateFix;
      this._templateFixShared = value.templateFixShared;
      this._templateFtp = value.templateFtp;
      this._templateHttp = value.templateHttp;
      this._templateHttpPolicy = value.templateHttpPolicy;
      this._templateHttpPolicyShared = value.templateHttpPolicyShared;
      this._templateHttpShared = value.templateHttpShared;
      this._templateImapPop3 = value.templateImapPop3;
      this._templateImapPop3Shared = value.templateImapPop3Shared;
      this._templateMqtt = value.templateMqtt;
      this._templatePersistCookie = value.templatePersistCookie;
      this._templatePersistCookieShared = value.templatePersistCookieShared;
      this._templatePersistDestinationIp = value.templatePersistDestinationIp;
      this._templatePersistDestinationIpShared = value.templatePersistDestinationIpShared;
      this._templatePersistSourceIp = value.templatePersistSourceIp;
      this._templatePersistSourceIpShared = value.templatePersistSourceIpShared;
      this._templatePersistSslSid = value.templatePersistSslSid;
      this._templatePersistSslSidShared = value.templatePersistSslSidShared;
      this._templatePolicy = value.templatePolicy;
      this._templatePolicyShared = value.templatePolicyShared;
      this._templateQuic = value.templateQuic;
      this._templateQuicClient = value.templateQuicClient;
      this._templateQuicServer = value.templateQuicServer;
      this._templateQuicShared = value.templateQuicShared;
      this._templateRamCache = value.templateRamCache;
      this._templateReqmodIcap = value.templateReqmodIcap;
      this._templateRespmodIcap = value.templateRespmodIcap;
      this._templateScaleout = value.templateScaleout;
      this._templateServerSsh = value.templateServerSsh;
      this._templateServerSsl = value.templateServerSsl;
      this._templateServerSslShared = value.templateServerSslShared;
      this._templateSip = value.templateSip;
      this._templateSipShared = value.templateSipShared;
      this._templateSmpp = value.templateSmpp;
      this._templateSmppShared = value.templateSmppShared;
      this._templateSmtp = value.templateSmtp;
      this._templateSmtpShared = value.templateSmtpShared;
      this._templateSsli = value.templateSsli;
      this._templateTcp = value.templateTcp;
      this._templateTcpProxy = value.templateTcpProxy;
      this._templateTcpProxyClient = value.templateTcpProxyClient;
      this._templateTcpProxyServer = value.templateTcpProxyServer;
      this._templateTcpProxyShared = value.templateTcpProxyShared;
      this._templateTcpShared = value.templateTcpShared;
      this._templateUdp = value.templateUdp;
      this._templateUdpShared = value.templateUdpShared;
      this._templateVirtualPort = value.templateVirtualPort;
      this._templateVirtualPortShared = value.templateVirtualPortShared;
      this._trunkFwd = value.trunkFwd;
      this._trunkRev = value.trunkRev;
      this._useAlternatePort = value.useAlternatePort;
      this._useCgnv6 = value.useCgnv6;
      this._useDefaultIfNoServer = value.useDefaultIfNoServer;
      this._useRcvHopForResp = value.useRcvHopForResp;
      this._useRcvHopGroup = value.useRcvHopGroup;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._view = value.view;
      this._whenDown = value.whenDown;
      this._whenDownProtocol2 = value.whenDownProtocol2;
      this._whenServerSelectionFailed = value.whenServerSelectionFailed;
      this._aclList.internalValue = value.aclList;
      this._aflexScripts.internalValue = value.aflexScripts;
      this._authCfg.internalValue = value.authCfg;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // aflex_table_entry_syn_disable - computed: false, optional: true, required: false
  private _aflexTableEntrySynDisable?: number; 
  public get aflexTableEntrySynDisable() {
    return this.getNumberAttribute('aflex_table_entry_syn_disable');
  }
  public set aflexTableEntrySynDisable(value: number) {
    this._aflexTableEntrySynDisable = value;
  }
  public resetAflexTableEntrySynDisable() {
    this._aflexTableEntrySynDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntrySynDisableInput() {
    return this._aflexTableEntrySynDisable;
  }

  // aflex_table_entry_syn_enable - computed: false, optional: true, required: false
  private _aflexTableEntrySynEnable?: number; 
  public get aflexTableEntrySynEnable() {
    return this.getNumberAttribute('aflex_table_entry_syn_enable');
  }
  public set aflexTableEntrySynEnable(value: number) {
    this._aflexTableEntrySynEnable = value;
  }
  public resetAflexTableEntrySynEnable() {
    this._aflexTableEntrySynEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntrySynEnableInput() {
    return this._aflexTableEntrySynEnable;
  }

  // alt_protocol1 - computed: false, optional: true, required: false
  private _altProtocol1?: string; 
  public get altProtocol1() {
    return this.getStringAttribute('alt_protocol1');
  }
  public set altProtocol1(value: string) {
    this._altProtocol1 = value;
  }
  public resetAltProtocol1() {
    this._altProtocol1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altProtocol1Input() {
    return this._altProtocol1;
  }

  // alt_protocol2 - computed: false, optional: true, required: false
  private _altProtocol2?: string; 
  public get altProtocol2() {
    return this.getStringAttribute('alt_protocol2');
  }
  public set altProtocol2(value: string) {
    this._altProtocol2 = value;
  }
  public resetAltProtocol2() {
    this._altProtocol2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altProtocol2Input() {
    return this._altProtocol2;
  }

  // alternate_port - computed: false, optional: true, required: false
  private _alternatePort?: number; 
  public get alternatePort() {
    return this.getNumberAttribute('alternate_port');
  }
  public set alternatePort(value: number) {
    this._alternatePort = value;
  }
  public resetAlternatePort() {
    this._alternatePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternatePortInput() {
    return this._alternatePort;
  }

  // alternate_port_number - computed: false, optional: true, required: false
  private _alternatePortNumber?: number; 
  public get alternatePortNumber() {
    return this.getNumberAttribute('alternate_port_number');
  }
  public set alternatePortNumber(value: number) {
    this._alternatePortNumber = value;
  }
  public resetAlternatePortNumber() {
    this._alternatePortNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternatePortNumberInput() {
    return this._alternatePortNumber;
  }

  // attack_detection - computed: false, optional: true, required: false
  private _attackDetection?: number; 
  public get attackDetection() {
    return this.getNumberAttribute('attack_detection');
  }
  public set attackDetection(value: number) {
    this._attackDetection = value;
  }
  public resetAttackDetection() {
    this._attackDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackDetectionInput() {
    return this._attackDetection;
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: number; 
  public get auto() {
    return this.getNumberAttribute('auto');
  }
  public set auto(value: number) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // clientip_sticky_nat - computed: false, optional: true, required: false
  private _clientipStickyNat?: number; 
  public get clientipStickyNat() {
    return this.getNumberAttribute('clientip_sticky_nat');
  }
  public set clientipStickyNat(value: number) {
    this._clientipStickyNat = value;
  }
  public resetClientipStickyNat() {
    this._clientipStickyNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientipStickyNatInput() {
    return this._clientipStickyNat;
  }

  // conn_limit - computed: false, optional: true, required: false
  private _connLimit?: number; 
  public get connLimit() {
    return this.getNumberAttribute('conn_limit');
  }
  public set connLimit(value: number) {
    this._connLimit = value;
  }
  public resetConnLimit() {
    this._connLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitInput() {
    return this._connLimit;
  }

  // cpu_compute - computed: false, optional: true, required: false
  private _cpuCompute?: number; 
  public get cpuCompute() {
    return this.getNumberAttribute('cpu_compute');
  }
  public set cpuCompute(value: number) {
    this._cpuCompute = value;
  }
  public resetCpuCompute() {
    this._cpuCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuComputeInput() {
    return this._cpuCompute;
  }

  // def_selection_if_pref_failed - computed: false, optional: true, required: false
  private _defSelectionIfPrefFailed?: string; 
  public get defSelectionIfPrefFailed() {
    return this.getStringAttribute('def_selection_if_pref_failed');
  }
  public set defSelectionIfPrefFailed(value: string) {
    this._defSelectionIfPrefFailed = value;
  }
  public resetDefSelectionIfPrefFailed() {
    this._defSelectionIfPrefFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defSelectionIfPrefFailedInput() {
    return this._defSelectionIfPrefFailed;
  }

  // enable_playerid_check - computed: false, optional: true, required: false
  private _enablePlayeridCheck?: number; 
  public get enablePlayeridCheck() {
    return this.getNumberAttribute('enable_playerid_check');
  }
  public set enablePlayeridCheck(value: number) {
    this._enablePlayeridCheck = value;
  }
  public resetEnablePlayeridCheck() {
    this._enablePlayeridCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePlayeridCheckInput() {
    return this._enablePlayeridCheck;
  }

  // enable_scaleout - computed: false, optional: true, required: false
  private _enableScaleout?: number; 
  public get enableScaleout() {
    return this.getNumberAttribute('enable_scaleout');
  }
  public set enableScaleout(value: number) {
    this._enableScaleout = value;
  }
  public resetEnableScaleout() {
    this._enableScaleout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScaleoutInput() {
    return this._enableScaleout;
  }

  // eth_fwd - computed: false, optional: true, required: false
  private _ethFwd?: number; 
  public get ethFwd() {
    return this.getNumberAttribute('eth_fwd');
  }
  public set ethFwd(value: number) {
    this._ethFwd = value;
  }
  public resetEthFwd() {
    this._ethFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethFwdInput() {
    return this._ethFwd;
  }

  // eth_rev - computed: false, optional: true, required: false
  private _ethRev?: number; 
  public get ethRev() {
    return this.getNumberAttribute('eth_rev');
  }
  public set ethRev(value: number) {
    this._ethRev = value;
  }
  public resetEthRev() {
    this._ethRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethRevInput() {
    return this._ethRev;
  }

  // expand - computed: false, optional: true, required: false
  private _expand?: number; 
  public get expand() {
    return this.getNumberAttribute('expand');
  }
  public set expand(value: number) {
    this._expand = value;
  }
  public resetExpand() {
    this._expand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandInput() {
    return this._expand;
  }

  // extended_stats - computed: false, optional: true, required: false
  private _extendedStats?: number; 
  public get extendedStats() {
    return this.getNumberAttribute('extended_stats');
  }
  public set extendedStats(value: number) {
    this._extendedStats = value;
  }
  public resetExtendedStats() {
    this._extendedStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedStatsInput() {
    return this._extendedStats;
  }

  // fast_dns_cache - computed: false, optional: true, required: false
  private _fastDnsCache?: string; 
  public get fastDnsCache() {
    return this.getStringAttribute('fast_dns_cache');
  }
  public set fastDnsCache(value: string) {
    this._fastDnsCache = value;
  }
  public resetFastDnsCache() {
    this._fastDnsCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastDnsCacheInput() {
    return this._fastDnsCache;
  }

  // fast_path - computed: false, optional: true, required: false
  private _fastPath?: string; 
  public get fastPath() {
    return this.getStringAttribute('fast_path');
  }
  public set fastPath(value: string) {
    this._fastPath = value;
  }
  public resetFastPath() {
    this._fastPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastPathInput() {
    return this._fastPath;
  }

  // force_routing_mode - computed: false, optional: true, required: false
  private _forceRoutingMode?: number; 
  public get forceRoutingMode() {
    return this.getNumberAttribute('force_routing_mode');
  }
  public set forceRoutingMode(value: number) {
    this._forceRoutingMode = value;
  }
  public resetForceRoutingMode() {
    this._forceRoutingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRoutingModeInput() {
    return this._forceRoutingMode;
  }

  // gslb_enable - computed: false, optional: true, required: false
  private _gslbEnable?: number; 
  public get gslbEnable() {
    return this.getNumberAttribute('gslb_enable');
  }
  public set gslbEnable(value: number) {
    this._gslbEnable = value;
  }
  public resetGslbEnable() {
    this._gslbEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbEnableInput() {
    return this._gslbEnable;
  }

  // gtp_session_lb - computed: false, optional: true, required: false
  private _gtpSessionLb?: number; 
  public get gtpSessionLb() {
    return this.getNumberAttribute('gtp_session_lb');
  }
  public set gtpSessionLb(value: number) {
    this._gtpSessionLb = value;
  }
  public resetGtpSessionLb() {
    this._gtpSessionLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSessionLbInput() {
    return this._gtpSessionLb;
  }

  // ha_conn_mirror - computed: false, optional: true, required: false
  private _haConnMirror?: number; 
  public get haConnMirror() {
    return this.getNumberAttribute('ha_conn_mirror');
  }
  public set haConnMirror(value: number) {
    this._haConnMirror = value;
  }
  public resetHaConnMirror() {
    this._haConnMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haConnMirrorInput() {
    return this._haConnMirror;
  }

  // ignore_global - computed: false, optional: true, required: false
  private _ignoreGlobal?: number; 
  public get ignoreGlobal() {
    return this.getNumberAttribute('ignore_global');
  }
  public set ignoreGlobal(value: number) {
    this._ignoreGlobal = value;
  }
  public resetIgnoreGlobal() {
    this._ignoreGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreGlobalInput() {
    return this._ignoreGlobal;
  }

  // ip_map_list - computed: false, optional: true, required: false
  private _ipMapList?: string; 
  public get ipMapList() {
    return this.getStringAttribute('ip_map_list');
  }
  public set ipMapList(value: string) {
    this._ipMapList = value;
  }
  public resetIpMapList() {
    this._ipMapList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMapListInput() {
    return this._ipMapList;
  }

  // ip_only_lb - computed: false, optional: true, required: false
  private _ipOnlyLb?: number; 
  public get ipOnlyLb() {
    return this.getNumberAttribute('ip_only_lb');
  }
  public set ipOnlyLb(value: number) {
    this._ipOnlyLb = value;
  }
  public resetIpOnlyLb() {
    this._ipOnlyLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOnlyLbInput() {
    return this._ipOnlyLb;
  }

  // ip_smart_rr - computed: false, optional: true, required: false
  private _ipSmartRr?: number; 
  public get ipSmartRr() {
    return this.getNumberAttribute('ip_smart_rr');
  }
  public set ipSmartRr(value: number) {
    this._ipSmartRr = value;
  }
  public resetIpSmartRr() {
    this._ipSmartRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSmartRrInput() {
    return this._ipSmartRr;
  }

  // ipinip - computed: false, optional: true, required: false
  private _ipinip?: number; 
  public get ipinip() {
    return this.getNumberAttribute('ipinip');
  }
  public set ipinip(value: number) {
    this._ipinip = value;
  }
  public resetIpinip() {
    this._ipinip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipinipInput() {
    return this._ipinip;
  }

  // l7_hardware_assist - computed: false, optional: true, required: false
  private _l7HardwareAssist?: number; 
  public get l7HardwareAssist() {
    return this.getNumberAttribute('l7_hardware_assist');
  }
  public set l7HardwareAssist(value: number) {
    this._l7HardwareAssist = value;
  }
  public resetL7HardwareAssist() {
    this._l7HardwareAssist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7HardwareAssistInput() {
    return this._l7HardwareAssist;
  }

  // l7_service_chain - computed: false, optional: true, required: false
  private _l7ServiceChain?: number; 
  public get l7ServiceChain() {
    return this.getNumberAttribute('l7_service_chain');
  }
  public set l7ServiceChain(value: number) {
    this._l7ServiceChain = value;
  }
  public resetL7ServiceChain() {
    this._l7ServiceChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7ServiceChainInput() {
    return this._l7ServiceChain;
  }

  // memory_compute - computed: false, optional: true, required: false
  private _memoryCompute?: number; 
  public get memoryCompute() {
    return this.getNumberAttribute('memory_compute');
  }
  public set memoryCompute(value: number) {
    this._memoryCompute = value;
  }
  public resetMemoryCompute() {
    this._memoryCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryComputeInput() {
    return this._memoryCompute;
  }

  // message_switching - computed: false, optional: true, required: false
  private _messageSwitching?: number; 
  public get messageSwitching() {
    return this.getNumberAttribute('message_switching');
  }
  public set messageSwitching(value: number) {
    this._messageSwitching = value;
  }
  public resetMessageSwitching() {
    this._messageSwitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageSwitchingInput() {
    return this._messageSwitching;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ng_waf - computed: false, optional: true, required: false
  private _ngWaf?: number; 
  public get ngWaf() {
    return this.getNumberAttribute('ng_waf');
  }
  public set ngWaf(value: number) {
    this._ngWaf = value;
  }
  public resetNgWaf() {
    this._ngWaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngWafInput() {
    return this._ngWaf;
  }

  // no_auto_up_on_aflex - computed: false, optional: true, required: false
  private _noAutoUpOnAflex?: number; 
  public get noAutoUpOnAflex() {
    return this.getNumberAttribute('no_auto_up_on_aflex');
  }
  public set noAutoUpOnAflex(value: number) {
    this._noAutoUpOnAflex = value;
  }
  public resetNoAutoUpOnAflex() {
    this._noAutoUpOnAflex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAutoUpOnAflexInput() {
    return this._noAutoUpOnAflex;
  }

  // no_dest_nat - computed: false, optional: true, required: false
  private _noDestNat?: number; 
  public get noDestNat() {
    return this.getNumberAttribute('no_dest_nat');
  }
  public set noDestNat(value: number) {
    this._noDestNat = value;
  }
  public resetNoDestNat() {
    this._noDestNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDestNatInput() {
    return this._noDestNat;
  }

  // no_logging - computed: false, optional: true, required: false
  private _noLogging?: number; 
  public get noLogging() {
    return this.getNumberAttribute('no_logging');
  }
  public set noLogging(value: number) {
    this._noLogging = value;
  }
  public resetNoLogging() {
    this._noLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLoggingInput() {
    return this._noLogging;
  }

  // on_syn - computed: false, optional: true, required: false
  private _onSyn?: number; 
  public get onSyn() {
    return this.getNumberAttribute('on_syn');
  }
  public set onSyn(value: number) {
    this._onSyn = value;
  }
  public resetOnSyn() {
    this._onSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSynInput() {
    return this._onSyn;
  }

  // one_server_conn - computed: false, optional: true, required: false
  private _oneServerConn?: number; 
  public get oneServerConn() {
    return this.getNumberAttribute('one_server_conn');
  }
  public set oneServerConn(value: number) {
    this._oneServerConn = value;
  }
  public resetOneServerConn() {
    this._oneServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneServerConnInput() {
    return this._oneServerConn;
  }

  // optimization_level - computed: false, optional: true, required: false
  private _optimizationLevel?: string; 
  public get optimizationLevel() {
    return this.getStringAttribute('optimization_level');
  }
  public set optimizationLevel(value: string) {
    this._optimizationLevel = value;
  }
  public resetOptimizationLevel() {
    this._optimizationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationLevelInput() {
    return this._optimizationLevel;
  }

  // p_template_sip_shared - computed: false, optional: true, required: false
  private _pTemplateSipShared?: number; 
  public get pTemplateSipShared() {
    return this.getNumberAttribute('p_template_sip_shared');
  }
  public set pTemplateSipShared(value: number) {
    this._pTemplateSipShared = value;
  }
  public resetPTemplateSipShared() {
    this._pTemplateSipShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pTemplateSipSharedInput() {
    return this._pTemplateSipShared;
  }

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // persist_type - computed: false, optional: true, required: false
  private _persistType?: string; 
  public get persistType() {
    return this.getStringAttribute('persist_type');
  }
  public set persistType(value: string) {
    this._persistType = value;
  }
  public resetPersistType() {
    this._persistType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistTypeInput() {
    return this._persistType;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // pool_shared - computed: false, optional: true, required: false
  private _poolShared?: string; 
  public get poolShared() {
    return this.getStringAttribute('pool_shared');
  }
  public set poolShared(value: string) {
    this._poolShared = value;
  }
  public resetPoolShared() {
    this._poolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSharedInput() {
    return this._poolShared;
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // port_translation - computed: false, optional: true, required: false
  private _portTranslation?: number; 
  public get portTranslation() {
    return this.getNumberAttribute('port_translation');
  }
  public set portTranslation(value: number) {
    this._portTranslation = value;
  }
  public resetPortTranslation() {
    this._portTranslation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTranslationInput() {
    return this._portTranslation;
  }

  // precedence - computed: false, optional: true, required: false
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // proxy_layer - computed: false, optional: true, required: false
  private _proxyLayer?: string; 
  public get proxyLayer() {
    return this.getStringAttribute('proxy_layer');
  }
  public set proxyLayer(value: string) {
    this._proxyLayer = value;
  }
  public resetProxyLayer() {
    this._proxyLayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyLayerInput() {
    return this._proxyLayer;
  }

  // range - computed: false, optional: true, required: false
  private _range?: number; 
  public get range() {
    return this.getNumberAttribute('range');
  }
  public set range(value: number) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // redirect_to_https - computed: false, optional: true, required: false
  private _redirectToHttps?: number; 
  public get redirectToHttps() {
    return this.getNumberAttribute('redirect_to_https');
  }
  public set redirectToHttps(value: number) {
    this._redirectToHttps = value;
  }
  public resetRedirectToHttps() {
    this._redirectToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectToHttpsInput() {
    return this._redirectToHttps;
  }

  // reply_acme_challenge - computed: false, optional: true, required: false
  private _replyAcmeChallenge?: number; 
  public get replyAcmeChallenge() {
    return this.getNumberAttribute('reply_acme_challenge');
  }
  public set replyAcmeChallenge(value: number) {
    this._replyAcmeChallenge = value;
  }
  public resetReplyAcmeChallenge() {
    this._replyAcmeChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyAcmeChallengeInput() {
    return this._replyAcmeChallenge;
  }

  // req_fail - computed: false, optional: true, required: false
  private _reqFail?: number; 
  public get reqFail() {
    return this.getNumberAttribute('req_fail');
  }
  public set reqFail(value: number) {
    this._reqFail = value;
  }
  public resetReqFail() {
    this._reqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqFailInput() {
    return this._reqFail;
  }

  // reselection - computed: false, optional: true, required: false
  private _reselection?: string; 
  public get reselection() {
    return this.getStringAttribute('reselection');
  }
  public set reselection(value: string) {
    this._reselection = value;
  }
  public resetReselection() {
    this._reselection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reselectionInput() {
    return this._reselection;
  }

  // reset - computed: false, optional: true, required: false
  private _reset?: number; 
  public get reset() {
    return this.getNumberAttribute('reset');
  }
  public set reset(value: number) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
  }

  // reset_on_server_selection_fail - computed: false, optional: true, required: false
  private _resetOnServerSelectionFail?: number; 
  public get resetOnServerSelectionFail() {
    return this.getNumberAttribute('reset_on_server_selection_fail');
  }
  public set resetOnServerSelectionFail(value: number) {
    this._resetOnServerSelectionFail = value;
  }
  public resetResetOnServerSelectionFail() {
    this._resetOnServerSelectionFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetOnServerSelectionFailInput() {
    return this._resetOnServerSelectionFail;
  }

  // resolve_web_cat_list - computed: false, optional: true, required: false
  private _resolveWebCatList?: string; 
  public get resolveWebCatList() {
    return this.getStringAttribute('resolve_web_cat_list');
  }
  public set resolveWebCatList(value: string) {
    this._resolveWebCatList = value;
  }
  public resetResolveWebCatList() {
    this._resolveWebCatList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveWebCatListInput() {
    return this._resolveWebCatList;
  }

  // rtp_sip_call_id_match - computed: false, optional: true, required: false
  private _rtpSipCallIdMatch?: number; 
  public get rtpSipCallIdMatch() {
    return this.getNumberAttribute('rtp_sip_call_id_match');
  }
  public set rtpSipCallIdMatch(value: number) {
    this._rtpSipCallIdMatch = value;
  }
  public resetRtpSipCallIdMatch() {
    this._rtpSipCallIdMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpSipCallIdMatchInput() {
    return this._rtpSipCallIdMatch;
  }

  // secs - computed: false, optional: true, required: false
  private _secs?: number; 
  public get secs() {
    return this.getNumberAttribute('secs');
  }
  public set secs(value: number) {
    this._secs = value;
  }
  public resetSecs() {
    this._secs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // serv_sel_fail - computed: false, optional: true, required: false
  private _servSelFail?: number; 
  public get servSelFail() {
    return this.getNumberAttribute('serv_sel_fail');
  }
  public set servSelFail(value: number) {
    this._servSelFail = value;
  }
  public resetServSelFail() {
    this._servSelFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servSelFailInput() {
    return this._servSelFail;
  }

  // server_group - computed: false, optional: true, required: false
  private _serverGroup?: string; 
  public get serverGroup() {
    return this.getStringAttribute('server_group');
  }
  public set serverGroup(value: string) {
    this._serverGroup = value;
  }
  public resetServerGroup() {
    this._serverGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupInput() {
    return this._serverGroup;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // shared_partition_cache_template - computed: false, optional: true, required: false
  private _sharedPartitionCacheTemplate?: number; 
  public get sharedPartitionCacheTemplate() {
    return this.getNumberAttribute('shared_partition_cache_template');
  }
  public set sharedPartitionCacheTemplate(value: number) {
    this._sharedPartitionCacheTemplate = value;
  }
  public resetSharedPartitionCacheTemplate() {
    this._sharedPartitionCacheTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionCacheTemplateInput() {
    return this._sharedPartitionCacheTemplate;
  }

  // shared_partition_client_ssl_template - computed: false, optional: true, required: false
  private _sharedPartitionClientSslTemplate?: number; 
  public get sharedPartitionClientSslTemplate() {
    return this.getNumberAttribute('shared_partition_client_ssl_template');
  }
  public set sharedPartitionClientSslTemplate(value: number) {
    this._sharedPartitionClientSslTemplate = value;
  }
  public resetSharedPartitionClientSslTemplate() {
    this._sharedPartitionClientSslTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionClientSslTemplateInput() {
    return this._sharedPartitionClientSslTemplate;
  }

  // shared_partition_connection_reuse_template - computed: false, optional: true, required: false
  private _sharedPartitionConnectionReuseTemplate?: number; 
  public get sharedPartitionConnectionReuseTemplate() {
    return this.getNumberAttribute('shared_partition_connection_reuse_template');
  }
  public set sharedPartitionConnectionReuseTemplate(value: number) {
    this._sharedPartitionConnectionReuseTemplate = value;
  }
  public resetSharedPartitionConnectionReuseTemplate() {
    this._sharedPartitionConnectionReuseTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionConnectionReuseTemplateInput() {
    return this._sharedPartitionConnectionReuseTemplate;
  }

  // shared_partition_dblb_template - computed: false, optional: true, required: false
  private _sharedPartitionDblbTemplate?: number; 
  public get sharedPartitionDblbTemplate() {
    return this.getNumberAttribute('shared_partition_dblb_template');
  }
  public set sharedPartitionDblbTemplate(value: number) {
    this._sharedPartitionDblbTemplate = value;
  }
  public resetSharedPartitionDblbTemplate() {
    this._sharedPartitionDblbTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionDblbTemplateInput() {
    return this._sharedPartitionDblbTemplate;
  }

  // shared_partition_diameter_template - computed: false, optional: true, required: false
  private _sharedPartitionDiameterTemplate?: number; 
  public get sharedPartitionDiameterTemplate() {
    return this.getNumberAttribute('shared_partition_diameter_template');
  }
  public set sharedPartitionDiameterTemplate(value: number) {
    this._sharedPartitionDiameterTemplate = value;
  }
  public resetSharedPartitionDiameterTemplate() {
    this._sharedPartitionDiameterTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionDiameterTemplateInput() {
    return this._sharedPartitionDiameterTemplate;
  }

  // shared_partition_dns_template - computed: false, optional: true, required: false
  private _sharedPartitionDnsTemplate?: number; 
  public get sharedPartitionDnsTemplate() {
    return this.getNumberAttribute('shared_partition_dns_template');
  }
  public set sharedPartitionDnsTemplate(value: number) {
    this._sharedPartitionDnsTemplate = value;
  }
  public resetSharedPartitionDnsTemplate() {
    this._sharedPartitionDnsTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionDnsTemplateInput() {
    return this._sharedPartitionDnsTemplate;
  }

  // shared_partition_doh_template - computed: false, optional: true, required: false
  private _sharedPartitionDohTemplate?: number; 
  public get sharedPartitionDohTemplate() {
    return this.getNumberAttribute('shared_partition_doh_template');
  }
  public set sharedPartitionDohTemplate(value: number) {
    this._sharedPartitionDohTemplate = value;
  }
  public resetSharedPartitionDohTemplate() {
    this._sharedPartitionDohTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionDohTemplateInput() {
    return this._sharedPartitionDohTemplate;
  }

  // shared_partition_dynamic_service_template - computed: false, optional: true, required: false
  private _sharedPartitionDynamicServiceTemplate?: number; 
  public get sharedPartitionDynamicServiceTemplate() {
    return this.getNumberAttribute('shared_partition_dynamic_service_template');
  }
  public set sharedPartitionDynamicServiceTemplate(value: number) {
    this._sharedPartitionDynamicServiceTemplate = value;
  }
  public resetSharedPartitionDynamicServiceTemplate() {
    this._sharedPartitionDynamicServiceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionDynamicServiceTemplateInput() {
    return this._sharedPartitionDynamicServiceTemplate;
  }

  // shared_partition_external_service_template - computed: false, optional: true, required: false
  private _sharedPartitionExternalServiceTemplate?: number; 
  public get sharedPartitionExternalServiceTemplate() {
    return this.getNumberAttribute('shared_partition_external_service_template');
  }
  public set sharedPartitionExternalServiceTemplate(value: number) {
    this._sharedPartitionExternalServiceTemplate = value;
  }
  public resetSharedPartitionExternalServiceTemplate() {
    this._sharedPartitionExternalServiceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionExternalServiceTemplateInput() {
    return this._sharedPartitionExternalServiceTemplate;
  }

  // shared_partition_fix_template - computed: false, optional: true, required: false
  private _sharedPartitionFixTemplate?: number; 
  public get sharedPartitionFixTemplate() {
    return this.getNumberAttribute('shared_partition_fix_template');
  }
  public set sharedPartitionFixTemplate(value: number) {
    this._sharedPartitionFixTemplate = value;
  }
  public resetSharedPartitionFixTemplate() {
    this._sharedPartitionFixTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionFixTemplateInput() {
    return this._sharedPartitionFixTemplate;
  }

  // shared_partition_http_policy_template - computed: false, optional: true, required: false
  private _sharedPartitionHttpPolicyTemplate?: number; 
  public get sharedPartitionHttpPolicyTemplate() {
    return this.getNumberAttribute('shared_partition_http_policy_template');
  }
  public set sharedPartitionHttpPolicyTemplate(value: number) {
    this._sharedPartitionHttpPolicyTemplate = value;
  }
  public resetSharedPartitionHttpPolicyTemplate() {
    this._sharedPartitionHttpPolicyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionHttpPolicyTemplateInput() {
    return this._sharedPartitionHttpPolicyTemplate;
  }

  // shared_partition_http_template - computed: false, optional: true, required: false
  private _sharedPartitionHttpTemplate?: number; 
  public get sharedPartitionHttpTemplate() {
    return this.getNumberAttribute('shared_partition_http_template');
  }
  public set sharedPartitionHttpTemplate(value: number) {
    this._sharedPartitionHttpTemplate = value;
  }
  public resetSharedPartitionHttpTemplate() {
    this._sharedPartitionHttpTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionHttpTemplateInput() {
    return this._sharedPartitionHttpTemplate;
  }

  // shared_partition_imap_pop3_template - computed: false, optional: true, required: false
  private _sharedPartitionImapPop3Template?: number; 
  public get sharedPartitionImapPop3Template() {
    return this.getNumberAttribute('shared_partition_imap_pop3_template');
  }
  public set sharedPartitionImapPop3Template(value: number) {
    this._sharedPartitionImapPop3Template = value;
  }
  public resetSharedPartitionImapPop3Template() {
    this._sharedPartitionImapPop3Template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionImapPop3TemplateInput() {
    return this._sharedPartitionImapPop3Template;
  }

  // shared_partition_persist_cookie_template - computed: false, optional: true, required: false
  private _sharedPartitionPersistCookieTemplate?: number; 
  public get sharedPartitionPersistCookieTemplate() {
    return this.getNumberAttribute('shared_partition_persist_cookie_template');
  }
  public set sharedPartitionPersistCookieTemplate(value: number) {
    this._sharedPartitionPersistCookieTemplate = value;
  }
  public resetSharedPartitionPersistCookieTemplate() {
    this._sharedPartitionPersistCookieTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPersistCookieTemplateInput() {
    return this._sharedPartitionPersistCookieTemplate;
  }

  // shared_partition_persist_destination_ip_template - computed: false, optional: true, required: false
  private _sharedPartitionPersistDestinationIpTemplate?: number; 
  public get sharedPartitionPersistDestinationIpTemplate() {
    return this.getNumberAttribute('shared_partition_persist_destination_ip_template');
  }
  public set sharedPartitionPersistDestinationIpTemplate(value: number) {
    this._sharedPartitionPersistDestinationIpTemplate = value;
  }
  public resetSharedPartitionPersistDestinationIpTemplate() {
    this._sharedPartitionPersistDestinationIpTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPersistDestinationIpTemplateInput() {
    return this._sharedPartitionPersistDestinationIpTemplate;
  }

  // shared_partition_persist_source_ip_template - computed: false, optional: true, required: false
  private _sharedPartitionPersistSourceIpTemplate?: number; 
  public get sharedPartitionPersistSourceIpTemplate() {
    return this.getNumberAttribute('shared_partition_persist_source_ip_template');
  }
  public set sharedPartitionPersistSourceIpTemplate(value: number) {
    this._sharedPartitionPersistSourceIpTemplate = value;
  }
  public resetSharedPartitionPersistSourceIpTemplate() {
    this._sharedPartitionPersistSourceIpTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPersistSourceIpTemplateInput() {
    return this._sharedPartitionPersistSourceIpTemplate;
  }

  // shared_partition_persist_ssl_sid_template - computed: false, optional: true, required: false
  private _sharedPartitionPersistSslSidTemplate?: number; 
  public get sharedPartitionPersistSslSidTemplate() {
    return this.getNumberAttribute('shared_partition_persist_ssl_sid_template');
  }
  public set sharedPartitionPersistSslSidTemplate(value: number) {
    this._sharedPartitionPersistSslSidTemplate = value;
  }
  public resetSharedPartitionPersistSslSidTemplate() {
    this._sharedPartitionPersistSslSidTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPersistSslSidTemplateInput() {
    return this._sharedPartitionPersistSslSidTemplate;
  }

  // shared_partition_policy_template - computed: false, optional: true, required: false
  private _sharedPartitionPolicyTemplate?: number; 
  public get sharedPartitionPolicyTemplate() {
    return this.getNumberAttribute('shared_partition_policy_template');
  }
  public set sharedPartitionPolicyTemplate(value: number) {
    this._sharedPartitionPolicyTemplate = value;
  }
  public resetSharedPartitionPolicyTemplate() {
    this._sharedPartitionPolicyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPolicyTemplateInput() {
    return this._sharedPartitionPolicyTemplate;
  }

  // shared_partition_pool - computed: false, optional: true, required: false
  private _sharedPartitionPool?: number; 
  public get sharedPartitionPool() {
    return this.getNumberAttribute('shared_partition_pool');
  }
  public set sharedPartitionPool(value: number) {
    this._sharedPartitionPool = value;
  }
  public resetSharedPartitionPool() {
    this._sharedPartitionPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPoolInput() {
    return this._sharedPartitionPool;
  }

  // shared_partition_quic_template - computed: false, optional: true, required: false
  private _sharedPartitionQuicTemplate?: number; 
  public get sharedPartitionQuicTemplate() {
    return this.getNumberAttribute('shared_partition_quic_template');
  }
  public set sharedPartitionQuicTemplate(value: number) {
    this._sharedPartitionQuicTemplate = value;
  }
  public resetSharedPartitionQuicTemplate() {
    this._sharedPartitionQuicTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionQuicTemplateInput() {
    return this._sharedPartitionQuicTemplate;
  }

  // shared_partition_server_ssl_template - computed: false, optional: true, required: false
  private _sharedPartitionServerSslTemplate?: number; 
  public get sharedPartitionServerSslTemplate() {
    return this.getNumberAttribute('shared_partition_server_ssl_template');
  }
  public set sharedPartitionServerSslTemplate(value: number) {
    this._sharedPartitionServerSslTemplate = value;
  }
  public resetSharedPartitionServerSslTemplate() {
    this._sharedPartitionServerSslTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionServerSslTemplateInput() {
    return this._sharedPartitionServerSslTemplate;
  }

  // shared_partition_smpp_template - computed: false, optional: true, required: false
  private _sharedPartitionSmppTemplate?: number; 
  public get sharedPartitionSmppTemplate() {
    return this.getNumberAttribute('shared_partition_smpp_template');
  }
  public set sharedPartitionSmppTemplate(value: number) {
    this._sharedPartitionSmppTemplate = value;
  }
  public resetSharedPartitionSmppTemplate() {
    this._sharedPartitionSmppTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionSmppTemplateInput() {
    return this._sharedPartitionSmppTemplate;
  }

  // shared_partition_smtp_template - computed: false, optional: true, required: false
  private _sharedPartitionSmtpTemplate?: number; 
  public get sharedPartitionSmtpTemplate() {
    return this.getNumberAttribute('shared_partition_smtp_template');
  }
  public set sharedPartitionSmtpTemplate(value: number) {
    this._sharedPartitionSmtpTemplate = value;
  }
  public resetSharedPartitionSmtpTemplate() {
    this._sharedPartitionSmtpTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionSmtpTemplateInput() {
    return this._sharedPartitionSmtpTemplate;
  }

  // shared_partition_tcp - computed: false, optional: true, required: false
  private _sharedPartitionTcp?: number; 
  public get sharedPartitionTcp() {
    return this.getNumberAttribute('shared_partition_tcp');
  }
  public set sharedPartitionTcp(value: number) {
    this._sharedPartitionTcp = value;
  }
  public resetSharedPartitionTcp() {
    this._sharedPartitionTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionTcpInput() {
    return this._sharedPartitionTcp;
  }

  // shared_partition_tcp_proxy_template - computed: false, optional: true, required: false
  private _sharedPartitionTcpProxyTemplate?: number; 
  public get sharedPartitionTcpProxyTemplate() {
    return this.getNumberAttribute('shared_partition_tcp_proxy_template');
  }
  public set sharedPartitionTcpProxyTemplate(value: number) {
    this._sharedPartitionTcpProxyTemplate = value;
  }
  public resetSharedPartitionTcpProxyTemplate() {
    this._sharedPartitionTcpProxyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionTcpProxyTemplateInput() {
    return this._sharedPartitionTcpProxyTemplate;
  }

  // shared_partition_udp - computed: false, optional: true, required: false
  private _sharedPartitionUdp?: number; 
  public get sharedPartitionUdp() {
    return this.getNumberAttribute('shared_partition_udp');
  }
  public set sharedPartitionUdp(value: number) {
    this._sharedPartitionUdp = value;
  }
  public resetSharedPartitionUdp() {
    this._sharedPartitionUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionUdpInput() {
    return this._sharedPartitionUdp;
  }

  // shared_partition_virtual_port_template - computed: false, optional: true, required: false
  private _sharedPartitionVirtualPortTemplate?: number; 
  public get sharedPartitionVirtualPortTemplate() {
    return this.getNumberAttribute('shared_partition_virtual_port_template');
  }
  public set sharedPartitionVirtualPortTemplate(value: number) {
    this._sharedPartitionVirtualPortTemplate = value;
  }
  public resetSharedPartitionVirtualPortTemplate() {
    this._sharedPartitionVirtualPortTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionVirtualPortTemplateInput() {
    return this._sharedPartitionVirtualPortTemplate;
  }

  // showtech_print_extended_stats - computed: false, optional: true, required: false
  private _showtechPrintExtendedStats?: number; 
  public get showtechPrintExtendedStats() {
    return this.getNumberAttribute('showtech_print_extended_stats');
  }
  public set showtechPrintExtendedStats(value: number) {
    this._showtechPrintExtendedStats = value;
  }
  public resetShowtechPrintExtendedStats() {
    this._showtechPrintExtendedStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showtechPrintExtendedStatsInput() {
    return this._showtechPrintExtendedStats;
  }

  // skip_rev_hash - computed: false, optional: true, required: false
  private _skipRevHash?: number; 
  public get skipRevHash() {
    return this.getNumberAttribute('skip_rev_hash');
  }
  public set skipRevHash(value: number) {
    this._skipRevHash = value;
  }
  public resetSkipRevHash() {
    this._skipRevHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRevHashInput() {
    return this._skipRevHash;
  }

  // snat_on_vip - computed: false, optional: true, required: false
  private _snatOnVip?: number; 
  public get snatOnVip() {
    return this.getNumberAttribute('snat_on_vip');
  }
  public set snatOnVip(value: number) {
    this._snatOnVip = value;
  }
  public resetSnatOnVip() {
    this._snatOnVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatOnVipInput() {
    return this._snatOnVip;
  }

  // stats_data_action - computed: false, optional: true, required: false
  private _statsDataAction?: string; 
  public get statsDataAction() {
    return this.getStringAttribute('stats_data_action');
  }
  public set statsDataAction(value: string) {
    this._statsDataAction = value;
  }
  public resetStatsDataAction() {
    this._statsDataAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsDataActionInput() {
    return this._statsDataAction;
  }

  // substitute_source_mac - computed: false, optional: true, required: false
  private _substituteSourceMac?: number; 
  public get substituteSourceMac() {
    return this.getNumberAttribute('substitute_source_mac');
  }
  public set substituteSourceMac(value: number) {
    this._substituteSourceMac = value;
  }
  public resetSubstituteSourceMac() {
    this._substituteSourceMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteSourceMacInput() {
    return this._substituteSourceMac;
  }

  // support_http2 - computed: false, optional: true, required: false
  private _supportHttp2?: number; 
  public get supportHttp2() {
    return this.getNumberAttribute('support_http2');
  }
  public set supportHttp2(value: number) {
    this._supportHttp2 = value;
  }
  public resetSupportHttp2() {
    this._supportHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportHttp2Input() {
    return this._supportHttp2;
  }

  // syn_cookie - computed: false, optional: true, required: false
  private _synCookie?: number; 
  public get synCookie() {
    return this.getNumberAttribute('syn_cookie');
  }
  public set synCookie(value: number) {
    this._synCookie = value;
  }
  public resetSynCookie() {
    this._synCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieInput() {
    return this._synCookie;
  }

  // template_cache - computed: false, optional: true, required: false
  private _templateCache?: string; 
  public get templateCache() {
    return this.getStringAttribute('template_cache');
  }
  public set templateCache(value: string) {
    this._templateCache = value;
  }
  public resetTemplateCache() {
    this._templateCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateCacheInput() {
    return this._templateCache;
  }

  // template_cache_shared - computed: false, optional: true, required: false
  private _templateCacheShared?: string; 
  public get templateCacheShared() {
    return this.getStringAttribute('template_cache_shared');
  }
  public set templateCacheShared(value: string) {
    this._templateCacheShared = value;
  }
  public resetTemplateCacheShared() {
    this._templateCacheShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateCacheSharedInput() {
    return this._templateCacheShared;
  }

  // template_client_ssh - computed: false, optional: true, required: false
  private _templateClientSsh?: string; 
  public get templateClientSsh() {
    return this.getStringAttribute('template_client_ssh');
  }
  public set templateClientSsh(value: string) {
    this._templateClientSsh = value;
  }
  public resetTemplateClientSsh() {
    this._templateClientSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateClientSshInput() {
    return this._templateClientSsh;
  }

  // template_client_ssl - computed: false, optional: true, required: false
  private _templateClientSsl?: string; 
  public get templateClientSsl() {
    return this.getStringAttribute('template_client_ssl');
  }
  public set templateClientSsl(value: string) {
    this._templateClientSsl = value;
  }
  public resetTemplateClientSsl() {
    this._templateClientSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateClientSslInput() {
    return this._templateClientSsl;
  }

  // template_client_ssl_shared - computed: false, optional: true, required: false
  private _templateClientSslShared?: string; 
  public get templateClientSslShared() {
    return this.getStringAttribute('template_client_ssl_shared');
  }
  public set templateClientSslShared(value: string) {
    this._templateClientSslShared = value;
  }
  public resetTemplateClientSslShared() {
    this._templateClientSslShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateClientSslSharedInput() {
    return this._templateClientSslShared;
  }

  // template_connection_reuse - computed: false, optional: true, required: false
  private _templateConnectionReuse?: string; 
  public get templateConnectionReuse() {
    return this.getStringAttribute('template_connection_reuse');
  }
  public set templateConnectionReuse(value: string) {
    this._templateConnectionReuse = value;
  }
  public resetTemplateConnectionReuse() {
    this._templateConnectionReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateConnectionReuseInput() {
    return this._templateConnectionReuse;
  }

  // template_connection_reuse_shared - computed: false, optional: true, required: false
  private _templateConnectionReuseShared?: string; 
  public get templateConnectionReuseShared() {
    return this.getStringAttribute('template_connection_reuse_shared');
  }
  public set templateConnectionReuseShared(value: string) {
    this._templateConnectionReuseShared = value;
  }
  public resetTemplateConnectionReuseShared() {
    this._templateConnectionReuseShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateConnectionReuseSharedInput() {
    return this._templateConnectionReuseShared;
  }

  // template_dblb - computed: false, optional: true, required: false
  private _templateDblb?: string; 
  public get templateDblb() {
    return this.getStringAttribute('template_dblb');
  }
  public set templateDblb(value: string) {
    this._templateDblb = value;
  }
  public resetTemplateDblb() {
    this._templateDblb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDblbInput() {
    return this._templateDblb;
  }

  // template_dblb_shared - computed: false, optional: true, required: false
  private _templateDblbShared?: string; 
  public get templateDblbShared() {
    return this.getStringAttribute('template_dblb_shared');
  }
  public set templateDblbShared(value: string) {
    this._templateDblbShared = value;
  }
  public resetTemplateDblbShared() {
    this._templateDblbShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDblbSharedInput() {
    return this._templateDblbShared;
  }

  // template_diameter - computed: false, optional: true, required: false
  private _templateDiameter?: string; 
  public get templateDiameter() {
    return this.getStringAttribute('template_diameter');
  }
  public set templateDiameter(value: string) {
    this._templateDiameter = value;
  }
  public resetTemplateDiameter() {
    this._templateDiameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDiameterInput() {
    return this._templateDiameter;
  }

  // template_diameter_shared - computed: false, optional: true, required: false
  private _templateDiameterShared?: string; 
  public get templateDiameterShared() {
    return this.getStringAttribute('template_diameter_shared');
  }
  public set templateDiameterShared(value: string) {
    this._templateDiameterShared = value;
  }
  public resetTemplateDiameterShared() {
    this._templateDiameterShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDiameterSharedInput() {
    return this._templateDiameterShared;
  }

  // template_dns - computed: false, optional: true, required: false
  private _templateDns?: string; 
  public get templateDns() {
    return this.getStringAttribute('template_dns');
  }
  public set templateDns(value: string) {
    this._templateDns = value;
  }
  public resetTemplateDns() {
    this._templateDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDnsInput() {
    return this._templateDns;
  }

  // template_dns_shared - computed: false, optional: true, required: false
  private _templateDnsShared?: string; 
  public get templateDnsShared() {
    return this.getStringAttribute('template_dns_shared');
  }
  public set templateDnsShared(value: string) {
    this._templateDnsShared = value;
  }
  public resetTemplateDnsShared() {
    this._templateDnsShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDnsSharedInput() {
    return this._templateDnsShared;
  }

  // template_doh - computed: false, optional: true, required: false
  private _templateDoh?: string; 
  public get templateDoh() {
    return this.getStringAttribute('template_doh');
  }
  public set templateDoh(value: string) {
    this._templateDoh = value;
  }
  public resetTemplateDoh() {
    this._templateDoh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDohInput() {
    return this._templateDoh;
  }

  // template_doh_shared - computed: false, optional: true, required: false
  private _templateDohShared?: string; 
  public get templateDohShared() {
    return this.getStringAttribute('template_doh_shared');
  }
  public set templateDohShared(value: string) {
    this._templateDohShared = value;
  }
  public resetTemplateDohShared() {
    this._templateDohShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDohSharedInput() {
    return this._templateDohShared;
  }

  // template_dynamic_service - computed: false, optional: true, required: false
  private _templateDynamicService?: string; 
  public get templateDynamicService() {
    return this.getStringAttribute('template_dynamic_service');
  }
  public set templateDynamicService(value: string) {
    this._templateDynamicService = value;
  }
  public resetTemplateDynamicService() {
    this._templateDynamicService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDynamicServiceInput() {
    return this._templateDynamicService;
  }

  // template_dynamic_service_shared - computed: false, optional: true, required: false
  private _templateDynamicServiceShared?: string; 
  public get templateDynamicServiceShared() {
    return this.getStringAttribute('template_dynamic_service_shared');
  }
  public set templateDynamicServiceShared(value: string) {
    this._templateDynamicServiceShared = value;
  }
  public resetTemplateDynamicServiceShared() {
    this._templateDynamicServiceShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDynamicServiceSharedInput() {
    return this._templateDynamicServiceShared;
  }

  // template_external_service - computed: false, optional: true, required: false
  private _templateExternalService?: string; 
  public get templateExternalService() {
    return this.getStringAttribute('template_external_service');
  }
  public set templateExternalService(value: string) {
    this._templateExternalService = value;
  }
  public resetTemplateExternalService() {
    this._templateExternalService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateExternalServiceInput() {
    return this._templateExternalService;
  }

  // template_external_service_shared - computed: false, optional: true, required: false
  private _templateExternalServiceShared?: string; 
  public get templateExternalServiceShared() {
    return this.getStringAttribute('template_external_service_shared');
  }
  public set templateExternalServiceShared(value: string) {
    this._templateExternalServiceShared = value;
  }
  public resetTemplateExternalServiceShared() {
    this._templateExternalServiceShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateExternalServiceSharedInput() {
    return this._templateExternalServiceShared;
  }

  // template_fix - computed: false, optional: true, required: false
  private _templateFix?: string; 
  public get templateFix() {
    return this.getStringAttribute('template_fix');
  }
  public set templateFix(value: string) {
    this._templateFix = value;
  }
  public resetTemplateFix() {
    this._templateFix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateFixInput() {
    return this._templateFix;
  }

  // template_fix_shared - computed: false, optional: true, required: false
  private _templateFixShared?: string; 
  public get templateFixShared() {
    return this.getStringAttribute('template_fix_shared');
  }
  public set templateFixShared(value: string) {
    this._templateFixShared = value;
  }
  public resetTemplateFixShared() {
    this._templateFixShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateFixSharedInput() {
    return this._templateFixShared;
  }

  // template_ftp - computed: false, optional: true, required: false
  private _templateFtp?: string; 
  public get templateFtp() {
    return this.getStringAttribute('template_ftp');
  }
  public set templateFtp(value: string) {
    this._templateFtp = value;
  }
  public resetTemplateFtp() {
    this._templateFtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateFtpInput() {
    return this._templateFtp;
  }

  // template_http - computed: false, optional: true, required: false
  private _templateHttp?: string; 
  public get templateHttp() {
    return this.getStringAttribute('template_http');
  }
  public set templateHttp(value: string) {
    this._templateHttp = value;
  }
  public resetTemplateHttp() {
    this._templateHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateHttpInput() {
    return this._templateHttp;
  }

  // template_http_policy - computed: false, optional: true, required: false
  private _templateHttpPolicy?: string; 
  public get templateHttpPolicy() {
    return this.getStringAttribute('template_http_policy');
  }
  public set templateHttpPolicy(value: string) {
    this._templateHttpPolicy = value;
  }
  public resetTemplateHttpPolicy() {
    this._templateHttpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateHttpPolicyInput() {
    return this._templateHttpPolicy;
  }

  // template_http_policy_shared - computed: false, optional: true, required: false
  private _templateHttpPolicyShared?: string; 
  public get templateHttpPolicyShared() {
    return this.getStringAttribute('template_http_policy_shared');
  }
  public set templateHttpPolicyShared(value: string) {
    this._templateHttpPolicyShared = value;
  }
  public resetTemplateHttpPolicyShared() {
    this._templateHttpPolicyShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateHttpPolicySharedInput() {
    return this._templateHttpPolicyShared;
  }

  // template_http_shared - computed: false, optional: true, required: false
  private _templateHttpShared?: string; 
  public get templateHttpShared() {
    return this.getStringAttribute('template_http_shared');
  }
  public set templateHttpShared(value: string) {
    this._templateHttpShared = value;
  }
  public resetTemplateHttpShared() {
    this._templateHttpShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateHttpSharedInput() {
    return this._templateHttpShared;
  }

  // template_imap_pop3 - computed: false, optional: true, required: false
  private _templateImapPop3?: string; 
  public get templateImapPop3() {
    return this.getStringAttribute('template_imap_pop3');
  }
  public set templateImapPop3(value: string) {
    this._templateImapPop3 = value;
  }
  public resetTemplateImapPop3() {
    this._templateImapPop3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateImapPop3Input() {
    return this._templateImapPop3;
  }

  // template_imap_pop3_shared - computed: false, optional: true, required: false
  private _templateImapPop3Shared?: string; 
  public get templateImapPop3Shared() {
    return this.getStringAttribute('template_imap_pop3_shared');
  }
  public set templateImapPop3Shared(value: string) {
    this._templateImapPop3Shared = value;
  }
  public resetTemplateImapPop3Shared() {
    this._templateImapPop3Shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateImapPop3SharedInput() {
    return this._templateImapPop3Shared;
  }

  // template_mqtt - computed: false, optional: true, required: false
  private _templateMqtt?: string; 
  public get templateMqtt() {
    return this.getStringAttribute('template_mqtt');
  }
  public set templateMqtt(value: string) {
    this._templateMqtt = value;
  }
  public resetTemplateMqtt() {
    this._templateMqtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateMqttInput() {
    return this._templateMqtt;
  }

  // template_persist_cookie - computed: false, optional: true, required: false
  private _templatePersistCookie?: string; 
  public get templatePersistCookie() {
    return this.getStringAttribute('template_persist_cookie');
  }
  public set templatePersistCookie(value: string) {
    this._templatePersistCookie = value;
  }
  public resetTemplatePersistCookie() {
    this._templatePersistCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistCookieInput() {
    return this._templatePersistCookie;
  }

  // template_persist_cookie_shared - computed: false, optional: true, required: false
  private _templatePersistCookieShared?: string; 
  public get templatePersistCookieShared() {
    return this.getStringAttribute('template_persist_cookie_shared');
  }
  public set templatePersistCookieShared(value: string) {
    this._templatePersistCookieShared = value;
  }
  public resetTemplatePersistCookieShared() {
    this._templatePersistCookieShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistCookieSharedInput() {
    return this._templatePersistCookieShared;
  }

  // template_persist_destination_ip - computed: false, optional: true, required: false
  private _templatePersistDestinationIp?: string; 
  public get templatePersistDestinationIp() {
    return this.getStringAttribute('template_persist_destination_ip');
  }
  public set templatePersistDestinationIp(value: string) {
    this._templatePersistDestinationIp = value;
  }
  public resetTemplatePersistDestinationIp() {
    this._templatePersistDestinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistDestinationIpInput() {
    return this._templatePersistDestinationIp;
  }

  // template_persist_destination_ip_shared - computed: false, optional: true, required: false
  private _templatePersistDestinationIpShared?: string; 
  public get templatePersistDestinationIpShared() {
    return this.getStringAttribute('template_persist_destination_ip_shared');
  }
  public set templatePersistDestinationIpShared(value: string) {
    this._templatePersistDestinationIpShared = value;
  }
  public resetTemplatePersistDestinationIpShared() {
    this._templatePersistDestinationIpShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistDestinationIpSharedInput() {
    return this._templatePersistDestinationIpShared;
  }

  // template_persist_source_ip - computed: false, optional: true, required: false
  private _templatePersistSourceIp?: string; 
  public get templatePersistSourceIp() {
    return this.getStringAttribute('template_persist_source_ip');
  }
  public set templatePersistSourceIp(value: string) {
    this._templatePersistSourceIp = value;
  }
  public resetTemplatePersistSourceIp() {
    this._templatePersistSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistSourceIpInput() {
    return this._templatePersistSourceIp;
  }

  // template_persist_source_ip_shared - computed: false, optional: true, required: false
  private _templatePersistSourceIpShared?: string; 
  public get templatePersistSourceIpShared() {
    return this.getStringAttribute('template_persist_source_ip_shared');
  }
  public set templatePersistSourceIpShared(value: string) {
    this._templatePersistSourceIpShared = value;
  }
  public resetTemplatePersistSourceIpShared() {
    this._templatePersistSourceIpShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistSourceIpSharedInput() {
    return this._templatePersistSourceIpShared;
  }

  // template_persist_ssl_sid - computed: false, optional: true, required: false
  private _templatePersistSslSid?: string; 
  public get templatePersistSslSid() {
    return this.getStringAttribute('template_persist_ssl_sid');
  }
  public set templatePersistSslSid(value: string) {
    this._templatePersistSslSid = value;
  }
  public resetTemplatePersistSslSid() {
    this._templatePersistSslSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistSslSidInput() {
    return this._templatePersistSslSid;
  }

  // template_persist_ssl_sid_shared - computed: false, optional: true, required: false
  private _templatePersistSslSidShared?: string; 
  public get templatePersistSslSidShared() {
    return this.getStringAttribute('template_persist_ssl_sid_shared');
  }
  public set templatePersistSslSidShared(value: string) {
    this._templatePersistSslSidShared = value;
  }
  public resetTemplatePersistSslSidShared() {
    this._templatePersistSslSidShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistSslSidSharedInput() {
    return this._templatePersistSslSidShared;
  }

  // template_policy - computed: false, optional: true, required: false
  private _templatePolicy?: string; 
  public get templatePolicy() {
    return this.getStringAttribute('template_policy');
  }
  public set templatePolicy(value: string) {
    this._templatePolicy = value;
  }
  public resetTemplatePolicy() {
    this._templatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePolicyInput() {
    return this._templatePolicy;
  }

  // template_policy_shared - computed: false, optional: true, required: false
  private _templatePolicyShared?: string; 
  public get templatePolicyShared() {
    return this.getStringAttribute('template_policy_shared');
  }
  public set templatePolicyShared(value: string) {
    this._templatePolicyShared = value;
  }
  public resetTemplatePolicyShared() {
    this._templatePolicyShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePolicySharedInput() {
    return this._templatePolicyShared;
  }

  // template_quic - computed: false, optional: true, required: false
  private _templateQuic?: string; 
  public get templateQuic() {
    return this.getStringAttribute('template_quic');
  }
  public set templateQuic(value: string) {
    this._templateQuic = value;
  }
  public resetTemplateQuic() {
    this._templateQuic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateQuicInput() {
    return this._templateQuic;
  }

  // template_quic_client - computed: false, optional: true, required: false
  private _templateQuicClient?: string; 
  public get templateQuicClient() {
    return this.getStringAttribute('template_quic_client');
  }
  public set templateQuicClient(value: string) {
    this._templateQuicClient = value;
  }
  public resetTemplateQuicClient() {
    this._templateQuicClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateQuicClientInput() {
    return this._templateQuicClient;
  }

  // template_quic_server - computed: false, optional: true, required: false
  private _templateQuicServer?: string; 
  public get templateQuicServer() {
    return this.getStringAttribute('template_quic_server');
  }
  public set templateQuicServer(value: string) {
    this._templateQuicServer = value;
  }
  public resetTemplateQuicServer() {
    this._templateQuicServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateQuicServerInput() {
    return this._templateQuicServer;
  }

  // template_quic_shared - computed: false, optional: true, required: false
  private _templateQuicShared?: string; 
  public get templateQuicShared() {
    return this.getStringAttribute('template_quic_shared');
  }
  public set templateQuicShared(value: string) {
    this._templateQuicShared = value;
  }
  public resetTemplateQuicShared() {
    this._templateQuicShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateQuicSharedInput() {
    return this._templateQuicShared;
  }

  // template_ram_cache - computed: false, optional: true, required: false
  private _templateRamCache?: string; 
  public get templateRamCache() {
    return this.getStringAttribute('template_ram_cache');
  }
  public set templateRamCache(value: string) {
    this._templateRamCache = value;
  }
  public resetTemplateRamCache() {
    this._templateRamCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRamCacheInput() {
    return this._templateRamCache;
  }

  // template_reqmod_icap - computed: false, optional: true, required: false
  private _templateReqmodIcap?: string; 
  public get templateReqmodIcap() {
    return this.getStringAttribute('template_reqmod_icap');
  }
  public set templateReqmodIcap(value: string) {
    this._templateReqmodIcap = value;
  }
  public resetTemplateReqmodIcap() {
    this._templateReqmodIcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateReqmodIcapInput() {
    return this._templateReqmodIcap;
  }

  // template_respmod_icap - computed: false, optional: true, required: false
  private _templateRespmodIcap?: string; 
  public get templateRespmodIcap() {
    return this.getStringAttribute('template_respmod_icap');
  }
  public set templateRespmodIcap(value: string) {
    this._templateRespmodIcap = value;
  }
  public resetTemplateRespmodIcap() {
    this._templateRespmodIcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRespmodIcapInput() {
    return this._templateRespmodIcap;
  }

  // template_scaleout - computed: false, optional: true, required: false
  private _templateScaleout?: string; 
  public get templateScaleout() {
    return this.getStringAttribute('template_scaleout');
  }
  public set templateScaleout(value: string) {
    this._templateScaleout = value;
  }
  public resetTemplateScaleout() {
    this._templateScaleout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateScaleoutInput() {
    return this._templateScaleout;
  }

  // template_server_ssh - computed: false, optional: true, required: false
  private _templateServerSsh?: string; 
  public get templateServerSsh() {
    return this.getStringAttribute('template_server_ssh');
  }
  public set templateServerSsh(value: string) {
    this._templateServerSsh = value;
  }
  public resetTemplateServerSsh() {
    this._templateServerSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateServerSshInput() {
    return this._templateServerSsh;
  }

  // template_server_ssl - computed: false, optional: true, required: false
  private _templateServerSsl?: string; 
  public get templateServerSsl() {
    return this.getStringAttribute('template_server_ssl');
  }
  public set templateServerSsl(value: string) {
    this._templateServerSsl = value;
  }
  public resetTemplateServerSsl() {
    this._templateServerSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateServerSslInput() {
    return this._templateServerSsl;
  }

  // template_server_ssl_shared - computed: false, optional: true, required: false
  private _templateServerSslShared?: string; 
  public get templateServerSslShared() {
    return this.getStringAttribute('template_server_ssl_shared');
  }
  public set templateServerSslShared(value: string) {
    this._templateServerSslShared = value;
  }
  public resetTemplateServerSslShared() {
    this._templateServerSslShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateServerSslSharedInput() {
    return this._templateServerSslShared;
  }

  // template_sip - computed: false, optional: true, required: false
  private _templateSip?: string; 
  public get templateSip() {
    return this.getStringAttribute('template_sip');
  }
  public set templateSip(value: string) {
    this._templateSip = value;
  }
  public resetTemplateSip() {
    this._templateSip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSipInput() {
    return this._templateSip;
  }

  // template_sip_shared - computed: false, optional: true, required: false
  private _templateSipShared?: string; 
  public get templateSipShared() {
    return this.getStringAttribute('template_sip_shared');
  }
  public set templateSipShared(value: string) {
    this._templateSipShared = value;
  }
  public resetTemplateSipShared() {
    this._templateSipShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSipSharedInput() {
    return this._templateSipShared;
  }

  // template_smpp - computed: false, optional: true, required: false
  private _templateSmpp?: string; 
  public get templateSmpp() {
    return this.getStringAttribute('template_smpp');
  }
  public set templateSmpp(value: string) {
    this._templateSmpp = value;
  }
  public resetTemplateSmpp() {
    this._templateSmpp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSmppInput() {
    return this._templateSmpp;
  }

  // template_smpp_shared - computed: false, optional: true, required: false
  private _templateSmppShared?: string; 
  public get templateSmppShared() {
    return this.getStringAttribute('template_smpp_shared');
  }
  public set templateSmppShared(value: string) {
    this._templateSmppShared = value;
  }
  public resetTemplateSmppShared() {
    this._templateSmppShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSmppSharedInput() {
    return this._templateSmppShared;
  }

  // template_smtp - computed: false, optional: true, required: false
  private _templateSmtp?: string; 
  public get templateSmtp() {
    return this.getStringAttribute('template_smtp');
  }
  public set templateSmtp(value: string) {
    this._templateSmtp = value;
  }
  public resetTemplateSmtp() {
    this._templateSmtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSmtpInput() {
    return this._templateSmtp;
  }

  // template_smtp_shared - computed: false, optional: true, required: false
  private _templateSmtpShared?: string; 
  public get templateSmtpShared() {
    return this.getStringAttribute('template_smtp_shared');
  }
  public set templateSmtpShared(value: string) {
    this._templateSmtpShared = value;
  }
  public resetTemplateSmtpShared() {
    this._templateSmtpShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSmtpSharedInput() {
    return this._templateSmtpShared;
  }

  // template_ssli - computed: false, optional: true, required: false
  private _templateSsli?: string; 
  public get templateSsli() {
    return this.getStringAttribute('template_ssli');
  }
  public set templateSsli(value: string) {
    this._templateSsli = value;
  }
  public resetTemplateSsli() {
    this._templateSsli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSsliInput() {
    return this._templateSsli;
  }

  // template_tcp - computed: false, optional: true, required: false
  private _templateTcp?: string; 
  public get templateTcp() {
    return this.getStringAttribute('template_tcp');
  }
  public set templateTcp(value: string) {
    this._templateTcp = value;
  }
  public resetTemplateTcp() {
    this._templateTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpInput() {
    return this._templateTcp;
  }

  // template_tcp_proxy - computed: false, optional: true, required: false
  private _templateTcpProxy?: string; 
  public get templateTcpProxy() {
    return this.getStringAttribute('template_tcp_proxy');
  }
  public set templateTcpProxy(value: string) {
    this._templateTcpProxy = value;
  }
  public resetTemplateTcpProxy() {
    this._templateTcpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpProxyInput() {
    return this._templateTcpProxy;
  }

  // template_tcp_proxy_client - computed: false, optional: true, required: false
  private _templateTcpProxyClient?: string; 
  public get templateTcpProxyClient() {
    return this.getStringAttribute('template_tcp_proxy_client');
  }
  public set templateTcpProxyClient(value: string) {
    this._templateTcpProxyClient = value;
  }
  public resetTemplateTcpProxyClient() {
    this._templateTcpProxyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpProxyClientInput() {
    return this._templateTcpProxyClient;
  }

  // template_tcp_proxy_server - computed: false, optional: true, required: false
  private _templateTcpProxyServer?: string; 
  public get templateTcpProxyServer() {
    return this.getStringAttribute('template_tcp_proxy_server');
  }
  public set templateTcpProxyServer(value: string) {
    this._templateTcpProxyServer = value;
  }
  public resetTemplateTcpProxyServer() {
    this._templateTcpProxyServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpProxyServerInput() {
    return this._templateTcpProxyServer;
  }

  // template_tcp_proxy_shared - computed: false, optional: true, required: false
  private _templateTcpProxyShared?: string; 
  public get templateTcpProxyShared() {
    return this.getStringAttribute('template_tcp_proxy_shared');
  }
  public set templateTcpProxyShared(value: string) {
    this._templateTcpProxyShared = value;
  }
  public resetTemplateTcpProxyShared() {
    this._templateTcpProxyShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpProxySharedInput() {
    return this._templateTcpProxyShared;
  }

  // template_tcp_shared - computed: false, optional: true, required: false
  private _templateTcpShared?: string; 
  public get templateTcpShared() {
    return this.getStringAttribute('template_tcp_shared');
  }
  public set templateTcpShared(value: string) {
    this._templateTcpShared = value;
  }
  public resetTemplateTcpShared() {
    this._templateTcpShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpSharedInput() {
    return this._templateTcpShared;
  }

  // template_udp - computed: false, optional: true, required: false
  private _templateUdp?: string; 
  public get templateUdp() {
    return this.getStringAttribute('template_udp');
  }
  public set templateUdp(value: string) {
    this._templateUdp = value;
  }
  public resetTemplateUdp() {
    this._templateUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUdpInput() {
    return this._templateUdp;
  }

  // template_udp_shared - computed: false, optional: true, required: false
  private _templateUdpShared?: string; 
  public get templateUdpShared() {
    return this.getStringAttribute('template_udp_shared');
  }
  public set templateUdpShared(value: string) {
    this._templateUdpShared = value;
  }
  public resetTemplateUdpShared() {
    this._templateUdpShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUdpSharedInput() {
    return this._templateUdpShared;
  }

  // template_virtual_port - computed: false, optional: true, required: false
  private _templateVirtualPort?: string; 
  public get templateVirtualPort() {
    return this.getStringAttribute('template_virtual_port');
  }
  public set templateVirtualPort(value: string) {
    this._templateVirtualPort = value;
  }
  public resetTemplateVirtualPort() {
    this._templateVirtualPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVirtualPortInput() {
    return this._templateVirtualPort;
  }

  // template_virtual_port_shared - computed: false, optional: true, required: false
  private _templateVirtualPortShared?: string; 
  public get templateVirtualPortShared() {
    return this.getStringAttribute('template_virtual_port_shared');
  }
  public set templateVirtualPortShared(value: string) {
    this._templateVirtualPortShared = value;
  }
  public resetTemplateVirtualPortShared() {
    this._templateVirtualPortShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVirtualPortSharedInput() {
    return this._templateVirtualPortShared;
  }

  // trunk_fwd - computed: false, optional: true, required: false
  private _trunkFwd?: number; 
  public get trunkFwd() {
    return this.getNumberAttribute('trunk_fwd');
  }
  public set trunkFwd(value: number) {
    this._trunkFwd = value;
  }
  public resetTrunkFwd() {
    this._trunkFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkFwdInput() {
    return this._trunkFwd;
  }

  // trunk_rev - computed: false, optional: true, required: false
  private _trunkRev?: number; 
  public get trunkRev() {
    return this.getNumberAttribute('trunk_rev');
  }
  public set trunkRev(value: number) {
    this._trunkRev = value;
  }
  public resetTrunkRev() {
    this._trunkRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkRevInput() {
    return this._trunkRev;
  }

  // use_alternate_port - computed: false, optional: true, required: false
  private _useAlternatePort?: number; 
  public get useAlternatePort() {
    return this.getNumberAttribute('use_alternate_port');
  }
  public set useAlternatePort(value: number) {
    this._useAlternatePort = value;
  }
  public resetUseAlternatePort() {
    this._useAlternatePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAlternatePortInput() {
    return this._useAlternatePort;
  }

  // use_cgnv6 - computed: false, optional: true, required: false
  private _useCgnv6?: number; 
  public get useCgnv6() {
    return this.getNumberAttribute('use_cgnv6');
  }
  public set useCgnv6(value: number) {
    this._useCgnv6 = value;
  }
  public resetUseCgnv6() {
    this._useCgnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCgnv6Input() {
    return this._useCgnv6;
  }

  // use_default_if_no_server - computed: false, optional: true, required: false
  private _useDefaultIfNoServer?: number; 
  public get useDefaultIfNoServer() {
    return this.getNumberAttribute('use_default_if_no_server');
  }
  public set useDefaultIfNoServer(value: number) {
    this._useDefaultIfNoServer = value;
  }
  public resetUseDefaultIfNoServer() {
    this._useDefaultIfNoServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultIfNoServerInput() {
    return this._useDefaultIfNoServer;
  }

  // use_rcv_hop_for_resp - computed: false, optional: true, required: false
  private _useRcvHopForResp?: number; 
  public get useRcvHopForResp() {
    return this.getNumberAttribute('use_rcv_hop_for_resp');
  }
  public set useRcvHopForResp(value: number) {
    this._useRcvHopForResp = value;
  }
  public resetUseRcvHopForResp() {
    this._useRcvHopForResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRcvHopForRespInput() {
    return this._useRcvHopForResp;
  }

  // use_rcv_hop_group - computed: false, optional: true, required: false
  private _useRcvHopGroup?: number; 
  public get useRcvHopGroup() {
    return this.getNumberAttribute('use_rcv_hop_group');
  }
  public set useRcvHopGroup(value: number) {
    this._useRcvHopGroup = value;
  }
  public resetUseRcvHopGroup() {
    this._useRcvHopGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRcvHopGroupInput() {
    return this._useRcvHopGroup;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // view - computed: false, optional: true, required: false
  private _view?: number; 
  public get view() {
    return this.getNumberAttribute('view');
  }
  public set view(value: number) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // when_down - computed: false, optional: true, required: false
  private _whenDown?: number; 
  public get whenDown() {
    return this.getNumberAttribute('when_down');
  }
  public set whenDown(value: number) {
    this._whenDown = value;
  }
  public resetWhenDown() {
    this._whenDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenDownInput() {
    return this._whenDown;
  }

  // when_down_protocol2 - computed: false, optional: true, required: false
  private _whenDownProtocol2?: number; 
  public get whenDownProtocol2() {
    return this.getNumberAttribute('when_down_protocol2');
  }
  public set whenDownProtocol2(value: number) {
    this._whenDownProtocol2 = value;
  }
  public resetWhenDownProtocol2() {
    this._whenDownProtocol2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenDownProtocol2Input() {
    return this._whenDownProtocol2;
  }

  // when_server_selection_failed - computed: false, optional: true, required: false
  private _whenServerSelectionFailed?: string; 
  public get whenServerSelectionFailed() {
    return this.getStringAttribute('when_server_selection_failed');
  }
  public set whenServerSelectionFailed(value: string) {
    this._whenServerSelectionFailed = value;
  }
  public resetWhenServerSelectionFailed() {
    this._whenServerSelectionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenServerSelectionFailedInput() {
    return this._whenServerSelectionFailed;
  }

  // acl_list - computed: false, optional: true, required: false
  private _aclList = new SlbVirtualServerPortListAclListStructList(this, "acl_list", false);
  public get aclList() {
    return this._aclList;
  }
  public putAclList(value: SlbVirtualServerPortListAclListStruct[] | cdktf.IResolvable) {
    this._aclList.internalValue = value;
  }
  public resetAclList() {
    this._aclList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclListInput() {
    return this._aclList.internalValue;
  }

  // aflex_scripts - computed: false, optional: true, required: false
  private _aflexScripts = new SlbVirtualServerPortListAflexScriptsList(this, "aflex_scripts", false);
  public get aflexScripts() {
    return this._aflexScripts;
  }
  public putAflexScripts(value: SlbVirtualServerPortListAflexScripts[] | cdktf.IResolvable) {
    this._aflexScripts.internalValue = value;
  }
  public resetAflexScripts() {
    this._aflexScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexScriptsInput() {
    return this._aflexScripts.internalValue;
  }

  // auth_cfg - computed: false, optional: true, required: false
  private _authCfg = new SlbVirtualServerPortListAuthCfgOutputReference(this, "auth_cfg");
  public get authCfg() {
    return this._authCfg;
  }
  public putAuthCfg(value: SlbVirtualServerPortListAuthCfg) {
    this._authCfg.internalValue = value;
  }
  public resetAuthCfg() {
    this._authCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCfgInput() {
    return this._authCfg.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbVirtualServerPortListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbVirtualServerPortListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class SlbVirtualServerPortListStructList extends cdktf.ComplexList {
  public internalValue? : SlbVirtualServerPortListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SlbVirtualServerPortListStructOutputReference {
    return new SlbVirtualServerPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server thunder_slb_virtual_server}
*/
export class SlbVirtualServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_virtual_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbVirtualServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbVirtualServer to import
  * @param importFromId The id of the existing SlbVirtualServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbVirtualServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_virtual_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server thunder_slb_virtual_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbVirtualServerConfig
  */
  public constructor(scope: Construct, id: string, config: SlbVirtualServerConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_virtual_server',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclId = config.aclId;
    this._aclIdShared = config.aclIdShared;
    this._aclName = config.aclName;
    this._aclNameShared = config.aclNameShared;
    this._arpDisable = config.arpDisable;
    this._description = config.description;
    this._disableVipAdv = config.disableVipAdv;
    this._enableDisableAction = config.enableDisableAction;
    this._ethernet = config.ethernet;
    this._extendedStats = config.extendedStats;
    this._gamingProtocolCompliance = config.gamingProtocolCompliance;
    this._haDynamic = config.haDynamic;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._ipv6Acl = config.ipv6Acl;
    this._ipv6AclShared = config.ipv6AclShared;
    this._ipv6Address = config.ipv6Address;
    this._name = config.name;
    this._netmask = config.netmask;
    this._redistributeRouteMap = config.redistributeRouteMap;
    this._redistributionFlagged = config.redistributionFlagged;
    this._sharedPartitionPolicyTemplate = config.sharedPartitionPolicyTemplate;
    this._sharedPartitionVsTemplate = config.sharedPartitionVsTemplate;
    this._statsDataAction = config.statsDataAction;
    this._suppressInternalLoopback = config.suppressInternalLoopback;
    this._templateLogging = config.templateLogging;
    this._templatePolicy = config.templatePolicy;
    this._templatePolicyShared = config.templatePolicyShared;
    this._templateScaleout = config.templateScaleout;
    this._templateVirtualServer = config.templateVirtualServer;
    this._templateVirtualServerShared = config.templateVirtualServerShared;
    this._useIfIp = config.useIfIp;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vportDisableAction = config.vportDisableAction;
    this._vrid = config.vrid;
    this._migrateVip.internalValue = config.migrateVip;
    this._portList.internalValue = config.portList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // acl_id_shared - computed: false, optional: true, required: false
  private _aclIdShared?: number; 
  public get aclIdShared() {
    return this.getNumberAttribute('acl_id_shared');
  }
  public set aclIdShared(value: number) {
    this._aclIdShared = value;
  }
  public resetAclIdShared() {
    this._aclIdShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdSharedInput() {
    return this._aclIdShared;
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // acl_name_shared - computed: false, optional: true, required: false
  private _aclNameShared?: string; 
  public get aclNameShared() {
    return this.getStringAttribute('acl_name_shared');
  }
  public set aclNameShared(value: string) {
    this._aclNameShared = value;
  }
  public resetAclNameShared() {
    this._aclNameShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameSharedInput() {
    return this._aclNameShared;
  }

  // arp_disable - computed: false, optional: true, required: false
  private _arpDisable?: number; 
  public get arpDisable() {
    return this.getNumberAttribute('arp_disable');
  }
  public set arpDisable(value: number) {
    this._arpDisable = value;
  }
  public resetArpDisable() {
    this._arpDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpDisableInput() {
    return this._arpDisable;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_vip_adv - computed: false, optional: true, required: false
  private _disableVipAdv?: number; 
  public get disableVipAdv() {
    return this.getNumberAttribute('disable_vip_adv');
  }
  public set disableVipAdv(value: number) {
    this._disableVipAdv = value;
  }
  public resetDisableVipAdv() {
    this._disableVipAdv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVipAdvInput() {
    return this._disableVipAdv;
  }

  // enable_disable_action - computed: false, optional: true, required: false
  private _enableDisableAction?: string; 
  public get enableDisableAction() {
    return this.getStringAttribute('enable_disable_action');
  }
  public set enableDisableAction(value: string) {
    this._enableDisableAction = value;
  }
  public resetEnableDisableAction() {
    this._enableDisableAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDisableActionInput() {
    return this._enableDisableAction;
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // extended_stats - computed: false, optional: true, required: false
  private _extendedStats?: number; 
  public get extendedStats() {
    return this.getNumberAttribute('extended_stats');
  }
  public set extendedStats(value: number) {
    this._extendedStats = value;
  }
  public resetExtendedStats() {
    this._extendedStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedStatsInput() {
    return this._extendedStats;
  }

  // gaming_protocol_compliance - computed: false, optional: true, required: false
  private _gamingProtocolCompliance?: number; 
  public get gamingProtocolCompliance() {
    return this.getNumberAttribute('gaming_protocol_compliance');
  }
  public set gamingProtocolCompliance(value: number) {
    this._gamingProtocolCompliance = value;
  }
  public resetGamingProtocolCompliance() {
    this._gamingProtocolCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gamingProtocolComplianceInput() {
    return this._gamingProtocolCompliance;
  }

  // ha_dynamic - computed: false, optional: true, required: false
  private _haDynamic?: number; 
  public get haDynamic() {
    return this.getNumberAttribute('ha_dynamic');
  }
  public set haDynamic(value: number) {
    this._haDynamic = value;
  }
  public resetHaDynamic() {
    this._haDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haDynamicInput() {
    return this._haDynamic;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv6_acl - computed: false, optional: true, required: false
  private _ipv6Acl?: string; 
  public get ipv6Acl() {
    return this.getStringAttribute('ipv6_acl');
  }
  public set ipv6Acl(value: string) {
    this._ipv6Acl = value;
  }
  public resetIpv6Acl() {
    this._ipv6Acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AclInput() {
    return this._ipv6Acl;
  }

  // ipv6_acl_shared - computed: false, optional: true, required: false
  private _ipv6AclShared?: string; 
  public get ipv6AclShared() {
    return this.getStringAttribute('ipv6_acl_shared');
  }
  public set ipv6AclShared(value: string) {
    this._ipv6AclShared = value;
  }
  public resetIpv6AclShared() {
    this._ipv6AclShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AclSharedInput() {
    return this._ipv6AclShared;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // redistribute_route_map - computed: false, optional: true, required: false
  private _redistributeRouteMap?: string; 
  public get redistributeRouteMap() {
    return this.getStringAttribute('redistribute_route_map');
  }
  public set redistributeRouteMap(value: string) {
    this._redistributeRouteMap = value;
  }
  public resetRedistributeRouteMap() {
    this._redistributeRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeRouteMapInput() {
    return this._redistributeRouteMap;
  }

  // redistribution_flagged - computed: false, optional: true, required: false
  private _redistributionFlagged?: number; 
  public get redistributionFlagged() {
    return this.getNumberAttribute('redistribution_flagged');
  }
  public set redistributionFlagged(value: number) {
    this._redistributionFlagged = value;
  }
  public resetRedistributionFlagged() {
    this._redistributionFlagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionFlaggedInput() {
    return this._redistributionFlagged;
  }

  // shared_partition_policy_template - computed: false, optional: true, required: false
  private _sharedPartitionPolicyTemplate?: number; 
  public get sharedPartitionPolicyTemplate() {
    return this.getNumberAttribute('shared_partition_policy_template');
  }
  public set sharedPartitionPolicyTemplate(value: number) {
    this._sharedPartitionPolicyTemplate = value;
  }
  public resetSharedPartitionPolicyTemplate() {
    this._sharedPartitionPolicyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPolicyTemplateInput() {
    return this._sharedPartitionPolicyTemplate;
  }

  // shared_partition_vs_template - computed: false, optional: true, required: false
  private _sharedPartitionVsTemplate?: number; 
  public get sharedPartitionVsTemplate() {
    return this.getNumberAttribute('shared_partition_vs_template');
  }
  public set sharedPartitionVsTemplate(value: number) {
    this._sharedPartitionVsTemplate = value;
  }
  public resetSharedPartitionVsTemplate() {
    this._sharedPartitionVsTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionVsTemplateInput() {
    return this._sharedPartitionVsTemplate;
  }

  // stats_data_action - computed: false, optional: true, required: false
  private _statsDataAction?: string; 
  public get statsDataAction() {
    return this.getStringAttribute('stats_data_action');
  }
  public set statsDataAction(value: string) {
    this._statsDataAction = value;
  }
  public resetStatsDataAction() {
    this._statsDataAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsDataActionInput() {
    return this._statsDataAction;
  }

  // suppress_internal_loopback - computed: false, optional: true, required: false
  private _suppressInternalLoopback?: number; 
  public get suppressInternalLoopback() {
    return this.getNumberAttribute('suppress_internal_loopback');
  }
  public set suppressInternalLoopback(value: number) {
    this._suppressInternalLoopback = value;
  }
  public resetSuppressInternalLoopback() {
    this._suppressInternalLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressInternalLoopbackInput() {
    return this._suppressInternalLoopback;
  }

  // template_logging - computed: false, optional: true, required: false
  private _templateLogging?: string; 
  public get templateLogging() {
    return this.getStringAttribute('template_logging');
  }
  public set templateLogging(value: string) {
    this._templateLogging = value;
  }
  public resetTemplateLogging() {
    this._templateLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateLoggingInput() {
    return this._templateLogging;
  }

  // template_policy - computed: false, optional: true, required: false
  private _templatePolicy?: string; 
  public get templatePolicy() {
    return this.getStringAttribute('template_policy');
  }
  public set templatePolicy(value: string) {
    this._templatePolicy = value;
  }
  public resetTemplatePolicy() {
    this._templatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePolicyInput() {
    return this._templatePolicy;
  }

  // template_policy_shared - computed: false, optional: true, required: false
  private _templatePolicyShared?: string; 
  public get templatePolicyShared() {
    return this.getStringAttribute('template_policy_shared');
  }
  public set templatePolicyShared(value: string) {
    this._templatePolicyShared = value;
  }
  public resetTemplatePolicyShared() {
    this._templatePolicyShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePolicySharedInput() {
    return this._templatePolicyShared;
  }

  // template_scaleout - computed: false, optional: true, required: false
  private _templateScaleout?: string; 
  public get templateScaleout() {
    return this.getStringAttribute('template_scaleout');
  }
  public set templateScaleout(value: string) {
    this._templateScaleout = value;
  }
  public resetTemplateScaleout() {
    this._templateScaleout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateScaleoutInput() {
    return this._templateScaleout;
  }

  // template_virtual_server - computed: false, optional: true, required: false
  private _templateVirtualServer?: string; 
  public get templateVirtualServer() {
    return this.getStringAttribute('template_virtual_server');
  }
  public set templateVirtualServer(value: string) {
    this._templateVirtualServer = value;
  }
  public resetTemplateVirtualServer() {
    this._templateVirtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVirtualServerInput() {
    return this._templateVirtualServer;
  }

  // template_virtual_server_shared - computed: false, optional: true, required: false
  private _templateVirtualServerShared?: string; 
  public get templateVirtualServerShared() {
    return this.getStringAttribute('template_virtual_server_shared');
  }
  public set templateVirtualServerShared(value: string) {
    this._templateVirtualServerShared = value;
  }
  public resetTemplateVirtualServerShared() {
    this._templateVirtualServerShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVirtualServerSharedInput() {
    return this._templateVirtualServerShared;
  }

  // use_if_ip - computed: false, optional: true, required: false
  private _useIfIp?: number; 
  public get useIfIp() {
    return this.getNumberAttribute('use_if_ip');
  }
  public set useIfIp(value: number) {
    this._useIfIp = value;
  }
  public resetUseIfIp() {
    this._useIfIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIfIpInput() {
    return this._useIfIp;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vport_disable_action - computed: false, optional: true, required: false
  private _vportDisableAction?: string; 
  public get vportDisableAction() {
    return this.getStringAttribute('vport_disable_action');
  }
  public set vportDisableAction(value: string) {
    this._vportDisableAction = value;
  }
  public resetVportDisableAction() {
    this._vportDisableAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportDisableActionInput() {
    return this._vportDisableAction;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // migrate_vip - computed: false, optional: true, required: false
  private _migrateVip = new SlbVirtualServerMigrateVipOutputReference(this, "migrate_vip");
  public get migrateVip() {
    return this._migrateVip;
  }
  public putMigrateVip(value: SlbVirtualServerMigrateVip) {
    this._migrateVip.internalValue = value;
  }
  public resetMigrateVip() {
    this._migrateVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateVipInput() {
    return this._migrateVip.internalValue;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList = new SlbVirtualServerPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: SlbVirtualServerPortListStruct[] | cdktf.IResolvable) {
    this._portList.internalValue = value;
  }
  public resetPortList() {
    this._portList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_id: cdktf.numberToTerraform(this._aclId),
      acl_id_shared: cdktf.numberToTerraform(this._aclIdShared),
      acl_name: cdktf.stringToTerraform(this._aclName),
      acl_name_shared: cdktf.stringToTerraform(this._aclNameShared),
      arp_disable: cdktf.numberToTerraform(this._arpDisable),
      description: cdktf.stringToTerraform(this._description),
      disable_vip_adv: cdktf.numberToTerraform(this._disableVipAdv),
      enable_disable_action: cdktf.stringToTerraform(this._enableDisableAction),
      ethernet: cdktf.numberToTerraform(this._ethernet),
      extended_stats: cdktf.numberToTerraform(this._extendedStats),
      gaming_protocol_compliance: cdktf.numberToTerraform(this._gamingProtocolCompliance),
      ha_dynamic: cdktf.numberToTerraform(this._haDynamic),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ipv6_acl: cdktf.stringToTerraform(this._ipv6Acl),
      ipv6_acl_shared: cdktf.stringToTerraform(this._ipv6AclShared),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      name: cdktf.stringToTerraform(this._name),
      netmask: cdktf.stringToTerraform(this._netmask),
      redistribute_route_map: cdktf.stringToTerraform(this._redistributeRouteMap),
      redistribution_flagged: cdktf.numberToTerraform(this._redistributionFlagged),
      shared_partition_policy_template: cdktf.numberToTerraform(this._sharedPartitionPolicyTemplate),
      shared_partition_vs_template: cdktf.numberToTerraform(this._sharedPartitionVsTemplate),
      stats_data_action: cdktf.stringToTerraform(this._statsDataAction),
      suppress_internal_loopback: cdktf.numberToTerraform(this._suppressInternalLoopback),
      template_logging: cdktf.stringToTerraform(this._templateLogging),
      template_policy: cdktf.stringToTerraform(this._templatePolicy),
      template_policy_shared: cdktf.stringToTerraform(this._templatePolicyShared),
      template_scaleout: cdktf.stringToTerraform(this._templateScaleout),
      template_virtual_server: cdktf.stringToTerraform(this._templateVirtualServer),
      template_virtual_server_shared: cdktf.stringToTerraform(this._templateVirtualServerShared),
      use_if_ip: cdktf.numberToTerraform(this._useIfIp),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vport_disable_action: cdktf.stringToTerraform(this._vportDisableAction),
      vrid: cdktf.numberToTerraform(this._vrid),
      migrate_vip: slbVirtualServerMigrateVipToTerraform(this._migrateVip.internalValue),
      port_list: cdktf.listMapper(slbVirtualServerPortListStructToTerraform, true)(this._portList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_id: {
        value: cdktf.numberToHclTerraform(this._aclId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acl_id_shared: {
        value: cdktf.numberToHclTerraform(this._aclIdShared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acl_name: {
        value: cdktf.stringToHclTerraform(this._aclName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_name_shared: {
        value: cdktf.stringToHclTerraform(this._aclNameShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_disable: {
        value: cdktf.numberToHclTerraform(this._arpDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_vip_adv: {
        value: cdktf.numberToHclTerraform(this._disableVipAdv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_disable_action: {
        value: cdktf.stringToHclTerraform(this._enableDisableAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet: {
        value: cdktf.numberToHclTerraform(this._ethernet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extended_stats: {
        value: cdktf.numberToHclTerraform(this._extendedStats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gaming_protocol_compliance: {
        value: cdktf.numberToHclTerraform(this._gamingProtocolCompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ha_dynamic: {
        value: cdktf.numberToHclTerraform(this._haDynamic),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_acl: {
        value: cdktf.stringToHclTerraform(this._ipv6Acl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_acl_shared: {
        value: cdktf.stringToHclTerraform(this._ipv6AclShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_route_map: {
        value: cdktf.stringToHclTerraform(this._redistributeRouteMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribution_flagged: {
        value: cdktf.numberToHclTerraform(this._redistributionFlagged),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_policy_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionPolicyTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_vs_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionVsTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats_data_action: {
        value: cdktf.stringToHclTerraform(this._statsDataAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_internal_loopback: {
        value: cdktf.numberToHclTerraform(this._suppressInternalLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_logging: {
        value: cdktf.stringToHclTerraform(this._templateLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_policy: {
        value: cdktf.stringToHclTerraform(this._templatePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_policy_shared: {
        value: cdktf.stringToHclTerraform(this._templatePolicyShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_scaleout: {
        value: cdktf.stringToHclTerraform(this._templateScaleout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_virtual_server: {
        value: cdktf.stringToHclTerraform(this._templateVirtualServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_virtual_server_shared: {
        value: cdktf.stringToHclTerraform(this._templateVirtualServerShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_if_ip: {
        value: cdktf.numberToHclTerraform(this._useIfIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vport_disable_action: {
        value: cdktf.stringToHclTerraform(this._vportDisableAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      migrate_vip: {
        value: slbVirtualServerMigrateVipToHclTerraform(this._migrateVip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbVirtualServerMigrateVipList",
      },
      port_list: {
        value: cdktf.listMapperHcl(slbVirtualServerPortListStructToHclTerraform, true)(this._portList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbVirtualServerPortListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
