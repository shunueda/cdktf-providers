// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/aligreen_callback
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AligreenCallbackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/aligreen_callback#callback_name AligreenCallback#callback_name}
  */
  readonly callbackName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/aligreen_callback#callback_suggestions AligreenCallback#callback_suggestions}
  */
  readonly callbackSuggestions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/aligreen_callback#callback_types AligreenCallback#callback_types}
  */
  readonly callbackTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/aligreen_callback#callback_url AligreenCallback#callback_url}
  */
  readonly callbackUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/aligreen_callback#crypt_type AligreenCallback#crypt_type}
  */
  readonly cryptType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/aligreen_callback#id AligreenCallback#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/aligreen_callback#timeouts AligreenCallback#timeouts}
  */
  readonly timeouts?: AligreenCallbackTimeouts;
}
export interface AligreenCallbackTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/aligreen_callback#create AligreenCallback#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/aligreen_callback#delete AligreenCallback#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/aligreen_callback#update AligreenCallback#update}
  */
  readonly update?: string;
}

export function aligreenCallbackTimeoutsToTerraform(struct?: AligreenCallbackTimeouts | cdktf.IResolvable): any {
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


export function aligreenCallbackTimeoutsToHclTerraform(struct?: AligreenCallbackTimeouts | cdktf.IResolvable): any {
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

export class AligreenCallbackTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AligreenCallbackTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AligreenCallbackTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/aligreen_callback alicloud_aligreen_callback}
*/
export class AligreenCallback extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_aligreen_callback";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AligreenCallback resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AligreenCallback to import
  * @param importFromId The id of the existing AligreenCallback that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/aligreen_callback#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AligreenCallback to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_aligreen_callback", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/aligreen_callback alicloud_aligreen_callback} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AligreenCallbackConfig
  */
  public constructor(scope: Construct, id: string, config: AligreenCallbackConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_aligreen_callback',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._callbackName = config.callbackName;
    this._callbackSuggestions = config.callbackSuggestions;
    this._callbackTypes = config.callbackTypes;
    this._callbackUrl = config.callbackUrl;
    this._cryptType = config.cryptType;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // callback_name - computed: false, optional: false, required: true
  private _callbackName?: string; 
  public get callbackName() {
    return this.getStringAttribute('callback_name');
  }
  public set callbackName(value: string) {
    this._callbackName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackNameInput() {
    return this._callbackName;
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

  // callback_url - computed: false, optional: false, required: true
  private _callbackUrl?: string; 
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }
  public set callbackUrl(value: string) {
    this._callbackUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlInput() {
    return this._callbackUrl;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // crypt_type - computed: false, optional: true, required: false
  private _cryptType?: number; 
  public get cryptType() {
    return this.getNumberAttribute('crypt_type');
  }
  public set cryptType(value: number) {
    this._cryptType = value;
  }
  public resetCryptType() {
    this._cryptType = undefined;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AligreenCallbackTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AligreenCallbackTimeouts) {
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
      callback_name: cdktf.stringToTerraform(this._callbackName),
      callback_suggestions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._callbackSuggestions),
      callback_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._callbackTypes),
      callback_url: cdktf.stringToTerraform(this._callbackUrl),
      crypt_type: cdktf.numberToTerraform(this._cryptType),
      id: cdktf.stringToTerraform(this._id),
      timeouts: aligreenCallbackTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      callback_name: {
        value: cdktf.stringToHclTerraform(this._callbackName),
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
      callback_url: {
        value: cdktf.stringToHclTerraform(this._callbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crypt_type: {
        value: cdktf.numberToHclTerraform(this._cryptType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: aligreenCallbackTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AligreenCallbackTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
