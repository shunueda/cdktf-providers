// https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateLinkAttachmentConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Private Link Attachment Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection#display_name PrivateLinkAttachmentConnection#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection#id PrivateLinkAttachmentConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection#aws PrivateLinkAttachmentConnection#aws}
  */
  readonly aws?: PrivateLinkAttachmentConnectionAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection#azure PrivateLinkAttachmentConnection#azure}
  */
  readonly azure?: PrivateLinkAttachmentConnectionAzure;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection#environment PrivateLinkAttachmentConnection#environment}
  */
  readonly environment: PrivateLinkAttachmentConnectionEnvironment;
  /**
  * gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection#gcp PrivateLinkAttachmentConnection#gcp}
  */
  readonly gcp?: PrivateLinkAttachmentConnectionGcp;
  /**
  * private_link_attachment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection#private_link_attachment PrivateLinkAttachmentConnection#private_link_attachment}
  */
  readonly privateLinkAttachment: PrivateLinkAttachmentConnectionPrivateLinkAttachment;
}
export interface PrivateLinkAttachmentConnectionAws {
  /**
  * Id of a VPC Endpoint that is connected to the VPC Endpoint service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection#vpc_endpoint_id PrivateLinkAttachmentConnection#vpc_endpoint_id}
  */
  readonly vpcEndpointId: string;
}

export function privateLinkAttachmentConnectionAwsToTerraform(struct?: PrivateLinkAttachmentConnectionAwsOutputReference | PrivateLinkAttachmentConnectionAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_endpoint_id: cdktf.stringToTerraform(struct!.vpcEndpointId),
  }
}


export function privateLinkAttachmentConnectionAwsToHclTerraform(struct?: PrivateLinkAttachmentConnectionAwsOutputReference | PrivateLinkAttachmentConnectionAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpc_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateLinkAttachmentConnectionAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivateLinkAttachmentConnectionAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointId = this._vpcEndpointId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateLinkAttachmentConnectionAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vpcEndpointId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vpcEndpointId = value.vpcEndpointId;
    }
  }

  // vpc_endpoint_id - computed: false, optional: false, required: true
  private _vpcEndpointId?: string; 
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }
}
export interface PrivateLinkAttachmentConnectionAzure {
  /**
  * Resource Id of the PrivateEndpoint that is connected to the PrivateLink service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection#private_endpoint_resource_id PrivateLinkAttachmentConnection#private_endpoint_resource_id}
  */
  readonly privateEndpointResourceId: string;
}

export function privateLinkAttachmentConnectionAzureToTerraform(struct?: PrivateLinkAttachmentConnectionAzureOutputReference | PrivateLinkAttachmentConnectionAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_endpoint_resource_id: cdktf.stringToTerraform(struct!.privateEndpointResourceId),
  }
}


export function privateLinkAttachmentConnectionAzureToHclTerraform(struct?: PrivateLinkAttachmentConnectionAzureOutputReference | PrivateLinkAttachmentConnectionAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_endpoint_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateLinkAttachmentConnectionAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivateLinkAttachmentConnectionAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateEndpointResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointResourceId = this._privateEndpointResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateLinkAttachmentConnectionAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateEndpointResourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateEndpointResourceId = value.privateEndpointResourceId;
    }
  }

  // private_endpoint_resource_id - computed: false, optional: false, required: true
  private _privateEndpointResourceId?: string; 
  public get privateEndpointResourceId() {
    return this.getStringAttribute('private_endpoint_resource_id');
  }
  public set privateEndpointResourceId(value: string) {
    this._privateEndpointResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointResourceIdInput() {
    return this._privateEndpointResourceId;
  }
}
export interface PrivateLinkAttachmentConnectionEnvironment {
  /**
  * The unique identifier for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection#id PrivateLinkAttachmentConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function privateLinkAttachmentConnectionEnvironmentToTerraform(struct?: PrivateLinkAttachmentConnectionEnvironmentOutputReference | PrivateLinkAttachmentConnectionEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function privateLinkAttachmentConnectionEnvironmentToHclTerraform(struct?: PrivateLinkAttachmentConnectionEnvironmentOutputReference | PrivateLinkAttachmentConnectionEnvironment): any {
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

export class PrivateLinkAttachmentConnectionEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivateLinkAttachmentConnectionEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateLinkAttachmentConnectionEnvironment | undefined) {
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
export interface PrivateLinkAttachmentConnectionGcp {
  /**
  * Id of the Private Service connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection#private_service_connect_connection_id PrivateLinkAttachmentConnection#private_service_connect_connection_id}
  */
  readonly privateServiceConnectConnectionId: string;
}

export function privateLinkAttachmentConnectionGcpToTerraform(struct?: PrivateLinkAttachmentConnectionGcpOutputReference | PrivateLinkAttachmentConnectionGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_service_connect_connection_id: cdktf.stringToTerraform(struct!.privateServiceConnectConnectionId),
  }
}


