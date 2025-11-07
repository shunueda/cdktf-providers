// https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LockboxSecretVersionHashedConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Yandex Cloud Lockbox secret version description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#description LockboxSecretVersionHashed#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#id LockboxSecretVersionHashed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Each of the entry keys in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#key_1 LockboxSecretVersionHashed#key_1}
  */
  readonly key1?: string;
  /**
  * Each of the entry keys in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#key_10 LockboxSecretVersionHashed#key_10}
  */
  readonly key10?: string;
  /**
  * Each of the entry keys in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#key_2 LockboxSecretVersionHashed#key_2}
  */
  readonly key2?: string;
  /**
  * Each of the entry keys in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#key_3 LockboxSecretVersionHashed#key_3}
  */
  readonly key3?: string;
  /**
  * Each of the entry keys in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#key_4 LockboxSecretVersionHashed#key_4}
  */
  readonly key4?: string;
  /**
  * Each of the entry keys in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#key_5 LockboxSecretVersionHashed#key_5}
  */
  readonly key5?: string;
  /**
  * Each of the entry keys in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#key_6 LockboxSecretVersionHashed#key_6}
  */
  readonly key6?: string;
  /**
  * Each of the entry keys in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#key_7 LockboxSecretVersionHashed#key_7}
  */
  readonly key7?: string;
  /**
  * Each of the entry keys in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#key_8 LockboxSecretVersionHashed#key_8}
  */
  readonly key8?: string;
  /**
  * Each of the entry keys in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#key_9 LockboxSecretVersionHashed#key_9}
  */
  readonly key9?: string;
  /**
  * The Yandex Cloud Lockbox secret ID where to add the version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#secret_id LockboxSecretVersionHashed#secret_id}
  */
  readonly secretId: string;
  /**
  * Each of the entry values in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#text_value_1 LockboxSecretVersionHashed#text_value_1}
  */
  readonly textValue1?: string;
  /**
  * Each of the entry values in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#text_value_10 LockboxSecretVersionHashed#text_value_10}
  */
  readonly textValue10?: string;
  /**
  * Each of the entry values in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#text_value_2 LockboxSecretVersionHashed#text_value_2}
  */
  readonly textValue2?: string;
  /**
  * Each of the entry values in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#text_value_3 LockboxSecretVersionHashed#text_value_3}
  */
  readonly textValue3?: string;
  /**
  * Each of the entry values in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#text_value_4 LockboxSecretVersionHashed#text_value_4}
  */
  readonly textValue4?: string;
  /**
  * Each of the entry values in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#text_value_5 LockboxSecretVersionHashed#text_value_5}
  */
  readonly textValue5?: string;
  /**
  * Each of the entry values in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#text_value_6 LockboxSecretVersionHashed#text_value_6}
  */
  readonly textValue6?: string;
  /**
  * Each of the entry values in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#text_value_7 LockboxSecretVersionHashed#text_value_7}
  */
  readonly textValue7?: string;
  /**
  * Each of the entry values in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#text_value_8 LockboxSecretVersionHashed#text_value_8}
  */
  readonly textValue8?: string;
  /**
  * Each of the entry values in the Yandex Cloud Lockbox secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#text_value_9 LockboxSecretVersionHashed#text_value_9}
  */
  readonly textValue9?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#timeouts LockboxSecretVersionHashed#timeouts}
  */
  readonly timeouts?: LockboxSecretVersionHashedTimeouts;
}
export interface LockboxSecretVersionHashedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#create LockboxSecretVersionHashed#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#delete LockboxSecretVersionHashed#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#read LockboxSecretVersionHashed#read}
  */
  readonly read?: string;
}

