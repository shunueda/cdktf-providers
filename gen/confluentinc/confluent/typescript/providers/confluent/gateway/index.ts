// https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * A name for the Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway#display_name Gateway#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway#id Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * aws_egress_private_link_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway#aws_egress_private_link_gateway Gateway#aws_egress_private_link_gateway}
  */
  readonly awsEgressPrivateLinkGateway?: GatewayAwsEgressPrivateLinkGateway;
  /**
  * aws_private_network_interface_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway#aws_private_network_interface_gateway Gateway#aws_private_network_interface_gateway}
  */
  readonly awsPrivateNetworkInterfaceGateway?: GatewayAwsPrivateNetworkInterfaceGateway;
  /**
  * azure_egress_private_link_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway#azure_egress_private_link_gateway Gateway#azure_egress_private_link_gateway}
  */
  readonly azureEgressPrivateLinkGateway?: GatewayAzureEgressPrivateLinkGateway;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway#environment Gateway#environment}
  */
  readonly environment: GatewayEnvironment;
}
export interface GatewayAwsEgressPrivateLinkGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway#region Gateway#region}
  */
  readonly region: string;
}

export function gatewayAwsEgressPrivateLinkGatewayToTerraform(struct?: GatewayAwsEgressPrivateLinkGatewayOutputReference | GatewayAwsEgressPrivateLinkGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function gatewayAwsEgressPrivateLinkGatewayToHclTerraform(struct?: GatewayAwsEgressPrivateLinkGatewayOutputReference | GatewayAwsEgressPrivateLinkGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayAwsEgressPrivateLinkGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayAwsEgressPrivateLinkGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayAwsEgressPrivateLinkGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
    }
  }

  // principal_arn - computed: true, optional: false, required: false
  public get principalArn() {
    return this.getStringAttribute('principal_arn');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface GatewayAwsPrivateNetworkInterfaceGateway {
  /**
  * AWS region of the Private Network Interface Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway#region Gateway#region}
  */
  readonly region: string;
  /**
  * AWS availability zone ids of the Private Network Interface Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway#zones Gateway#zones}
  */
  readonly zones: string[];
}

export function gatewayAwsPrivateNetworkInterfaceGatewayToTerraform(struct?: GatewayAwsPrivateNetworkInterfaceGatewayOutputReference | GatewayAwsPrivateNetworkInterfaceGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function gatewayAwsPrivateNetworkInterfaceGatewayToHclTerraform(struct?: GatewayAwsPrivateNetworkInterfaceGatewayOutputReference | GatewayAwsPrivateNetworkInterfaceGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayAwsPrivateNetworkInterfaceGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayAwsPrivateNetworkInterfaceGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayAwsPrivateNetworkInterfaceGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
      this._zones = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
      this._zones = value.zones;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // zones - computed: false, optional: false, required: true
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface GatewayAzureEgressPrivateLinkGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway#region Gateway#region}
  */
  readonly region: string;
}

export function gatewayAzureEgressPrivateLinkGatewayToTerraform(struct?: GatewayAzureEgressPrivateLinkGatewayOutputReference | GatewayAzureEgressPrivateLinkGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function gatewayAzureEgressPrivateLinkGatewayToHclTerraform(struct?: GatewayAzureEgressPrivateLinkGatewayOutputReference | GatewayAzureEgressPrivateLinkGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayAzureEgressPrivateLinkGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayAzureEgressPrivateLinkGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayAzureEgressPrivateLinkGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // subscription - computed: true, optional: false, required: false
  public get subscription() {
    return this.getStringAttribute('subscription');
  }
}
export interface GatewayEnvironment {
  /**
  * The unique identifier for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway#id Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function gatewayEnvironmentToTerraform(struct?: GatewayEnvironmentOutputReference | GatewayEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayEnvironmentToHclTerraform(struct?: GatewayEnvironmentOutputReference | GatewayEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway confluent_gateway}
*/
export class Gateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gateway to import
  * @param importFromId The id of the existing Gateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/gateway confluent_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_gateway',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.51.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._awsEgressPrivateLinkGateway.internalValue = config.awsEgressPrivateLinkGateway;
    this._awsPrivateNetworkInterfaceGateway.internalValue = config.awsPrivateNetworkInterfaceGateway;
    this._azureEgressPrivateLinkGateway.internalValue = config.azureEgressPrivateLinkGateway;
    this._environment.internalValue = config.environment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // aws_egress_private_link_gateway - computed: false, optional: true, required: false
  private _awsEgressPrivateLinkGateway = new GatewayAwsEgressPrivateLinkGatewayOutputReference(this, "aws_egress_private_link_gateway");
  public get awsEgressPrivateLinkGateway() {
    return this._awsEgressPrivateLinkGateway;
  }
  public putAwsEgressPrivateLinkGateway(value: GatewayAwsEgressPrivateLinkGateway) {
    this._awsEgressPrivateLinkGateway.internalValue = value;
  }
  public resetAwsEgressPrivateLinkGateway() {
    this._awsEgressPrivateLinkGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEgressPrivateLinkGatewayInput() {
    return this._awsEgressPrivateLinkGateway.internalValue;
  }

  // aws_private_network_interface_gateway - computed: false, optional: true, required: false
  private _awsPrivateNetworkInterfaceGateway = new GatewayAwsPrivateNetworkInterfaceGatewayOutputReference(this, "aws_private_network_interface_gateway");
  public get awsPrivateNetworkInterfaceGateway() {
    return this._awsPrivateNetworkInterfaceGateway;
  }
  public putAwsPrivateNetworkInterfaceGateway(value: GatewayAwsPrivateNetworkInterfaceGateway) {
    this._awsPrivateNetworkInterfaceGateway.internalValue = value;
  }
  public resetAwsPrivateNetworkInterfaceGateway() {
    this._awsPrivateNetworkInterfaceGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPrivateNetworkInterfaceGatewayInput() {
    return this._awsPrivateNetworkInterfaceGateway.internalValue;
  }

  // azure_egress_private_link_gateway - computed: false, optional: true, required: false
  private _azureEgressPrivateLinkGateway = new GatewayAzureEgressPrivateLinkGatewayOutputReference(this, "azure_egress_private_link_gateway");
  public get azureEgressPrivateLinkGateway() {
    return this._azureEgressPrivateLinkGateway;
  }
  public putAzureEgressPrivateLinkGateway(value: GatewayAzureEgressPrivateLinkGateway) {
    this._azureEgressPrivateLinkGateway.internalValue = value;
  }
  public resetAzureEgressPrivateLinkGateway() {
    this._azureEgressPrivateLinkGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEgressPrivateLinkGatewayInput() {
    return this._azureEgressPrivateLinkGateway.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new GatewayEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: GatewayEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      aws_egress_private_link_gateway: gatewayAwsEgressPrivateLinkGatewayToTerraform(this._awsEgressPrivateLinkGateway.internalValue),
      aws_private_network_interface_gateway: gatewayAwsPrivateNetworkInterfaceGatewayToTerraform(this._awsPrivateNetworkInterfaceGateway.internalValue),
      azure_egress_private_link_gateway: gatewayAzureEgressPrivateLinkGatewayToTerraform(this._azureEgressPrivateLinkGateway.internalValue),
      environment: gatewayEnvironmentToTerraform(this._environment.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      aws_egress_private_link_gateway: {
        value: gatewayAwsEgressPrivateLinkGatewayToHclTerraform(this._awsEgressPrivateLinkGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayAwsEgressPrivateLinkGatewayList",
      },
      aws_private_network_interface_gateway: {
        value: gatewayAwsPrivateNetworkInterfaceGatewayToHclTerraform(this._awsPrivateNetworkInterfaceGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayAwsPrivateNetworkInterfaceGatewayList",
      },
      azure_egress_private_link_gateway: {
        value: gatewayAzureEgressPrivateLinkGatewayToHclTerraform(this._azureEgressPrivateLinkGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayAzureEgressPrivateLinkGatewayList",
      },
      environment: {
        value: gatewayEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayEnvironmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
