// https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * IDs of AWS accounts included in this deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#aws_account_ids Deployment#aws_account_ids}
  */
  readonly awsAccountIds?: string[];
  /**
  * AWS regions included in this deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#aws_regions Deployment#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * IDs of AWS subnets included in this deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#aws_subnet_ids Deployment#aws_subnet_ids}
  */
  readonly awsSubnetIds?: string[];
  /**
  * AWS tags included in this deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#aws_tags Deployment#aws_tags}
  */
  readonly awsTags?: DeploymentAwsTags[] | cdktf.IResolvable;
  /**
  * IDs of AWS VPCs included in this deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#aws_vpc_ids Deployment#aws_vpc_ids}
  */
  readonly awsVpcIds?: string[];
  /**
  * Azure regions included in this deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#azure_regions Deployment#azure_regions}
  */
  readonly azureRegions?: string[];
  /**
  * IDs of Azure subnets included in this deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#azure_subnet_ids Deployment#azure_subnet_ids}
  */
  readonly azureSubnetIds?: string[];
  /**
  * IDs of Azure subscriptions included in this deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#azure_subscription_ids Deployment#azure_subscription_ids}
  */
  readonly azureSubscriptionIds?: string[];
  /**
  * Azure tags included in this deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#azure_tags Deployment#azure_tags}
  */
  readonly azureTags?: DeploymentAzureTags[] | cdktf.IResolvable;
  /**
  * IDs of Azure VNets included in this deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#azure_vnet_ids Deployment#azure_vnet_ids}
  */
  readonly azureVnetIds?: string[];
  /**
  * Description of Cloudsecure deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#description Deployment#description}
  */
  readonly description?: string;
  /**
  * Name of the CloudSecure deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#name Deployment#name}
  */
  readonly name: string;
}
export interface DeploymentAwsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#value Deployment#value}
  */
  readonly value?: string;
}

