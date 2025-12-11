// https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationGcrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#enabled IntegrationGcr#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#id IntegrationGcr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of repositories to assess
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#limit_by_repositories IntegrationGcr#limit_by_repositories}
  */
  readonly limitByRepositories?: string[];
  /**
  * A list of image tags to limit the assessment of images with matching tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#limit_by_tags IntegrationGcr#limit_by_tags}
  */
  readonly limitByTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#limit_num_imgs IntegrationGcr#limit_num_imgs}
  */
  readonly limitNumImgs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#name IntegrationGcr#name}
  */
  readonly name: string;
  /**
  * Enable program language scanning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#non_os_package_support IntegrationGcr#non_os_package_support}
  */
  readonly nonOsPackageSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#registry_domain IntegrationGcr#registry_domain}
  */
  readonly registryDomain: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#credentials IntegrationGcr#credentials}
  */
  readonly credentials: IntegrationGcrCredentials;
  /**
  * limit_by_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#limit_by_label IntegrationGcr#limit_by_label}
  */
  readonly limitByLabel?: IntegrationGcrLimitByLabel[] | cdktf.IResolvable;
}
export interface IntegrationGcrCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#client_email IntegrationGcr#client_email}
  */
  readonly clientEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#client_id IntegrationGcr#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#private_key IntegrationGcr#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#private_key_id IntegrationGcr#private_key_id}
  */
  readonly privateKeyId: string;
}

export function integrationGcrCredentialsToTerraform(struct?: IntegrationGcrCredentialsOutputReference | IntegrationGcrCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_email: cdktf.stringToTerraform(struct!.clientEmail),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_id: cdktf.stringToTerraform(struct!.privateKeyId),
  }
}


export function integrationGcrCredentialsToHclTerraform(struct?: IntegrationGcrCredentialsOutputReference | IntegrationGcrCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_email: {
      value: cdktf.stringToHclTerraform(struct!.clientEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_id: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationGcrCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationGcrCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEmail = this._clientEmail;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyId = this._privateKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationGcrCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientEmail = undefined;
      this._clientId = undefined;
      this._privateKey = undefined;
      this._privateKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientEmail = value.clientEmail;
      this._clientId = value.clientId;
      this._privateKey = value.privateKey;
      this._privateKeyId = value.privateKeyId;
    }
  }

  // client_email - computed: false, optional: false, required: true
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: false, optional: false, required: true
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }
}
export interface IntegrationGcrLimitByLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#key IntegrationGcr#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#value IntegrationGcr#value}
  */
  readonly value: string;
}

