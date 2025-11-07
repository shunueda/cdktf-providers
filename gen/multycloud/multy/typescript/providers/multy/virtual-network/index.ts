// https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * CIDR Block of Virtual Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_network#cidr_block VirtualNetwork#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Cloud provider to deploy resource into. Accepted values are `aws`, `azure` or `gcp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_network#cloud VirtualNetwork#cloud}
  */
  readonly cloud: string;
  /**
  * GCP-specific attributes that will be set if this resource is deployed in GCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_network#gcp_overrides VirtualNetwork#gcp_overrides}
  */
  readonly gcpOverrides?: VirtualNetworkGcpOverrides;
  /**
  * Location to deploy resource into. Read more about regions in [documentation](https://docs.multy.dev/regions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_network#location VirtualNetwork#location}
  */
  readonly location: string;
  /**
  * Name of Virtual Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_network#name VirtualNetwork#name}
  */
  readonly name: string;
}
export interface VirtualNetworkAws {
}

export function virtualNetworkAwsToTerraform(struct?: VirtualNetworkAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualNetworkAwsToHclTerraform(struct?: VirtualNetworkAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualNetworkAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualNetworkAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_security_group_id - computed: true, optional: false, required: false
  public get defaultSecurityGroupId() {
    return this.getStringAttribute('default_security_group_id');
  }

  // internet_gateway_id - computed: true, optional: false, required: false
  public get internetGatewayId() {
    return this.getStringAttribute('internet_gateway_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
export interface VirtualNetworkAzure {
}

export function virtualNetworkAzureToTerraform(struct?: VirtualNetworkAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualNetworkAzureToHclTerraform(struct?: VirtualNetworkAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualNetworkAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualNetworkAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_route_table_id - computed: true, optional: false, required: false
  public get localRouteTableId() {
    return this.getStringAttribute('local_route_table_id');
  }

  // virtual_network_id - computed: true, optional: false, required: false
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
}
export interface VirtualNetworkGcp {
}

export function virtualNetworkGcpToTerraform(struct?: VirtualNetworkGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualNetworkGcpToHclTerraform(struct?: VirtualNetworkGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualNetworkGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualNetworkGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_network_id - computed: true, optional: false, required: false
  public get computeNetworkId() {
    return this.getStringAttribute('compute_network_id');
  }

  // default_compute_firewall_id - computed: true, optional: false, required: false
  public get defaultComputeFirewallId() {
    return this.getStringAttribute('default_compute_firewall_id');
  }
}
export interface VirtualNetworkGcpOverrides {
  /**
  * The project to use for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_network#project VirtualNetwork#project}
  */
  readonly project?: string;
}

export function virtualNetworkGcpOverridesToTerraform(struct?: VirtualNetworkGcpOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function virtualNetworkGcpOverridesToHclTerraform(struct?: VirtualNetworkGcpOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGcpOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualNetworkGcpOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGcpOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._project = value.project;
    }
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_network multy_virtual_network}
*/
export class VirtualNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "multy_virtual_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualNetwork to import
  * @param importFromId The id of the existing VirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "multy_virtual_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_network multy_virtual_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'multy_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'multy',
        providerVersion: '0.0.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidrBlock = config.cidrBlock;
    this._cloud = config.cloud;
    this._gcpOverrides.internalValue = config.gcpOverrides;
    this._location = config.location;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws - computed: true, optional: false, required: false
  private _aws = new VirtualNetworkAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }

  // azure - computed: true, optional: false, required: false
  private _azure = new VirtualNetworkAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // cloud - computed: false, optional: false, required: true
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // gcp - computed: true, optional: false, required: false
  private _gcp = new VirtualNetworkGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }

  // gcp_overrides - computed: true, optional: true, required: false
  private _gcpOverrides = new VirtualNetworkGcpOverridesOutputReference(this, "gcp_overrides");
  public get gcpOverrides() {
    return this._gcpOverrides;
  }
  public putGcpOverrides(value: VirtualNetworkGcpOverrides) {
    this._gcpOverrides.internalValue = value;
  }
  public resetGcpOverrides() {
    this._gcpOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpOverridesInput() {
    return this._gcpOverrides.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // resource_status - computed: true, optional: false, required: false
  private _resourceStatus = new cdktf.StringMap(this, "resource_status");
  public get resourceStatus() {
    return this._resourceStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      cloud: cdktf.stringToTerraform(this._cloud),
      gcp_overrides: virtualNetworkGcpOverridesToTerraform(this._gcpOverrides.internalValue),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_overrides: {
        value: virtualNetworkGcpOverridesToHclTerraform(this._gcpOverrides.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualNetworkGcpOverrides",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
