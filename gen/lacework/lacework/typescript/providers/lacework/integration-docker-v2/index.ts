// https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationDockerV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2#enabled IntegrationDockerV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2#id IntegrationDockerV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of image tags to limit the assessment of images with matching tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2#limit_by_tags IntegrationDockerV2#limit_by_tags}
  */
  readonly limitByTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2#name IntegrationDockerV2#name}
  */
  readonly name: string;
  /**
  * Enable program language scanning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2#non_os_package_support IntegrationDockerV2#non_os_package_support}
  */
  readonly nonOsPackageSupport?: boolean | cdktf.IResolvable;
  /**
  * Subscribe to registry notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2#notifications IntegrationDockerV2#notifications}
  */
  readonly notifications?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2#password IntegrationDockerV2#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2#registry_domain IntegrationDockerV2#registry_domain}
  */
  readonly registryDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2#ssl IntegrationDockerV2#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2#username IntegrationDockerV2#username}
  */
  readonly username: string;
  /**
  * limit_by_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2#limit_by_label IntegrationDockerV2#limit_by_label}
  */
  readonly limitByLabel?: IntegrationDockerV2LimitByLabel[] | cdktf.IResolvable;
}
export interface IntegrationDockerV2LimitByLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2#key IntegrationDockerV2#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2#value IntegrationDockerV2#value}
  */
  readonly value: string;
}

export function integrationDockerV2LimitByLabelToTerraform(struct?: IntegrationDockerV2LimitByLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function integrationDockerV2LimitByLabelToHclTerraform(struct?: IntegrationDockerV2LimitByLabel | cdktf.IResolvable): any {
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

export class IntegrationDockerV2LimitByLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationDockerV2LimitByLabel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IntegrationDockerV2LimitByLabel | cdktf.IResolvable | undefined) {
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

export class IntegrationDockerV2LimitByLabelList extends cdktf.ComplexList {
  public internalValue? : IntegrationDockerV2LimitByLabel[] | cdktf.IResolvable

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
  public get(index: number): IntegrationDockerV2LimitByLabelOutputReference {
    return new IntegrationDockerV2LimitByLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2 lacework_integration_docker_v2}
*/
export class IntegrationDockerV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_integration_docker_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationDockerV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationDockerV2 to import
  * @param importFromId The id of the existing IntegrationDockerV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationDockerV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_integration_docker_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_docker_v2 lacework_integration_docker_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationDockerV2Config
  */
  public constructor(scope: Construct, id: string, config: IntegrationDockerV2Config) {
    super(scope, id, {
      terraformResourceType: 'lacework_integration_docker_v2',
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
    this._limitByTags = config.limitByTags;
    this._name = config.name;
    this._nonOsPackageSupport = config.nonOsPackageSupport;
    this._notifications = config.notifications;
    this._password = config.password;
    this._registryDomain = config.registryDomain;
    this._ssl = config.ssl;
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

  // notifications - computed: false, optional: true, required: false
  private _notifications?: boolean | cdktf.IResolvable; 
  public get notifications() {
    return this.getBooleanAttribute('notifications');
  }
  public set notifications(value: boolean | cdktf.IResolvable) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
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

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
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
  private _limitByLabel = new IntegrationDockerV2LimitByLabelList(this, "limit_by_label", true);
  public get limitByLabel() {
    return this._limitByLabel;
  }
  public putLimitByLabel(value: IntegrationDockerV2LimitByLabel[] | cdktf.IResolvable) {
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
      limit_by_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._limitByTags),
      name: cdktf.stringToTerraform(this._name),
      non_os_package_support: cdktf.booleanToTerraform(this._nonOsPackageSupport),
      notifications: cdktf.booleanToTerraform(this._notifications),
      password: cdktf.stringToTerraform(this._password),
      registry_domain: cdktf.stringToTerraform(this._registryDomain),
      ssl: cdktf.booleanToTerraform(this._ssl),
      username: cdktf.stringToTerraform(this._username),
      limit_by_label: cdktf.listMapper(integrationDockerV2LimitByLabelToTerraform, true)(this._limitByLabel.internalValue),
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
      limit_by_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._limitByTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      notifications: {
        value: cdktf.booleanToHclTerraform(this._notifications),
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
      registry_domain: {
        value: cdktf.stringToHclTerraform(this._registryDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: cdktf.booleanToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_by_label: {
        value: cdktf.listMapperHcl(integrationDockerV2LimitByLabelToHclTerraform, true)(this._limitByLabel.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationDockerV2LimitByLabelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
