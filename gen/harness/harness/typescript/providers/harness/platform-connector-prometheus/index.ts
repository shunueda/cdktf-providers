// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorPrometheusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tags to filter delegates for connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#delegate_selectors PlatformConnectorPrometheus#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#description PlatformConnectorPrometheus#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#id PlatformConnectorPrometheus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#identifier PlatformConnectorPrometheus#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#name PlatformConnectorPrometheus#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#org_id PlatformConnectorPrometheus#org_id}
  */
  readonly orgId?: string;
  /**
  * Reference to the Harness secret containing the password. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#password_ref PlatformConnectorPrometheus#password_ref}
  */
  readonly passwordRef?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#project_id PlatformConnectorPrometheus#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#tags PlatformConnectorPrometheus#tags}
  */
  readonly tags?: string[];
  /**
  * URL of the Prometheus server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#url PlatformConnectorPrometheus#url}
  */
  readonly url: string;
  /**
  * User name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#user_name PlatformConnectorPrometheus#user_name}
  */
  readonly userName?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#headers PlatformConnectorPrometheus#headers}
  */
  readonly headers?: PlatformConnectorPrometheusHeaders[] | cdktf.IResolvable;
}
export interface PlatformConnectorPrometheusHeaders {
  /**
  * Reference to the Harness secret containing the encrypted value. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#encrypted_value_ref PlatformConnectorPrometheus#encrypted_value_ref}
  */
  readonly encryptedValueRef?: string;
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#key PlatformConnectorPrometheus#key}
  */
  readonly key: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#value PlatformConnectorPrometheus#value}
  */
  readonly value?: string;
  /**
  * Encrypted value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#value_encrypted PlatformConnectorPrometheus#value_encrypted}
  */
  readonly valueEncrypted?: boolean | cdktf.IResolvable;
}

export function platformConnectorPrometheusHeadersToTerraform(struct?: PlatformConnectorPrometheusHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_value_ref: cdktf.stringToTerraform(struct!.encryptedValueRef),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    value_encrypted: cdktf.booleanToTerraform(struct!.valueEncrypted),
  }
}


export function platformConnectorPrometheusHeadersToHclTerraform(struct?: PlatformConnectorPrometheusHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_value_ref: {
      value: cdktf.stringToHclTerraform(struct!.encryptedValueRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    value_encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.valueEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorPrometheusHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformConnectorPrometheusHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedValueRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedValueRef = this._encryptedValueRef;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueEncrypted = this._valueEncrypted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorPrometheusHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedValueRef = undefined;
      this._key = undefined;
      this._value = undefined;
      this._valueEncrypted = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptedValueRef = value.encryptedValueRef;
      this._key = value.key;
      this._value = value.value;
      this._valueEncrypted = value.valueEncrypted;
    }
  }

  // encrypted_value_ref - computed: false, optional: true, required: false
  private _encryptedValueRef?: string; 
  public get encryptedValueRef() {
    return this.getStringAttribute('encrypted_value_ref');
  }
  public set encryptedValueRef(value: string) {
    this._encryptedValueRef = value;
  }
  public resetEncryptedValueRef() {
    this._encryptedValueRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedValueRefInput() {
    return this._encryptedValueRef;
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

  // value_encrypted - computed: false, optional: true, required: false
  private _valueEncrypted?: boolean | cdktf.IResolvable; 
  public get valueEncrypted() {
    return this.getBooleanAttribute('value_encrypted');
  }
  public set valueEncrypted(value: boolean | cdktf.IResolvable) {
    this._valueEncrypted = value;
  }
  public resetValueEncrypted() {
    this._valueEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueEncryptedInput() {
    return this._valueEncrypted;
  }
}

export class PlatformConnectorPrometheusHeadersList extends cdktf.ComplexList {
  public internalValue? : PlatformConnectorPrometheusHeaders[] | cdktf.IResolvable

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
  public get(index: number): PlatformConnectorPrometheusHeadersOutputReference {
    return new PlatformConnectorPrometheusHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus harness_platform_connector_prometheus}
*/
export class PlatformConnectorPrometheus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_prometheus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorPrometheus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorPrometheus to import
  * @param importFromId The id of the existing PlatformConnectorPrometheus that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorPrometheus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_prometheus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_prometheus harness_platform_connector_prometheus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorPrometheusConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorPrometheusConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_prometheus',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delegateSelectors = config.delegateSelectors;
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._passwordRef = config.passwordRef;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._url = config.url;
    this._userName = config.userName;
    this._headers.internalValue = config.headers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // password_ref - computed: false, optional: true, required: false
  private _passwordRef?: string; 
  public get passwordRef() {
    return this.getStringAttribute('password_ref');
  }
  public set passwordRef(value: string) {
    this._passwordRef = value;
  }
  public resetPasswordRef() {
    this._passwordRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRefInput() {
    return this._passwordRef;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new PlatformConnectorPrometheusHeadersList(this, "headers", true);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: PlatformConnectorPrometheusHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      password_ref: cdktf.stringToTerraform(this._passwordRef),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      url: cdktf.stringToTerraform(this._url),
      user_name: cdktf.stringToTerraform(this._userName),
      headers: cdktf.listMapper(platformConnectorPrometheusHeadersToTerraform, true)(this._headers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegate_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegateSelectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_ref: {
        value: cdktf.stringToHclTerraform(this._passwordRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.listMapperHcl(platformConnectorPrometheusHeadersToHclTerraform, true)(this._headers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformConnectorPrometheusHeadersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
