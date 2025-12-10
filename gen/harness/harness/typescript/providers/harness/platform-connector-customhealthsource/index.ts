// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorCustomhealthsourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tags to filter delegates for connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#delegate_selectors PlatformConnectorCustomhealthsource#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#description PlatformConnectorCustomhealthsource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#id PlatformConnectorCustomhealthsource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#identifier PlatformConnectorCustomhealthsource#identifier}
  */
  readonly identifier: string;
  /**
  * HTTP Verb Method for the API Call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#method PlatformConnectorCustomhealthsource#method}
  */
  readonly method: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#name PlatformConnectorCustomhealthsource#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#org_id PlatformConnectorCustomhealthsource#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#project_id PlatformConnectorCustomhealthsource#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#tags PlatformConnectorCustomhealthsource#tags}
  */
  readonly tags?: string[];
  /**
  * URL of the Custom Healthsource controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#url PlatformConnectorCustomhealthsource#url}
  */
  readonly url: string;
  /**
  * Body to be sent with the API Call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#validation_body PlatformConnectorCustomhealthsource#validation_body}
  */
  readonly validationBody?: string;
  /**
  * Path to be added to the base URL for the API Call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#validation_path PlatformConnectorCustomhealthsource#validation_path}
  */
  readonly validationPath?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#headers PlatformConnectorCustomhealthsource#headers}
  */
  readonly headers?: PlatformConnectorCustomhealthsourceHeaders[] | cdktf.IResolvable;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#params PlatformConnectorCustomhealthsource#params}
  */
  readonly params?: PlatformConnectorCustomhealthsourceParams[] | cdktf.IResolvable;
}
export interface PlatformConnectorCustomhealthsourceHeaders {
  /**
  * Reference to the Harness secret containing the encrypted value. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#encrypted_value_ref PlatformConnectorCustomhealthsource#encrypted_value_ref}
  */
  readonly encryptedValueRef?: string;
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#key PlatformConnectorCustomhealthsource#key}
  */
  readonly key: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#value PlatformConnectorCustomhealthsource#value}
  */
  readonly value?: string;
  /**
  * Encrypted value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#value_encrypted PlatformConnectorCustomhealthsource#value_encrypted}
  */
  readonly valueEncrypted?: boolean | cdktf.IResolvable;
}

export function platformConnectorCustomhealthsourceHeadersToTerraform(struct?: PlatformConnectorCustomhealthsourceHeaders | cdktf.IResolvable): any {
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


export function platformConnectorCustomhealthsourceHeadersToHclTerraform(struct?: PlatformConnectorCustomhealthsourceHeaders | cdktf.IResolvable): any {
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

export class PlatformConnectorCustomhealthsourceHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformConnectorCustomhealthsourceHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformConnectorCustomhealthsourceHeaders | cdktf.IResolvable | undefined) {
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

export class PlatformConnectorCustomhealthsourceHeadersList extends cdktf.ComplexList {
  public internalValue? : PlatformConnectorCustomhealthsourceHeaders[] | cdktf.IResolvable

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
  public get(index: number): PlatformConnectorCustomhealthsourceHeadersOutputReference {
    return new PlatformConnectorCustomhealthsourceHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformConnectorCustomhealthsourceParams {
  /**
  * Reference to the Harness secret containing the encrypted value. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#encrypted_value_ref PlatformConnectorCustomhealthsource#encrypted_value_ref}
  */
  readonly encryptedValueRef?: string;
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#key PlatformConnectorCustomhealthsource#key}
  */
  readonly key: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#value PlatformConnectorCustomhealthsource#value}
  */
  readonly value?: string;
  /**
  * Encrypted value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#value_encrypted PlatformConnectorCustomhealthsource#value_encrypted}
  */
  readonly valueEncrypted?: boolean | cdktf.IResolvable;
}

export function platformConnectorCustomhealthsourceParamsToTerraform(struct?: PlatformConnectorCustomhealthsourceParams | cdktf.IResolvable): any {
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


export function platformConnectorCustomhealthsourceParamsToHclTerraform(struct?: PlatformConnectorCustomhealthsourceParams | cdktf.IResolvable): any {
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

export class PlatformConnectorCustomhealthsourceParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformConnectorCustomhealthsourceParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformConnectorCustomhealthsourceParams | cdktf.IResolvable | undefined) {
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

export class PlatformConnectorCustomhealthsourceParamsList extends cdktf.ComplexList {
  public internalValue? : PlatformConnectorCustomhealthsourceParams[] | cdktf.IResolvable

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
  public get(index: number): PlatformConnectorCustomhealthsourceParamsOutputReference {
    return new PlatformConnectorCustomhealthsourceParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource harness_platform_connector_customhealthsource}
*/
export class PlatformConnectorCustomhealthsource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_customhealthsource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorCustomhealthsource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorCustomhealthsource to import
  * @param importFromId The id of the existing PlatformConnectorCustomhealthsource that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorCustomhealthsource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_customhealthsource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_customhealthsource harness_platform_connector_customhealthsource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorCustomhealthsourceConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorCustomhealthsourceConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_customhealthsource',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.4',
        providerVersionConstraint: '0.39.4'
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
    this._method = config.method;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._url = config.url;
    this._validationBody = config.validationBody;
    this._validationPath = config.validationPath;
    this._headers.internalValue = config.headers;
    this._params.internalValue = config.params;
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

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // validation_body - computed: false, optional: true, required: false
  private _validationBody?: string; 
  public get validationBody() {
    return this.getStringAttribute('validation_body');
  }
  public set validationBody(value: string) {
    this._validationBody = value;
  }
  public resetValidationBody() {
    this._validationBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationBodyInput() {
    return this._validationBody;
  }

  // validation_path - computed: false, optional: true, required: false
  private _validationPath?: string; 
  public get validationPath() {
    return this.getStringAttribute('validation_path');
  }
  public set validationPath(value: string) {
    this._validationPath = value;
  }
  public resetValidationPath() {
    this._validationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationPathInput() {
    return this._validationPath;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new PlatformConnectorCustomhealthsourceHeadersList(this, "headers", true);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: PlatformConnectorCustomhealthsourceHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params = new PlatformConnectorCustomhealthsourceParamsList(this, "params", true);
  public get params() {
    return this._params;
  }
  public putParams(value: PlatformConnectorCustomhealthsourceParams[] | cdktf.IResolvable) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
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
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      url: cdktf.stringToTerraform(this._url),
      validation_body: cdktf.stringToTerraform(this._validationBody),
      validation_path: cdktf.stringToTerraform(this._validationPath),
      headers: cdktf.listMapper(platformConnectorCustomhealthsourceHeadersToTerraform, true)(this._headers.internalValue),
      params: cdktf.listMapper(platformConnectorCustomhealthsourceParamsToTerraform, true)(this._params.internalValue),
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
      method: {
        value: cdktf.stringToHclTerraform(this._method),
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
      validation_body: {
        value: cdktf.stringToHclTerraform(this._validationBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_path: {
        value: cdktf.stringToHclTerraform(this._validationPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.listMapperHcl(platformConnectorCustomhealthsourceHeadersToHclTerraform, true)(this._headers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformConnectorCustomhealthsourceHeadersList",
      },
      params: {
        value: cdktf.listMapperHcl(platformConnectorCustomhealthsourceParamsToHclTerraform, true)(this._params.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformConnectorCustomhealthsourceParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