export function integrationGcrLimitByLabelToTerraform(struct?: IntegrationGcrLimitByLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function integrationGcrLimitByLabelToHclTerraform(struct?: IntegrationGcrLimitByLabel | cdktf.IResolvable): any {
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

export class IntegrationGcrLimitByLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationGcrLimitByLabel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IntegrationGcrLimitByLabel | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IntegrationGcrLimitByLabelList extends cdktf.ComplexList {
  public internalValue? : IntegrationGcrLimitByLabel[] | cdktf.IResolvable

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
  public get(index: number): IntegrationGcrLimitByLabelOutputReference {
    return new IntegrationGcrLimitByLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr lacework_integration_gcr}
*/
export class IntegrationGcr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_integration_gcr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationGcr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationGcr to import
  * @param importFromId The id of the existing IntegrationGcr that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationGcr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_integration_gcr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcr lacework_integration_gcr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationGcrConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationGcrConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_integration_gcr',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.11',
        providerVersionConstraint: '2.0.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._limitByRepositories = config.limitByRepositories;
    this._limitByTags = config.limitByTags;
    this._limitNumImgs = config.limitNumImgs;
    this._name = config.name;
    this._nonOsPackageSupport = config.nonOsPackageSupport;
    this._registryDomain = config.registryDomain;
    this._credentials.internalValue = config.credentials;
    this._limitByLabel.internalValue = config.limitByLabel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_or_updated_by - computed: true, optional: false, required: false
  public get createdOrUpdatedBy() {
    return this.getStringAttribute('created_or_updated_by');
  }

  // created_or_updated_time - computed: true, optional: false, required: false
  public get createdOrUpdatedTime() {
    return this.getStringAttribute('created_or_updated_time');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // intg_guid - computed: true, optional: false, required: false
  public get intgGuid() {
    return this.getStringAttribute('intg_guid');
  }

  // limit_by_repositories - computed: false, optional: true, required: false
  private _limitByRepositories?: string[]; 
  public get limitByRepositories() {
    return this.getListAttribute('limit_by_repositories');
  }
  public set limitByRepositories(value: string[]) {
    this._limitByRepositories = value;
  }
  public resetLimitByRepositories() {
    this._limitByRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitByRepositoriesInput() {
    return this._limitByRepositories;
  }

  // limit_by_tags - computed: false, optional: true, required: false
  private _limitByTags?: string[]; 
  public get limitByTags() {
    return this.getListAttribute('limit_by_tags');
  }
  public set limitByTags(value: string[]) {
    this._limitByTags = value;
  }
  public resetLimitByTags() {
    this._limitByTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitByTagsInput() {
    return this._limitByTags;
  }

  // limit_num_imgs - computed: false, optional: true, required: false
  private _limitNumImgs?: number; 
  public get limitNumImgs() {
    return this.getNumberAttribute('limit_num_imgs');
  }
  public set limitNumImgs(value: number) {
    this._limitNumImgs = value;
  }
  public resetLimitNumImgs() {
    this._limitNumImgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitNumImgsInput() {
    return this._limitNumImgs;
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

  // non_os_package_support - computed: false, optional: true, required: false
  private _nonOsPackageSupport?: boolean | cdktf.IResolvable; 
  public get nonOsPackageSupport() {
    return this.getBooleanAttribute('non_os_package_support');
  }
  public set nonOsPackageSupport(value: boolean | cdktf.IResolvable) {
    this._nonOsPackageSupport = value;
  }
  public resetNonOsPackageSupport() {
    this._nonOsPackageSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonOsPackageSupportInput() {
    return this._nonOsPackageSupport;
  }

  // org_level - computed: true, optional: false, required: false
  public get orgLevel() {
    return this.getBooleanAttribute('org_level');
  }

  // registry_domain - computed: false, optional: false, required: true
  private _registryDomain?: string; 
  public get registryDomain() {
    return this.getStringAttribute('registry_domain');
  }
  public set registryDomain(value: string) {
    this._registryDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryDomainInput() {
    return this._registryDomain;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new IntegrationGcrCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationGcrCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // limit_by_label - computed: false, optional: true, required: false
  private _limitByLabel = new IntegrationGcrLimitByLabelList(this, "limit_by_label", true);
  public get limitByLabel() {
    return this._limitByLabel;
  }
  public putLimitByLabel(value: IntegrationGcrLimitByLabel[] | cdktf.IResolvable) {
    this._limitByLabel.internalValue = value;
  }
  public resetLimitByLabel() {
    this._limitByLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitByLabelInput() {
    return this._limitByLabel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      limit_by_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._limitByRepositories),
      limit_by_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._limitByTags),
      limit_num_imgs: cdktf.numberToTerraform(this._limitNumImgs),
      name: cdktf.stringToTerraform(this._name),
      non_os_package_support: cdktf.booleanToTerraform(this._nonOsPackageSupport),
      registry_domain: cdktf.stringToTerraform(this._registryDomain),
      credentials: integrationGcrCredentialsToTerraform(this._credentials.internalValue),
      limit_by_label: cdktf.listMapper(integrationGcrLimitByLabelToTerraform, true)(this._limitByLabel.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      limit_by_repositories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._limitByRepositories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      limit_by_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._limitByTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      limit_num_imgs: {
        value: cdktf.numberToHclTerraform(this._limitNumImgs),
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
      non_os_package_support: {
        value: cdktf.booleanToHclTerraform(this._nonOsPackageSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      registry_domain: {
        value: cdktf.stringToHclTerraform(this._registryDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: integrationGcrCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationGcrCredentialsList",
      },
      limit_by_label: {
        value: cdktf.listMapperHcl(integrationGcrLimitByLabelToHclTerraform, true)(this._limitByLabel.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationGcrLimitByLabelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
