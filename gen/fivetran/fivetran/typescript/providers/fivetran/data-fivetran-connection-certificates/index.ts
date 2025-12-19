// https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/data-sources/connection_certificates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFivetranConnectionCertificatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the target connection within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/data-sources/connection_certificates#id DataFivetranConnectionCertificates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/data-sources/connection_certificates#certificates DataFivetranConnectionCertificates#certificates}
  */
  readonly certificates?: DataFivetranConnectionCertificatesCertificates[] | cdktf.IResolvable;
}
export interface DataFivetranConnectionCertificatesCertificates {
  /**
  * Hash of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/data-sources/connection_certificates#hash DataFivetranConnectionCertificates#hash}
  */
  readonly hash: string;
}

export function dataFivetranConnectionCertificatesCertificatesToTerraform(struct?: DataFivetranConnectionCertificatesCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: cdktf.stringToTerraform(struct!.hash),
  }
}


export function dataFivetranConnectionCertificatesCertificatesToHclTerraform(struct?: DataFivetranConnectionCertificatesCertificates | cdktf.IResolvable): any {
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

export class DataFivetranConnectionCertificatesCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectionCertificatesCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFivetranConnectionCertificatesCertificates | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // sha1 - computed: true, optional: false, required: false
  public get sha1() {
    return this.getStringAttribute('sha1');
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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

export class DataFivetranConnectionCertificatesCertificatesList extends cdktf.ComplexList {
  public internalValue? : DataFivetranConnectionCertificatesCertificates[] | cdktf.IResolvable

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
  public get(index: number): DataFivetranConnectionCertificatesCertificatesOutputReference {
    return new DataFivetranConnectionCertificatesCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/data-sources/connection_certificates fivetran_connection_certificates}
*/
export class DataFivetranConnectionCertificates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_connection_certificates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFivetranConnectionCertificates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFivetranConnectionCertificates to import
  * @param importFromId The id of the existing DataFivetranConnectionCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/data-sources/connection_certificates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFivetranConnectionCertificates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_connection_certificates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/data-sources/connection_certificates fivetran_connection_certificates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFivetranConnectionCertificatesConfig
  */
  public constructor(scope: Construct, id: string, config: DataFivetranConnectionCertificatesConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_connection_certificates',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.18',
        providerVersionConstraint: '1.9.18'
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
    this._certificates.internalValue = config.certificates;
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

  // certificates - computed: false, optional: true, required: false
  private _certificates = new DataFivetranConnectionCertificatesCertificatesList(this, "certificates", true);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: DataFivetranConnectionCertificatesCertificates[] | cdktf.IResolvable) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      certificates: cdktf.listMapper(dataFivetranConnectionCertificatesCertificatesToTerraform, true)(this._certificates.internalValue),
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
      certificates: {
        value: cdktf.listMapperHcl(dataFivetranConnectionCertificatesCertificatesToHclTerraform, true)(this._certificates.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataFivetranConnectionCertificatesCertificatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
