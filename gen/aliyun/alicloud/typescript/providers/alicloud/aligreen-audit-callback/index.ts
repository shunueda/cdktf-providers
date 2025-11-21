// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/aligreen_audit_callback
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AligreenAuditCallbackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/aligreen_audit_callback#audit_callback_name AligreenAuditCallback#audit_callback_name}
  */
  readonly auditCallbackName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/aligreen_audit_callback#callback_suggestions AligreenAuditCallback#callback_suggestions}
  */
  readonly callbackSuggestions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/aligreen_audit_callback#callback_types AligreenAuditCallback#callback_types}
  */
  readonly callbackTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/aligreen_audit_callback#crypt_type AligreenAuditCallback#crypt_type}
  */
  readonly cryptType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/aligreen_audit_callback#id AligreenAuditCallback#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/aligreen_audit_callback#url AligreenAuditCallback#url}
  */
  readonly url: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/aligreen_audit_callback#timeouts AligreenAuditCallback#timeouts}
  */
  readonly timeouts?: AligreenAuditCallbackTimeouts;
}
export interface AligreenAuditCallbackTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/aligreen_audit_callback#create AligreenAuditCallback#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/aligreen_audit_callback#delete AligreenAuditCallback#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/aligreen_audit_callback#update AligreenAuditCallback#update}
  */
  readonly update?: string;
}

export function aligreenAuditCallbackTimeoutsToTerraform(struct?: AligreenAuditCallbackTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function aligreenAuditCallbackTimeoutsToHclTerraform(struct?: AligreenAuditCallbackTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AligreenAuditCallbackTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AligreenAuditCallbackTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AligreenAuditCallbackTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/aligreen_audit_callback alicloud_aligreen_audit_callback}
*/
export class AligreenAuditCallback extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_aligreen_audit_callback";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AligreenAuditCallback resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AligreenAuditCallback to import
  * @param importFromId The id of the existing AligreenAuditCallback that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/aligreen_audit_callback#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AligreenAuditCallback to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_aligreen_audit_callback", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/aligreen_audit_callback alicloud_aligreen_audit_callback} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AligreenAuditCallbackConfig
  */
  public constructor(scope: Construct, id: string, config: AligreenAuditCallbackConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_aligreen_audit_callback',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditCallbackName = config.auditCallbackName;
    this._callbackSuggestions = config.callbackSuggestions;
    this._callbackTypes = config.callbackTypes;
    this._cryptType = config.cryptType;
    this._id = config.id;
    this._url = config.url;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_callback_name - computed: false, optional: false, required: true
  private _auditCallbackName?: string; 
  public get auditCallbackName() {
    return this.getStringAttribute('audit_callback_name');
  }
  public set auditCallbackName(value: string) {
    this._auditCallbackName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditCallbackNameInput() {
    return this._auditCallbackName;
  }

  // callback_suggestions - computed: false, optional: false, required: true
  private _callbackSuggestions?: string[]; 
  public get callbackSuggestions() {
    return this.getListAttribute('callback_suggestions');
  }
  public set callbackSuggestions(value: string[]) {
    this._callbackSuggestions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackSuggestionsInput() {
    return this._callbackSuggestions;
  }

  // callback_types - computed: false, optional: false, required: true
  private _callbackTypes?: string[]; 
  public get callbackTypes() {
    return this.getListAttribute('callback_types');
  }
  public set callbackTypes(value: string[]) {
    this._callbackTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackTypesInput() {
    return this._callbackTypes;
  }

  // crypt_type - computed: false, optional: false, required: true
  private _cryptType?: string; 
  public get cryptType() {
    return this.getStringAttribute('crypt_type');
  }
  public set cryptType(value: string) {
    this._cryptType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptTypeInput() {
    return this._cryptType;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AligreenAuditCallbackTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AligreenAuditCallbackTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_callback_name: cdktf.stringToTerraform(this._auditCallbackName),
      callback_suggestions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._callbackSuggestions),
      callback_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._callbackTypes),
      crypt_type: cdktf.stringToTerraform(this._cryptType),
      id: cdktf.stringToTerraform(this._id),
      url: cdktf.stringToTerraform(this._url),
      timeouts: aligreenAuditCallbackTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_callback_name: {
        value: cdktf.stringToHclTerraform(this._auditCallbackName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      callback_suggestions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._callbackSuggestions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      callback_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._callbackTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      crypt_type: {
        value: cdktf.stringToHclTerraform(this._cryptType),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: aligreenAuditCallbackTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AligreenAuditCallbackTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
