// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcepEndpointV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#description VpcepEndpointV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#enable_dns VpcepEndpointV1#enable_dns}
  */
  readonly enableDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#enable_whitelist VpcepEndpointV1#enable_whitelist}
  */
  readonly enableWhitelist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#id VpcepEndpointV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#policy_statement VpcepEndpointV1#policy_statement}
  */
  readonly policyStatement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#port_ip VpcepEndpointV1#port_ip}
  */
  readonly portIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#route_tables VpcepEndpointV1#route_tables}
  */
  readonly routeTables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#service_id VpcepEndpointV1#service_id}
  */
  readonly serviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#subnet_id VpcepEndpointV1#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#tags VpcepEndpointV1#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#vpc_id VpcepEndpointV1#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#whitelist VpcepEndpointV1#whitelist}
  */
  readonly whitelist?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#timeouts VpcepEndpointV1#timeouts}
  */
  readonly timeouts?: VpcepEndpointV1Timeouts;
}
export interface VpcepEndpointV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#default VpcepEndpointV1#default}
  */
  readonly default?: string;
}

export function vpcepEndpointV1TimeoutsToTerraform(struct?: VpcepEndpointV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function vpcepEndpointV1TimeoutsToHclTerraform(struct?: VpcepEndpointV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcepEndpointV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcepEndpointV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcepEndpointV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1 opentelekomcloud_vpcep_endpoint_v1}
*/
export class VpcepEndpointV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_vpcep_endpoint_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcepEndpointV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcepEndpointV1 to import
  * @param importFromId The id of the existing VpcepEndpointV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcepEndpointV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_vpcep_endpoint_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/vpcep_endpoint_v1 opentelekomcloud_vpcep_endpoint_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcepEndpointV1Config
  */
  public constructor(scope: Construct, id: string, config: VpcepEndpointV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpcep_endpoint_v1',
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
    this._enableDns = config.enableDns;
    this._enableWhitelist = config.enableWhitelist;
    this._id = config.id;
    this._policyStatement = config.policyStatement;
    this._portIp = config.portIp;
    this._routeTables = config.routeTables;
    this._serviceId = config.serviceId;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._whitelist = config.whitelist;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // dns_names - computed: true, optional: false, required: false
  public get dnsNames() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_names'));
  }

  // enable_dns - computed: true, optional: true, required: false
  private _enableDns?: boolean | cdktf.IResolvable; 
  public get enableDns() {
    return this.getBooleanAttribute('enable_dns');
  }
  public set enableDns(value: boolean | cdktf.IResolvable) {
    this._enableDns = value;
  }
  public resetEnableDns() {
    this._enableDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnsInput() {
    return this._enableDns;
  }

  // enable_whitelist - computed: true, optional: true, required: false
  private _enableWhitelist?: boolean | cdktf.IResolvable; 
  public get enableWhitelist() {
    return this.getBooleanAttribute('enable_whitelist');
  }
  public set enableWhitelist(value: boolean | cdktf.IResolvable) {
    this._enableWhitelist = value;
  }
  public resetEnableWhitelist() {
    this._enableWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWhitelistInput() {
    return this._enableWhitelist;
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

  // marker_id - computed: true, optional: false, required: false
  public get markerId() {
    return this.getNumberAttribute('marker_id');
  }

  // policy_statement - computed: true, optional: true, required: false
  private _policyStatement?: string; 
  public get policyStatement() {
    return this.getStringAttribute('policy_statement');
  }
  public set policyStatement(value: string) {
    this._policyStatement = value;
  }
  public resetPolicyStatement() {
    this._policyStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyStatementInput() {
    return this._policyStatement;
  }

  // port_ip - computed: true, optional: true, required: false
  private _portIp?: string; 
  public get portIp() {
    return this.getStringAttribute('port_ip');
  }
  public set portIp(value: string) {
    this._portIp = value;
  }
  public resetPortIp() {
    this._portIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIpInput() {
    return this._portIp;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // route_tables - computed: true, optional: true, required: false
  private _routeTables?: string[]; 
  public get routeTables() {
    return cdktf.Fn.tolist(this.getListAttribute('route_tables'));
  }
  public set routeTables(value: string[]) {
    this._routeTables = value;
  }
  public resetRouteTables() {
    this._routeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTablesInput() {
    return this._routeTables;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // whitelist - computed: true, optional: true, required: false
  private _whitelist?: string[]; 
  public get whitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('whitelist'));
  }
  public set whitelist(value: string[]) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcepEndpointV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcepEndpointV1Timeouts) {
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
      enable_dns: cdktf.booleanToTerraform(this._enableDns),
      enable_whitelist: cdktf.booleanToTerraform(this._enableWhitelist),
      id: cdktf.stringToTerraform(this._id),
      policy_statement: cdktf.stringToTerraform(this._policyStatement),
      port_ip: cdktf.stringToTerraform(this._portIp),
      route_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routeTables),
      service_id: cdktf.stringToTerraform(this._serviceId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._whitelist),
      timeouts: vpcepEndpointV1TimeoutsToTerraform(this._timeouts.internalValue),
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
      enable_dns: {
        value: cdktf.booleanToHclTerraform(this._enableDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_whitelist: {
        value: cdktf.booleanToHclTerraform(this._enableWhitelist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_statement: {
        value: cdktf.stringToHclTerraform(this._policyStatement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_ip: {
        value: cdktf.stringToHclTerraform(this._portIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_tables: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routeTables),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._whitelist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: vpcepEndpointV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcepEndpointV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