export function deploymentAwsTagsToTerraform(struct?: DeploymentAwsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deploymentAwsTagsToHclTerraform(struct?: DeploymentAwsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAwsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAwsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAwsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeploymentAwsTagsList extends cdktf.ComplexList {
  public internalValue? : DeploymentAwsTags[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAwsTagsOutputReference {
    return new DeploymentAwsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAzureTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#value Deployment#value}
  */
  readonly value?: string;
}

export function deploymentAzureTagsToTerraform(struct?: DeploymentAzureTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deploymentAzureTagsToHclTerraform(struct?: DeploymentAzureTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAzureTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAzureTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAzureTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeploymentAzureTagsList extends cdktf.ComplexList {
  public internalValue? : DeploymentAzureTags[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAzureTagsOutputReference {
    return new DeploymentAzureTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment illumio-cloudsecure_deployment}
*/
export class Deployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-cloudsecure_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Deployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Deployment to import
  * @param importFromId The id of the existing Deployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Deployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-cloudsecure_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/deployment illumio-cloudsecure_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-cloudsecure_deployment',
      terraformGeneratorMetadata: {
        providerName: 'illumio-cloudsecure',
        providerVersion: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccountIds = config.awsAccountIds;
    this._awsRegions = config.awsRegions;
    this._awsSubnetIds = config.awsSubnetIds;
    this._awsTags.internalValue = config.awsTags;
    this._awsVpcIds = config.awsVpcIds;
    this._azureRegions = config.azureRegions;
    this._azureSubnetIds = config.azureSubnetIds;
    this._azureSubscriptionIds = config.azureSubscriptionIds;
    this._azureTags.internalValue = config.azureTags;
    this._azureVnetIds = config.azureVnetIds;
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_ids - computed: false, optional: true, required: false
  private _awsAccountIds?: string[]; 
  public get awsAccountIds() {
    return this.getListAttribute('aws_account_ids');
  }
  public set awsAccountIds(value: string[]) {
    this._awsAccountIds = value;
  }
  public resetAwsAccountIds() {
    this._awsAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdsInput() {
    return this._awsAccountIds;
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // aws_subnet_ids - computed: false, optional: true, required: false
  private _awsSubnetIds?: string[]; 
  public get awsSubnetIds() {
    return this.getListAttribute('aws_subnet_ids');
  }
  public set awsSubnetIds(value: string[]) {
    this._awsSubnetIds = value;
  }
  public resetAwsSubnetIds() {
    this._awsSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSubnetIdsInput() {
    return this._awsSubnetIds;
  }

  // aws_tags - computed: false, optional: true, required: false
  private _awsTags = new DeploymentAwsTagsList(this, "aws_tags", false);
  public get awsTags() {
    return this._awsTags;
  }
  public putAwsTags(value: DeploymentAwsTags[] | cdktf.IResolvable) {
    this._awsTags.internalValue = value;
  }
  public resetAwsTags() {
    this._awsTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTagsInput() {
    return this._awsTags.internalValue;
  }

  // aws_vpc_ids - computed: false, optional: true, required: false
  private _awsVpcIds?: string[]; 
  public get awsVpcIds() {
    return this.getListAttribute('aws_vpc_ids');
  }
  public set awsVpcIds(value: string[]) {
    this._awsVpcIds = value;
  }
  public resetAwsVpcIds() {
    this._awsVpcIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpcIdsInput() {
    return this._awsVpcIds;
  }

  // azure_regions - computed: false, optional: true, required: false
  private _azureRegions?: string[]; 
  public get azureRegions() {
    return this.getListAttribute('azure_regions');
  }
  public set azureRegions(value: string[]) {
    this._azureRegions = value;
  }
  public resetAzureRegions() {
    this._azureRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRegionsInput() {
    return this._azureRegions;
  }

  // azure_subnet_ids - computed: false, optional: true, required: false
  private _azureSubnetIds?: string[]; 
  public get azureSubnetIds() {
    return this.getListAttribute('azure_subnet_ids');
  }
  public set azureSubnetIds(value: string[]) {
    this._azureSubnetIds = value;
  }
  public resetAzureSubnetIds() {
    this._azureSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubnetIdsInput() {
    return this._azureSubnetIds;
  }

  // azure_subscription_ids - computed: false, optional: true, required: false
  private _azureSubscriptionIds?: string[]; 
  public get azureSubscriptionIds() {
    return this.getListAttribute('azure_subscription_ids');
  }
  public set azureSubscriptionIds(value: string[]) {
    this._azureSubscriptionIds = value;
  }
  public resetAzureSubscriptionIds() {
    this._azureSubscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubscriptionIdsInput() {
    return this._azureSubscriptionIds;
  }

  // azure_tags - computed: false, optional: true, required: false
  private _azureTags = new DeploymentAzureTagsList(this, "azure_tags", false);
  public get azureTags() {
    return this._azureTags;
  }
  public putAzureTags(value: DeploymentAzureTags[] | cdktf.IResolvable) {
    this._azureTags.internalValue = value;
  }
  public resetAzureTags() {
    this._azureTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTagsInput() {
    return this._azureTags.internalValue;
  }

  // azure_vnet_ids - computed: false, optional: true, required: false
  private _azureVnetIds?: string[]; 
  public get azureVnetIds() {
    return this.getListAttribute('azure_vnet_ids');
  }
  public set azureVnetIds(value: string[]) {
    this._azureVnetIds = value;
  }
  public resetAzureVnetIds() {
    this._azureVnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVnetIdsInput() {
    return this._azureVnetIds;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsAccountIds),
      aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsRegions),
      aws_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsSubnetIds),
      aws_tags: cdktf.listMapper(deploymentAwsTagsToTerraform, false)(this._awsTags.internalValue),
      aws_vpc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsVpcIds),
      azure_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._azureRegions),
      azure_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._azureSubnetIds),
      azure_subscription_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._azureSubscriptionIds),
      azure_tags: cdktf.listMapper(deploymentAzureTagsToTerraform, false)(this._azureTags.internalValue),
      azure_vnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._azureVnetIds),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsAccountIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsSubnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_tags: {
        value: cdktf.listMapperHcl(deploymentAwsTagsToHclTerraform, false)(this._awsTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeploymentAwsTagsList",
      },
      aws_vpc_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsVpcIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      azure_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._azureRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      azure_subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._azureSubnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      azure_subscription_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._azureSubscriptionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      azure_tags: {
        value: cdktf.listMapperHcl(deploymentAzureTagsToHclTerraform, false)(this._azureTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeploymentAzureTagsList",
      },
      azure_vnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._azureVnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
