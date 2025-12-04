// https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/connection_fingerprints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFivetranConnectionFingerprintsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the target connection within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/connection_fingerprints#id DataFivetranConnectionFingerprints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * fingerprints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/connection_fingerprints#fingerprints DataFivetranConnectionFingerprints#fingerprints}
  */
  readonly fingerprints?: DataFivetranConnectionFingerprintsFingerprints[] | cdktf.IResolvable;
}
export interface DataFivetranConnectionFingerprintsFingerprints {
  /**
  * Hash of the fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/connection_fingerprints#hash DataFivetranConnectionFingerprints#hash}
  */
  readonly hash: string;
}

export function dataFivetranConnectionFingerprintsFingerprintsToTerraform(struct?: DataFivetranConnectionFingerprintsFingerprints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: cdktf.stringToTerraform(struct!.hash),
  }
}


export function dataFivetranConnectionFingerprintsFingerprintsToHclTerraform(struct?: DataFivetranConnectionFingerprintsFingerprints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFivetranConnectionFingerprintsFingerprintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectionFingerprintsFingerprints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectionFingerprintsFingerprints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash = value.hash;
    }
  }

  // hash - computed: false, optional: false, required: true
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // validated_by - computed: true, optional: false, required: false
  public get validatedBy() {
    return this.getStringAttribute('validated_by');
  }

  // validated_date - computed: true, optional: false, required: false
  public get validatedDate() {
    return this.getStringAttribute('validated_date');
  }
}

export class DataFivetranConnectionFingerprintsFingerprintsList extends cdktf.ComplexList {
  public internalValue? : DataFivetranConnectionFingerprintsFingerprints[] | cdktf.IResolvable

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
  public get(index: number): DataFivetranConnectionFingerprintsFingerprintsOutputReference {
    return new DataFivetranConnectionFingerprintsFingerprintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/connection_fingerprints fivetran_connection_fingerprints}
*/
export class DataFivetranConnectionFingerprints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_connection_fingerprints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFivetranConnectionFingerprints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFivetranConnectionFingerprints to import
  * @param importFromId The id of the existing DataFivetranConnectionFingerprints that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/connection_fingerprints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFivetranConnectionFingerprints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_connection_fingerprints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/connection_fingerprints fivetran_connection_fingerprints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFivetranConnectionFingerprintsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFivetranConnectionFingerprintsConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_connection_fingerprints',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.17',
        providerVersionConstraint: '1.9.17'
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
    this._fingerprints.internalValue = config.fingerprints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // fingerprints - computed: false, optional: true, required: false
  private _fingerprints = new DataFivetranConnectionFingerprintsFingerprintsList(this, "fingerprints", true);
  public get fingerprints() {
    return this._fingerprints;
  }
  public putFingerprints(value: DataFivetranConnectionFingerprintsFingerprints[] | cdktf.IResolvable) {
    this._fingerprints.internalValue = value;
  }
  public resetFingerprints() {
    this._fingerprints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintsInput() {
    return this._fingerprints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      fingerprints: cdktf.listMapper(dataFivetranConnectionFingerprintsFingerprintsToTerraform, true)(this._fingerprints.internalValue),
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
      fingerprints: {
        value: cdktf.listMapperHcl(dataFivetranConnectionFingerprintsFingerprintsToHclTerraform, true)(this._fingerprints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataFivetranConnectionFingerprintsFingerprintsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
