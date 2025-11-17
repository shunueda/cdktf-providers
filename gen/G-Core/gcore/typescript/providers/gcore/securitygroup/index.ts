// https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecuritygroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#description Securitygroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#id Securitygroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#last_updated Securitygroup#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#metadata_map Securitygroup#metadata_map}
  */
  readonly metadataMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#name Securitygroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#project_id Securitygroup#project_id}
  */
  readonly projectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#project_name Securitygroup#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#region_id Securitygroup#region_id}
  */
  readonly regionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#region_name Securitygroup#region_name}
  */
  readonly regionName?: string;
  /**
  * security_group_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#security_group_rules Securitygroup#security_group_rules}
  */
  readonly securityGroupRules: SecuritygroupSecurityGroupRules[] | cdktf.IResolvable;
}
export interface SecuritygroupMetadataReadOnly {
}

export function securitygroupMetadataReadOnlyToTerraform(struct?: SecuritygroupMetadataReadOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securitygroupMetadataReadOnlyToHclTerraform(struct?: SecuritygroupMetadataReadOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuritygroupMetadataReadOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SecuritygroupMetadataReadOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritygroupMetadataReadOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class SecuritygroupMetadataReadOnlyList extends cdktf.ComplexList {

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
  public get(index: number): SecuritygroupMetadataReadOnlyOutputReference {
    return new SecuritygroupMetadataReadOnlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritygroupSecurityGroupRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#description Securitygroup#description}
  */
  readonly description?: string;
  /**
  * Available value is 'ingress', 'egress'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#direction Securitygroup#direction}
  */
  readonly direction: string;
  /**
  * Available value is 'IPv4', 'IPv6'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#ethertype Securitygroup#ethertype}
  */
  readonly ethertype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#port_range_max Securitygroup#port_range_max}
  */
  readonly portRangeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#port_range_min Securitygroup#port_range_min}
  */
  readonly portRangeMin?: number;
  /**
  * Available value is udp,tcp,any,ipv6-icmp,ipv6-route,ipv6-opts,ipv6-nonxt,ipv6-frag,ipv6-encap,icmp,ah,dccp,egp,esp,gre,igmp,ospf,pgm,rsvp,sctp,udplite,vrrp,51,50,112,0,4,ipip,ipencap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#protocol Securitygroup#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#remote_group_id Securitygroup#remote_group_id}
  */
  readonly remoteGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#remote_ip_prefix Securitygroup#remote_ip_prefix}
  */
  readonly remoteIpPrefix?: string;
}

export function securitygroupSecurityGroupRulesToTerraform(struct?: SecuritygroupSecurityGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    direction: cdktf.stringToTerraform(struct!.direction),
    ethertype: cdktf.stringToTerraform(struct!.ethertype),
    port_range_max: cdktf.numberToTerraform(struct!.portRangeMax),
    port_range_min: cdktf.numberToTerraform(struct!.portRangeMin),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remote_group_id: cdktf.stringToTerraform(struct!.remoteGroupId),
    remote_ip_prefix: cdktf.stringToTerraform(struct!.remoteIpPrefix),
  }
}


export function securitygroupSecurityGroupRulesToHclTerraform(struct?: SecuritygroupSecurityGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ethertype: {
      value: cdktf.stringToHclTerraform(struct!.ethertype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_range_max: {
      value: cdktf.numberToHclTerraform(struct!.portRangeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range_min: {
      value: cdktf.numberToHclTerraform(struct!.portRangeMin),
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
    remote_group_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.remoteIpPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritygroupSecurityGroupRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritygroupSecurityGroupRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._ethertype !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethertype = this._ethertype;
    }
    if (this._portRangeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeMax = this._portRangeMax;
    }
    if (this._portRangeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeMin = this._portRangeMin;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remoteGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteGroupId = this._remoteGroupId;
    }
    if (this._remoteIpPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpPrefix = this._remoteIpPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritygroupSecurityGroupRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._direction = undefined;
      this._ethertype = undefined;
      this._portRangeMax = undefined;
      this._portRangeMin = undefined;
      this._protocol = undefined;
      this._remoteGroupId = undefined;
      this._remoteIpPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._direction = value.direction;
      this._ethertype = value.ethertype;
      this._portRangeMax = value.portRangeMax;
      this._portRangeMin = value.portRangeMin;
      this._protocol = value.protocol;
      this._remoteGroupId = value.remoteGroupId;
      this._remoteIpPrefix = value.remoteIpPrefix;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // ethertype - computed: false, optional: false, required: true
  private _ethertype?: string; 
  public get ethertype() {
    return this.getStringAttribute('ethertype');
  }
  public set ethertype(value: string) {
    this._ethertype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ethertypeInput() {
    return this._ethertype;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port_range_max - computed: false, optional: true, required: false
  private _portRangeMax?: number; 
  public get portRangeMax() {
    return this.getNumberAttribute('port_range_max');
  }
  public set portRangeMax(value: number) {
    this._portRangeMax = value;
  }
  public resetPortRangeMax() {
    this._portRangeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeMaxInput() {
    return this._portRangeMax;
  }

  // port_range_min - computed: false, optional: true, required: false
  private _portRangeMin?: number; 
  public get portRangeMin() {
    return this.getNumberAttribute('port_range_min');
  }
  public set portRangeMin(value: number) {
    this._portRangeMin = value;
  }
  public resetPortRangeMin() {
    this._portRangeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeMinInput() {
    return this._portRangeMin;
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

  // remote_group_id - computed: false, optional: true, required: false
  private _remoteGroupId?: string; 
  public get remoteGroupId() {
    return this.getStringAttribute('remote_group_id');
  }
  public set remoteGroupId(value: string) {
    this._remoteGroupId = value;
  }
  public resetRemoteGroupId() {
    this._remoteGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGroupIdInput() {
    return this._remoteGroupId;
  }

  // remote_ip_prefix - computed: false, optional: true, required: false
  private _remoteIpPrefix?: string; 
  public get remoteIpPrefix() {
    return this.getStringAttribute('remote_ip_prefix');
  }
  public set remoteIpPrefix(value: string) {
    this._remoteIpPrefix = value;
  }
  public resetRemoteIpPrefix() {
    this._remoteIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpPrefixInput() {
    return this._remoteIpPrefix;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class SecuritygroupSecurityGroupRulesList extends cdktf.ComplexList {
  public internalValue? : SecuritygroupSecurityGroupRules[] | cdktf.IResolvable

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
  public get(index: number): SecuritygroupSecurityGroupRulesOutputReference {
    return new SecuritygroupSecurityGroupRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup gcore_securitygroup}
*/
export class Securitygroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_securitygroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Securitygroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Securitygroup to import
  * @param importFromId The id of the existing Securitygroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Securitygroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_securitygroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/securitygroup gcore_securitygroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecuritygroupConfig
  */
  public constructor(scope: Construct, id: string, config: SecuritygroupConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_securitygroup',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.4',
        providerVersionConstraint: '0.31.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._metadataMap = config.metadataMap;
    this._name = config.name;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._securityGroupRules.internalValue = config.securityGroupRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // metadata_map - computed: false, optional: true, required: false
  private _metadataMap?: { [key: string]: string }; 
  public get metadataMap() {
    return this.getStringMapAttribute('metadata_map');
  }
  public set metadataMap(value: { [key: string]: string }) {
    this._metadataMap = value;
  }
  public resetMetadataMap() {
    this._metadataMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataMapInput() {
    return this._metadataMap;
  }

  // metadata_read_only - computed: true, optional: false, required: false
  private _metadataReadOnly = new SecuritygroupMetadataReadOnlyList(this, "metadata_read_only", false);
  public get metadataReadOnly() {
    return this._metadataReadOnly;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // security_group_rules - computed: false, optional: false, required: true
  private _securityGroupRules = new SecuritygroupSecurityGroupRulesList(this, "security_group_rules", true);
  public get securityGroupRules() {
    return this._securityGroupRules;
  }
  public putSecurityGroupRules(value: SecuritygroupSecurityGroupRules[] | cdktf.IResolvable) {
    this._securityGroupRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRulesInput() {
    return this._securityGroupRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      metadata_map: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadataMap),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      security_group_rules: cdktf.listMapper(securitygroupSecurityGroupRulesToTerraform, true)(this._securityGroupRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_map: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadataMap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_rules: {
        value: cdktf.listMapperHcl(securitygroupSecurityGroupRulesToHclTerraform, true)(this._securityGroupRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecuritygroupSecurityGroupRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
