// https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationDockerHubConfig extends cdktf.TerraformMetaArguments {
  /**
  * The state of the external integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub#enabled IntegrationDockerHub#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub#id IntegrationDockerHub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of repositories to assess
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub#limit_by_repositories IntegrationDockerHub#limit_by_repositories}
  */
  readonly limitByRepositories?: string[];
  /**
  * A list of image tags to limit the assessment of images with matching tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub#limit_by_tags IntegrationDockerHub#limit_by_tags}
  */
  readonly limitByTags?: string[];
  /**
  * The maximum number of newest container images to assess per repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub#limit_num_imgs IntegrationDockerHub#limit_num_imgs}
  */
  readonly limitNumImgs?: number;
  /**
  * The Docker Hub integration name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub#name IntegrationDockerHub#name}
  */
  readonly name: string;
  /**
  * Enable program language scanning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub#non_os_package_support IntegrationDockerHub#non_os_package_support}
  */
  readonly nonOsPackageSupport?: boolean | cdktf.IResolvable;
  /**
  * The password for the specified Docker Hub user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub#password IntegrationDockerHub#password}
  */
  readonly password: string;
  /**
  * The Docker user that has at least read-only permissions to the Docker Hub container repositories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub#username IntegrationDockerHub#username}
  */
  readonly username: string;
  /**
  * limit_by_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub#limit_by_label IntegrationDockerHub#limit_by_label}
  */
  readonly limitByLabel?: IntegrationDockerHubLimitByLabel[] | cdktf.IResolvable;
}
export interface IntegrationDockerHubLimitByLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub#key IntegrationDockerHub#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub#value IntegrationDockerHub#value}
  */
  readonly value: string;
}

export function integrationDockerHubLimitByLabelToTerraform(struct?: IntegrationDockerHubLimitByLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function integrationDockerHubLimitByLabelToHclTerraform(struct?: IntegrationDockerHubLimitByLabel | cdktf.IResolvable): any {
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

export class IntegrationDockerHubLimitByLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationDockerHubLimitByLabel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IntegrationDockerHubLimitByLabel | cdktf.IResolvable | undefined) {
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

export class IntegrationDockerHubLimitByLabelList extends cdktf.ComplexList {
  public internalValue? : IntegrationDockerHubLimitByLabel[] | cdktf.IResolvable

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
  public get(index: number): IntegrationDockerHubLimitByLabelOutputReference {
    return new IntegrationDockerHubLimitByLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub lacework_integration_docker_hub}
*/
export class IntegrationDockerHub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_integration_docker_hub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationDockerHub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationDockerHub to import
  * @param importFromId The id of the existing IntegrationDockerHub that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationDockerHub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_integration_docker_hub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_docker_hub lacework_integration_docker_hub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationDockerHubConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationDockerHubConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_integration_docker_hub',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.10',
        providerVersionConstraint: '2.0.10'
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
    this._password = config.password;
    this._username = config.username;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // limit_by_label - computed: false, optional: true, required: false
  private _limitByLabel = new IntegrationDockerHubLimitByLabelList(this, "limit_by_label", true);
  public get limitByLabel() {
    return this._limitByLabel;
  }
  public putLimitByLabel(value: IntegrationDockerHubLimitByLabel[] | cdktf.IResolvable) {
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
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      limit_by_label: cdktf.listMapper(integrationDockerHubLimitByLabelToTerraform, true)(this._limitByLabel.internalValue),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_by_label: {
        value: cdktf.listMapperHcl(integrationDockerHubLimitByLabelToHclTerraform, true)(this._limitByLabel.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationDockerHubLimitByLabelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