export function privateLinkAttachmentConnectionGcpToHclTerraform(struct?: PrivateLinkAttachmentConnectionGcpOutputReference | PrivateLinkAttachmentConnectionGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_service_connect_connection_id: {
      value: cdktf.stringToHclTerraform(struct!.privateServiceConnectConnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateLinkAttachmentConnectionGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivateLinkAttachmentConnectionGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateServiceConnectConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateServiceConnectConnectionId = this._privateServiceConnectConnectionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateLinkAttachmentConnectionGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateServiceConnectConnectionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateServiceConnectConnectionId = value.privateServiceConnectConnectionId;
    }
  }

  // private_service_connect_connection_id - computed: false, optional: false, required: true
  private _privateServiceConnectConnectionId?: string; 
  public get privateServiceConnectConnectionId() {
    return this.getStringAttribute('private_service_connect_connection_id');
  }
  public set privateServiceConnectConnectionId(value: string) {
    this._privateServiceConnectConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServiceConnectConnectionIdInput() {
    return this._privateServiceConnectConnectionId;
  }
}
export interface PrivateLinkAttachmentConnectionPrivateLinkAttachment {
  /**
  * The unique identifier for the private link attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection#id PrivateLinkAttachmentConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function privateLinkAttachmentConnectionPrivateLinkAttachmentToTerraform(struct?: PrivateLinkAttachmentConnectionPrivateLinkAttachmentOutputReference | PrivateLinkAttachmentConnectionPrivateLinkAttachment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function privateLinkAttachmentConnectionPrivateLinkAttachmentToHclTerraform(struct?: PrivateLinkAttachmentConnectionPrivateLinkAttachmentOutputReference | PrivateLinkAttachmentConnectionPrivateLinkAttachment): any {
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

export class PrivateLinkAttachmentConnectionPrivateLinkAttachmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivateLinkAttachmentConnectionPrivateLinkAttachment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateLinkAttachmentConnectionPrivateLinkAttachment | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection confluent_private_link_attachment_connection}
*/
export class PrivateLinkAttachmentConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_private_link_attachment_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateLinkAttachmentConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateLinkAttachmentConnection to import
  * @param importFromId The id of the existing PrivateLinkAttachmentConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateLinkAttachmentConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_private_link_attachment_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/private_link_attachment_connection confluent_private_link_attachment_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateLinkAttachmentConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateLinkAttachmentConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_private_link_attachment_connection',
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
    this._aws.internalValue = config.aws;
    this._azure.internalValue = config.azure;
    this._environment.internalValue = config.environment;
    this._gcp.internalValue = config.gcp;
    this._privateLinkAttachment.internalValue = config.privateLinkAttachment;
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

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new PrivateLinkAttachmentConnectionAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: PrivateLinkAttachmentConnectionAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new PrivateLinkAttachmentConnectionAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: PrivateLinkAttachmentConnectionAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new PrivateLinkAttachmentConnectionEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: PrivateLinkAttachmentConnectionEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new PrivateLinkAttachmentConnectionGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: PrivateLinkAttachmentConnectionGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // private_link_attachment - computed: false, optional: false, required: true
  private _privateLinkAttachment = new PrivateLinkAttachmentConnectionPrivateLinkAttachmentOutputReference(this, "private_link_attachment");
  public get privateLinkAttachment() {
    return this._privateLinkAttachment;
  }
  public putPrivateLinkAttachment(value: PrivateLinkAttachmentConnectionPrivateLinkAttachment) {
    this._privateLinkAttachment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkAttachmentInput() {
    return this._privateLinkAttachment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      aws: privateLinkAttachmentConnectionAwsToTerraform(this._aws.internalValue),
      azure: privateLinkAttachmentConnectionAzureToTerraform(this._azure.internalValue),
      environment: privateLinkAttachmentConnectionEnvironmentToTerraform(this._environment.internalValue),
      gcp: privateLinkAttachmentConnectionGcpToTerraform(this._gcp.internalValue),
      private_link_attachment: privateLinkAttachmentConnectionPrivateLinkAttachmentToTerraform(this._privateLinkAttachment.internalValue),
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
      aws: {
        value: privateLinkAttachmentConnectionAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateLinkAttachmentConnectionAwsList",
      },
      azure: {
        value: privateLinkAttachmentConnectionAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateLinkAttachmentConnectionAzureList",
      },
      environment: {
        value: privateLinkAttachmentConnectionEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateLinkAttachmentConnectionEnvironmentList",
      },
      gcp: {
        value: privateLinkAttachmentConnectionGcpToHclTerraform(this._gcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateLinkAttachmentConnectionGcpList",
      },
      private_link_attachment: {
        value: privateLinkAttachmentConnectionPrivateLinkAttachmentToHclTerraform(this._privateLinkAttachment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateLinkAttachmentConnectionPrivateLinkAttachmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
