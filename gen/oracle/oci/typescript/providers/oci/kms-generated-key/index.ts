// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsGeneratedKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#associated_data KmsGeneratedKey#associated_data}
  */
  readonly associatedData?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#crypto_endpoint KmsGeneratedKey#crypto_endpoint}
  */
  readonly cryptoEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#id KmsGeneratedKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#include_plaintext_key KmsGeneratedKey#include_plaintext_key}
  */
  readonly includePlaintextKey: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#key_id KmsGeneratedKey#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#logging_context KmsGeneratedKey#logging_context}
  */
  readonly loggingContext?: { [key: string]: string };
  /**
  * key_shape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#key_shape KmsGeneratedKey#key_shape}
  */
  readonly keyShape: KmsGeneratedKeyKeyShape;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#timeouts KmsGeneratedKey#timeouts}
  */
  readonly timeouts?: KmsGeneratedKeyTimeouts;
}
export interface KmsGeneratedKeyKeyShape {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#algorithm KmsGeneratedKey#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#curve_id KmsGeneratedKey#curve_id}
  */
  readonly curveId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#length KmsGeneratedKey#length}
  */
  readonly length: number;
}

export function kmsGeneratedKeyKeyShapeToTerraform(struct?: KmsGeneratedKeyKeyShapeOutputReference | KmsGeneratedKeyKeyShape): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    curve_id: cdktf.stringToTerraform(struct!.curveId),
    length: cdktf.numberToTerraform(struct!.length),
  }
}


export function kmsGeneratedKeyKeyShapeToHclTerraform(struct?: KmsGeneratedKeyKeyShapeOutputReference | KmsGeneratedKeyKeyShape): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    curve_id: {
      value: cdktf.stringToHclTerraform(struct!.curveId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsGeneratedKeyKeyShapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsGeneratedKeyKeyShape | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._curveId !== undefined) {
      hasAnyValues = true;
      internalValueResult.curveId = this._curveId;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsGeneratedKeyKeyShape | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._curveId = undefined;
      this._length = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._curveId = value.curveId;
      this._length = value.length;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // curve_id - computed: true, optional: true, required: false
  private _curveId?: string; 
  public get curveId() {
    return this.getStringAttribute('curve_id');
  }
  public set curveId(value: string) {
    this._curveId = value;
  }
  public resetCurveId() {
    this._curveId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveIdInput() {
    return this._curveId;
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }
}
export interface KmsGeneratedKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#create KmsGeneratedKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#delete KmsGeneratedKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#update KmsGeneratedKey#update}
  */
  readonly update?: string;
}

export function kmsGeneratedKeyTimeoutsToTerraform(struct?: KmsGeneratedKeyTimeouts | cdktf.IResolvable): any {
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


export function kmsGeneratedKeyTimeoutsToHclTerraform(struct?: KmsGeneratedKeyTimeouts | cdktf.IResolvable): any {
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

export class KmsGeneratedKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KmsGeneratedKeyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KmsGeneratedKeyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key oci_kms_generated_key}
*/
export class KmsGeneratedKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_kms_generated_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsGeneratedKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsGeneratedKey to import
  * @param importFromId The id of the existing KmsGeneratedKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsGeneratedKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_kms_generated_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_generated_key oci_kms_generated_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsGeneratedKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KmsGeneratedKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_generated_key',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatedData = config.associatedData;
    this._cryptoEndpoint = config.cryptoEndpoint;
    this._id = config.id;
    this._includePlaintextKey = config.includePlaintextKey;
    this._keyId = config.keyId;
    this._loggingContext = config.loggingContext;
    this._keyShape.internalValue = config.keyShape;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_data - computed: false, optional: true, required: false
  private _associatedData?: { [key: string]: string }; 
  public get associatedData() {
    return this.getStringMapAttribute('associated_data');
  }
  public set associatedData(value: { [key: string]: string }) {
    this._associatedData = value;
  }
  public resetAssociatedData() {
    this._associatedData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedDataInput() {
    return this._associatedData;
  }

  // ciphertext - computed: true, optional: false, required: false
  public get ciphertext() {
    return this.getStringAttribute('ciphertext');
  }

  // crypto_endpoint - computed: false, optional: false, required: true
  private _cryptoEndpoint?: string; 
  public get cryptoEndpoint() {
    return this.getStringAttribute('crypto_endpoint');
  }
  public set cryptoEndpoint(value: string) {
    this._cryptoEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoEndpointInput() {
    return this._cryptoEndpoint;
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

  // include_plaintext_key - computed: false, optional: false, required: true
  private _includePlaintextKey?: boolean | cdktf.IResolvable; 
  public get includePlaintextKey() {
    return this.getBooleanAttribute('include_plaintext_key');
  }
  public set includePlaintextKey(value: boolean | cdktf.IResolvable) {
    this._includePlaintextKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includePlaintextKeyInput() {
    return this._includePlaintextKey;
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

  // logging_context - computed: false, optional: true, required: false
  private _loggingContext?: { [key: string]: string }; 
  public get loggingContext() {
    return this.getStringMapAttribute('logging_context');
  }
  public set loggingContext(value: { [key: string]: string }) {
    this._loggingContext = value;
  }
  public resetLoggingContext() {
    this._loggingContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingContextInput() {
    return this._loggingContext;
  }

  // plaintext - computed: true, optional: false, required: false
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }

  // plaintext_checksum - computed: true, optional: false, required: false
  public get plaintextChecksum() {
    return this.getStringAttribute('plaintext_checksum');
  }

  // key_shape - computed: false, optional: false, required: true
  private _keyShape = new KmsGeneratedKeyKeyShapeOutputReference(this, "key_shape");
  public get keyShape() {
    return this._keyShape;
  }
  public putKeyShape(value: KmsGeneratedKeyKeyShape) {
    this._keyShape.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyShapeInput() {
    return this._keyShape.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsGeneratedKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsGeneratedKeyTimeouts) {
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
      associated_data: cdktf.hashMapper(cdktf.stringToTerraform)(this._associatedData),
      crypto_endpoint: cdktf.stringToTerraform(this._cryptoEndpoint),
      id: cdktf.stringToTerraform(this._id),
      include_plaintext_key: cdktf.booleanToTerraform(this._includePlaintextKey),
      key_id: cdktf.stringToTerraform(this._keyId),
      logging_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._loggingContext),
      key_shape: kmsGeneratedKeyKeyShapeToTerraform(this._keyShape.internalValue),
      timeouts: kmsGeneratedKeyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._associatedData),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      crypto_endpoint: {
        value: cdktf.stringToHclTerraform(this._cryptoEndpoint),
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
      include_plaintext_key: {
        value: cdktf.booleanToHclTerraform(this._includePlaintextKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._loggingContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      key_shape: {
        value: kmsGeneratedKeyKeyShapeToHclTerraform(this._keyShape.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KmsGeneratedKeyKeyShapeList",
      },
      timeouts: {
        value: kmsGeneratedKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KmsGeneratedKeyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