export function lockboxSecretVersionHashedTimeoutsToTerraform(struct?: LockboxSecretVersionHashedTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function lockboxSecretVersionHashedTimeoutsToHclTerraform(struct?: LockboxSecretVersionHashedTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LockboxSecretVersionHashedTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LockboxSecretVersionHashedTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LockboxSecretVersionHashedTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed yandex_lockbox_secret_version_hashed}
*/
export class LockboxSecretVersionHashed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_lockbox_secret_version_hashed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LockboxSecretVersionHashed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LockboxSecretVersionHashed to import
  * @param importFromId The id of the existing LockboxSecretVersionHashed that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LockboxSecretVersionHashed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_lockbox_secret_version_hashed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/lockbox_secret_version_hashed yandex_lockbox_secret_version_hashed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LockboxSecretVersionHashedConfig
  */
  public constructor(scope: Construct, id: string, config: LockboxSecretVersionHashedConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_lockbox_secret_version_hashed',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.169.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._key1 = config.key1;
    this._key10 = config.key10;
    this._key2 = config.key2;
    this._key3 = config.key3;
    this._key4 = config.key4;
    this._key5 = config.key5;
    this._key6 = config.key6;
    this._key7 = config.key7;
    this._key8 = config.key8;
    this._key9 = config.key9;
    this._secretId = config.secretId;
    this._textValue1 = config.textValue1;
    this._textValue10 = config.textValue10;
    this._textValue2 = config.textValue2;
    this._textValue3 = config.textValue3;
    this._textValue4 = config.textValue4;
    this._textValue5 = config.textValue5;
    this._textValue6 = config.textValue6;
    this._textValue7 = config.textValue7;
    this._textValue8 = config.textValue8;
    this._textValue9 = config.textValue9;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // key_1 - computed: false, optional: true, required: false
  private _key1?: string; 
  public get key1() {
    return this.getStringAttribute('key_1');
  }
  public set key1(value: string) {
    this._key1 = value;
  }
  public resetKey1() {
    this._key1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get key1Input() {
    return this._key1;
  }

  // key_10 - computed: false, optional: true, required: false
  private _key10?: string; 
  public get key10() {
    return this.getStringAttribute('key_10');
  }
  public set key10(value: string) {
    this._key10 = value;
  }
  public resetKey10() {
    this._key10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get key10Input() {
    return this._key10;
  }

  // key_2 - computed: false, optional: true, required: false
  private _key2?: string; 
  public get key2() {
    return this.getStringAttribute('key_2');
  }
  public set key2(value: string) {
    this._key2 = value;
  }
  public resetKey2() {
    this._key2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get key2Input() {
    return this._key2;
  }

  // key_3 - computed: false, optional: true, required: false
  private _key3?: string; 
  public get key3() {
    return this.getStringAttribute('key_3');
  }
  public set key3(value: string) {
    this._key3 = value;
  }
  public resetKey3() {
    this._key3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get key3Input() {
    return this._key3;
  }

  // key_4 - computed: false, optional: true, required: false
  private _key4?: string; 
  public get key4() {
    return this.getStringAttribute('key_4');
  }
  public set key4(value: string) {
    this._key4 = value;
  }
  public resetKey4() {
    this._key4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get key4Input() {
    return this._key4;
  }

  // key_5 - computed: false, optional: true, required: false
  private _key5?: string; 
  public get key5() {
    return this.getStringAttribute('key_5');
  }
  public set key5(value: string) {
    this._key5 = value;
  }
  public resetKey5() {
    this._key5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get key5Input() {
    return this._key5;
  }

  // key_6 - computed: false, optional: true, required: false
  private _key6?: string; 
  public get key6() {
    return this.getStringAttribute('key_6');
  }
  public set key6(value: string) {
    this._key6 = value;
  }
  public resetKey6() {
    this._key6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get key6Input() {
    return this._key6;
  }

  // key_7 - computed: false, optional: true, required: false
  private _key7?: string; 
  public get key7() {
    return this.getStringAttribute('key_7');
  }
  public set key7(value: string) {
    this._key7 = value;
  }
  public resetKey7() {
    this._key7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get key7Input() {
    return this._key7;
  }

  // key_8 - computed: false, optional: true, required: false
  private _key8?: string; 
  public get key8() {
    return this.getStringAttribute('key_8');
  }
  public set key8(value: string) {
    this._key8 = value;
  }
  public resetKey8() {
    this._key8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get key8Input() {
    return this._key8;
  }

  // key_9 - computed: false, optional: true, required: false
  private _key9?: string; 
  public get key9() {
    return this.getStringAttribute('key_9');
  }
  public set key9(value: string) {
    this._key9 = value;
  }
  public resetKey9() {
    this._key9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get key9Input() {
    return this._key9;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // text_value_1 - computed: false, optional: true, required: false
  private _textValue1?: string; 
  public get textValue1() {
    return this.getStringAttribute('text_value_1');
  }
  public set textValue1(value: string) {
    this._textValue1 = value;
  }
  public resetTextValue1() {
    this._textValue1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValue1Input() {
    return this._textValue1;
  }

  // text_value_10 - computed: false, optional: true, required: false
  private _textValue10?: string; 
  public get textValue10() {
    return this.getStringAttribute('text_value_10');
  }
  public set textValue10(value: string) {
    this._textValue10 = value;
  }
  public resetTextValue10() {
    this._textValue10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValue10Input() {
    return this._textValue10;
  }

  // text_value_2 - computed: false, optional: true, required: false
  private _textValue2?: string; 
  public get textValue2() {
    return this.getStringAttribute('text_value_2');
  }
  public set textValue2(value: string) {
    this._textValue2 = value;
  }
  public resetTextValue2() {
    this._textValue2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValue2Input() {
    return this._textValue2;
  }

  // text_value_3 - computed: false, optional: true, required: false
  private _textValue3?: string; 
  public get textValue3() {
    return this.getStringAttribute('text_value_3');
  }
  public set textValue3(value: string) {
    this._textValue3 = value;
  }
  public resetTextValue3() {
    this._textValue3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValue3Input() {
    return this._textValue3;
  }

  // text_value_4 - computed: false, optional: true, required: false
  private _textValue4?: string; 
  public get textValue4() {
    return this.getStringAttribute('text_value_4');
  }
  public set textValue4(value: string) {
    this._textValue4 = value;
  }
  public resetTextValue4() {
    this._textValue4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValue4Input() {
    return this._textValue4;
  }

  // text_value_5 - computed: false, optional: true, required: false
  private _textValue5?: string; 
  public get textValue5() {
    return this.getStringAttribute('text_value_5');
  }
  public set textValue5(value: string) {
    this._textValue5 = value;
  }
  public resetTextValue5() {
    this._textValue5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValue5Input() {
    return this._textValue5;
  }

  // text_value_6 - computed: false, optional: true, required: false
  private _textValue6?: string; 
  public get textValue6() {
    return this.getStringAttribute('text_value_6');
  }
  public set textValue6(value: string) {
    this._textValue6 = value;
  }
  public resetTextValue6() {
    this._textValue6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValue6Input() {
    return this._textValue6;
  }

  // text_value_7 - computed: false, optional: true, required: false
  private _textValue7?: string; 
  public get textValue7() {
    return this.getStringAttribute('text_value_7');
  }
  public set textValue7(value: string) {
    this._textValue7 = value;
  }
  public resetTextValue7() {
    this._textValue7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValue7Input() {
    return this._textValue7;
  }

  // text_value_8 - computed: false, optional: true, required: false
  private _textValue8?: string; 
  public get textValue8() {
    return this.getStringAttribute('text_value_8');
  }
  public set textValue8(value: string) {
    this._textValue8 = value;
  }
  public resetTextValue8() {
    this._textValue8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValue8Input() {
    return this._textValue8;
  }

  // text_value_9 - computed: false, optional: true, required: false
  private _textValue9?: string; 
  public get textValue9() {
    return this.getStringAttribute('text_value_9');
  }
  public set textValue9(value: string) {
    this._textValue9 = value;
  }
  public resetTextValue9() {
    this._textValue9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValue9Input() {
    return this._textValue9;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LockboxSecretVersionHashedTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LockboxSecretVersionHashedTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key_1: cdktf.stringToTerraform(this._key1),
      key_10: cdktf.stringToTerraform(this._key10),
      key_2: cdktf.stringToTerraform(this._key2),
      key_3: cdktf.stringToTerraform(this._key3),
      key_4: cdktf.stringToTerraform(this._key4),
      key_5: cdktf.stringToTerraform(this._key5),
      key_6: cdktf.stringToTerraform(this._key6),
      key_7: cdktf.stringToTerraform(this._key7),
      key_8: cdktf.stringToTerraform(this._key8),
      key_9: cdktf.stringToTerraform(this._key9),
      secret_id: cdktf.stringToTerraform(this._secretId),
      text_value_1: cdktf.stringToTerraform(this._textValue1),
      text_value_10: cdktf.stringToTerraform(this._textValue10),
      text_value_2: cdktf.stringToTerraform(this._textValue2),
      text_value_3: cdktf.stringToTerraform(this._textValue3),
      text_value_4: cdktf.stringToTerraform(this._textValue4),
      text_value_5: cdktf.stringToTerraform(this._textValue5),
      text_value_6: cdktf.stringToTerraform(this._textValue6),
      text_value_7: cdktf.stringToTerraform(this._textValue7),
      text_value_8: cdktf.stringToTerraform(this._textValue8),
      text_value_9: cdktf.stringToTerraform(this._textValue9),
      timeouts: lockboxSecretVersionHashedTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      key_1: {
        value: cdktf.stringToHclTerraform(this._key1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_10: {
        value: cdktf.stringToHclTerraform(this._key10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_2: {
        value: cdktf.stringToHclTerraform(this._key2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_3: {
        value: cdktf.stringToHclTerraform(this._key3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_4: {
        value: cdktf.stringToHclTerraform(this._key4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_5: {
        value: cdktf.stringToHclTerraform(this._key5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_6: {
        value: cdktf.stringToHclTerraform(this._key6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_7: {
        value: cdktf.stringToHclTerraform(this._key7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_8: {
        value: cdktf.stringToHclTerraform(this._key8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_9: {
        value: cdktf.stringToHclTerraform(this._key9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_value_1: {
        value: cdktf.stringToHclTerraform(this._textValue1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_value_10: {
        value: cdktf.stringToHclTerraform(this._textValue10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_value_2: {
        value: cdktf.stringToHclTerraform(this._textValue2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_value_3: {
        value: cdktf.stringToHclTerraform(this._textValue3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_value_4: {
        value: cdktf.stringToHclTerraform(this._textValue4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_value_5: {
        value: cdktf.stringToHclTerraform(this._textValue5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_value_6: {
        value: cdktf.stringToHclTerraform(this._textValue6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_value_7: {
        value: cdktf.stringToHclTerraform(this._textValue7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_value_8: {
        value: cdktf.stringToHclTerraform(this._textValue8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_value_9: {
        value: cdktf.stringToHclTerraform(this._textValue9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: lockboxSecretVersionHashedTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LockboxSecretVersionHashedTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
