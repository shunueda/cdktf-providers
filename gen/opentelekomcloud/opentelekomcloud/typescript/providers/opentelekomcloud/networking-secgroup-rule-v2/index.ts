// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingSecgroupRuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#description NetworkingSecgroupRuleV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#direction NetworkingSecgroupRuleV2#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#ethertype NetworkingSecgroupRuleV2#ethertype}
  */
  readonly ethertype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#id NetworkingSecgroupRuleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#port_range_max NetworkingSecgroupRuleV2#port_range_max}
  */
  readonly portRangeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#port_range_min NetworkingSecgroupRuleV2#port_range_min}
  */
  readonly portRangeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#protocol NetworkingSecgroupRuleV2#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#region NetworkingSecgroupRuleV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#remote_group_id NetworkingSecgroupRuleV2#remote_group_id}
  */
  readonly remoteGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#remote_ip_prefix NetworkingSecgroupRuleV2#remote_ip_prefix}
  */
  readonly remoteIpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#security_group_id NetworkingSecgroupRuleV2#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#tenant_id NetworkingSecgroupRuleV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#timeouts NetworkingSecgroupRuleV2#timeouts}
  */
  readonly timeouts?: NetworkingSecgroupRuleV2Timeouts;
}
export interface NetworkingSecgroupRuleV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#delete NetworkingSecgroupRuleV2#delete}
  */
  readonly delete?: string;
}

export function networkingSecgroupRuleV2TimeoutsToTerraform(struct?: NetworkingSecgroupRuleV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function networkingSecgroupRuleV2TimeoutsToHclTerraform(struct?: NetworkingSecgroupRuleV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkingSecgroupRuleV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkingSecgroupRuleV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingSecgroupRuleV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2 opentelekomcloud_networking_secgroup_rule_v2}
*/
export class NetworkingSecgroupRuleV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_networking_secgroup_rule_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkingSecgroupRuleV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkingSecgroupRuleV2 to import
  * @param importFromId The id of the existing NetworkingSecgroupRuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkingSecgroupRuleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_networking_secgroup_rule_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/networking_secgroup_rule_v2 opentelekomcloud_networking_secgroup_rule_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingSecgroupRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: NetworkingSecgroupRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_networking_secgroup_rule_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.55',
        providerVersionConstraint: '1.36.55'
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
    this._direction = config.direction;
    this._ethertype = config.ethertype;
    this._id = config.id;
    this._portRangeMax = config.portRangeMax;
    this._portRangeMin = config.portRangeMin;
    this._protocol = config.protocol;
    this._region = config.region;
    this._remoteGroupId = config.remoteGroupId;
    this._remoteIpPrefix = config.remoteIpPrefix;
    this._securityGroupId = config.securityGroupId;
    this._tenantId = config.tenantId;
    this._timeouts.internalValue = config.timeouts;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // remote_group_id - computed: true, optional: true, required: false
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

  // remote_ip_prefix - computed: true, optional: true, required: false
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

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkingSecgroupRuleV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkingSecgroupRuleV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      direction: cdktf.stringToTerraform(this._direction),
      ethertype: cdktf.stringToTerraform(this._ethertype),
      id: cdktf.stringToTerraform(this._id),
      port_range_max: cdktf.numberToTerraform(this._portRangeMax),
      port_range_min: cdktf.numberToTerraform(this._portRangeMin),
      protocol: cdktf.stringToTerraform(this._protocol),
      region: cdktf.stringToTerraform(this._region),
      remote_group_id: cdktf.stringToTerraform(this._remoteGroupId),
      remote_ip_prefix: cdktf.stringToTerraform(this._remoteIpPrefix),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: networkingSecgroupRuleV2TimeoutsToTerraform(this._timeouts.internalValue),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethertype: {
        value: cdktf.stringToHclTerraform(this._ethertype),
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
      port_range_max: {
        value: cdktf.numberToHclTerraform(this._portRangeMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_range_min: {
        value: cdktf.numberToHclTerraform(this._portRangeMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_group_id: {
        value: cdktf.stringToHclTerraform(this._remoteGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_ip_prefix: {
        value: cdktf.stringToHclTerraform(this._remoteIpPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: networkingSecgroupRuleV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkingSecgroupRuleV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
