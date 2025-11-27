// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/monolith_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZentralMonolithRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Azure Blob Storage backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/monolith_repository#azure DataZentralMonolithRepository#azure}
  */
  readonly azure?: DataZentralMonolithRepositoryAzure;
  /**
  * `ID` of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/monolith_repository#id DataZentralMonolithRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/monolith_repository#name DataZentralMonolithRepository#name}
  */
  readonly name?: string;
}
export interface DataZentralMonolithRepositoryAzure {
}

export function dataZentralMonolithRepositoryAzureToTerraform(struct?: DataZentralMonolithRepositoryAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZentralMonolithRepositoryAzureToHclTerraform(struct?: DataZentralMonolithRepositoryAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZentralMonolithRepositoryAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataZentralMonolithRepositoryAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZentralMonolithRepositoryAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getStringAttribute('container');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // storage_account - computed: true, optional: false, required: false
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export interface DataZentralMonolithRepositoryS3 {
}

export function dataZentralMonolithRepositoryS3ToTerraform(struct?: DataZentralMonolithRepositoryS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZentralMonolithRepositoryS3ToHclTerraform(struct?: DataZentralMonolithRepositoryS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZentralMonolithRepositoryS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataZentralMonolithRepositoryS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZentralMonolithRepositoryS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // assume_role_arn - computed: true, optional: false, required: false
  public get assumeRoleArn() {
    return this.getStringAttribute('assume_role_arn');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // cloudfront_domain - computed: true, optional: false, required: false
  public get cloudfrontDomain() {
    return this.getStringAttribute('cloudfront_domain');
  }

  // cloudfront_key_id - computed: true, optional: false, required: false
  public get cloudfrontKeyId() {
    return this.getStringAttribute('cloudfront_key_id');
  }

  // cloudfront_privkey_pem - computed: true, optional: false, required: false
  public get cloudfrontPrivkeyPem() {
    return this.getStringAttribute('cloudfront_privkey_pem');
  }

  // endpoint_url - computed: true, optional: false, required: false
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }

  // signature_version - computed: true, optional: false, required: false
  public get signatureVersion() {
    return this.getStringAttribute('signature_version');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/monolith_repository zentral_monolith_repository}
*/
export class DataZentralMonolithRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_monolith_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZentralMonolithRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZentralMonolithRepository to import
  * @param importFromId The id of the existing DataZentralMonolithRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/monolith_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZentralMonolithRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_monolith_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/monolith_repository zentral_monolith_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZentralMonolithRepositoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZentralMonolithRepositoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zentral_monolith_repository',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.65',
        providerVersionConstraint: '0.1.65'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azure.internalValue = config.azure;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure - computed: false, optional: true, required: false
  private _azure = new DataZentralMonolithRepositoryAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataZentralMonolithRepositoryAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // backend - computed: true, optional: false, required: false
  public get backend() {
    return this.getStringAttribute('backend');
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // meta_business_unit_id - computed: true, optional: false, required: false
  public get metaBusinessUnitId() {
    return this.getNumberAttribute('meta_business_unit_id');
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

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataZentralMonolithRepositoryS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure: dataZentralMonolithRepositoryAzureToTerraform(this._azure.internalValue),
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure: {
        value: dataZentralMonolithRepositoryAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataZentralMonolithRepositoryAzure",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
