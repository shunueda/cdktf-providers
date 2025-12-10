// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/kms_overwrite_white_box_device_fingerprints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsOverwriteWhiteBoxDeviceFingerprintsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/kms_overwrite_white_box_device_fingerprints#id KmsOverwriteWhiteBoxDeviceFingerprints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * CMK unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/kms_overwrite_white_box_device_fingerprints#key_id KmsOverwriteWhiteBoxDeviceFingerprints#key_id}
  */
  readonly keyId: string;
  /**
  * device_fingerprints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/kms_overwrite_white_box_device_fingerprints#device_fingerprints KmsOverwriteWhiteBoxDeviceFingerprints#device_fingerprints}
  */
  readonly deviceFingerprints?: KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprints[] | cdktf.IResolvable;
}
export interface KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprints {
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/kms_overwrite_white_box_device_fingerprints#description KmsOverwriteWhiteBoxDeviceFingerprints#description}
  */
  readonly description?: string;
  /**
  * identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/kms_overwrite_white_box_device_fingerprints#identity KmsOverwriteWhiteBoxDeviceFingerprints#identity}
  */
  readonly identity: string;
}

export function kmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprintsToTerraform(struct?: KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    identity: cdktf.stringToTerraform(struct!.identity),
  }
}


export function kmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprintsToHclTerraform(struct?: KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity: {
      value: cdktf.stringToHclTerraform(struct!.identity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._identity !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._identity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._identity = value.identity;
    }
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

  // identity - computed: false, optional: false, required: true
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }
}

export class KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprintsList extends cdktf.ComplexList {
  public internalValue? : KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprints[] | cdktf.IResolvable

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
  public get(index: number): KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprintsOutputReference {
    return new KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/kms_overwrite_white_box_device_fingerprints tencentcloud_kms_overwrite_white_box_device_fingerprints}
*/
export class KmsOverwriteWhiteBoxDeviceFingerprints extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kms_overwrite_white_box_device_fingerprints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsOverwriteWhiteBoxDeviceFingerprints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsOverwriteWhiteBoxDeviceFingerprints to import
  * @param importFromId The id of the existing KmsOverwriteWhiteBoxDeviceFingerprints that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/kms_overwrite_white_box_device_fingerprints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsOverwriteWhiteBoxDeviceFingerprints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kms_overwrite_white_box_device_fingerprints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/kms_overwrite_white_box_device_fingerprints tencentcloud_kms_overwrite_white_box_device_fingerprints} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsOverwriteWhiteBoxDeviceFingerprintsConfig
  */
  public constructor(scope: Construct, id: string, config: KmsOverwriteWhiteBoxDeviceFingerprintsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kms_overwrite_white_box_device_fingerprints',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._keyId = config.keyId;
    this._deviceFingerprints.internalValue = config.deviceFingerprints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // device_fingerprints - computed: false, optional: true, required: false
  private _deviceFingerprints = new KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprintsList(this, "device_fingerprints", false);
  public get deviceFingerprints() {
    return this._deviceFingerprints;
  }
  public putDeviceFingerprints(value: KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprints[] | cdktf.IResolvable) {
    this._deviceFingerprints.internalValue = value;
  }
  public resetDeviceFingerprints() {
    this._deviceFingerprints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFingerprintsInput() {
    return this._deviceFingerprints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      device_fingerprints: cdktf.listMapper(kmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprintsToTerraform, true)(this._deviceFingerprints.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_fingerprints: {
        value: cdktf.listMapperHcl(kmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprintsToHclTerraform, true)(this._deviceFingerprints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KmsOverwriteWhiteBoxDeviceFingerprintsDeviceFingerprintsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
