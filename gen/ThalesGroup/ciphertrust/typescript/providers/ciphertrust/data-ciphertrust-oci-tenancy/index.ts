// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_tenancy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCiphertrustOciTenancyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_tenancy#id DataCiphertrustOciTenancy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Show tenancy matching this CipherTrust Manager resource ID only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_tenancy#tenancy_id DataCiphertrustOciTenancy#tenancy_id}
  */
  readonly tenancyId?: string;
  /**
  * Show tenancy matching this tenancy name only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_tenancy#tenancy_name DataCiphertrustOciTenancy#tenancy_name}
  */
  readonly tenancyName?: string;
  /**
  * Show tenancies matching this OCID only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_tenancy#tenancy_ocid DataCiphertrustOciTenancy#tenancy_ocid}
  */
  readonly tenancyOcid?: string;
}
export interface DataCiphertrustOciTenancyTenancies {
}

export function dataCiphertrustOciTenancyTenanciesToTerraform(struct?: DataCiphertrustOciTenancyTenancies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiphertrustOciTenancyTenanciesToHclTerraform(struct?: DataCiphertrustOciTenancyTenancies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiphertrustOciTenancyTenanciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCiphertrustOciTenancyTenancies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiphertrustOciTenancyTenancies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // tenancy_name - computed: true, optional: false, required: false
  public get tenancyName() {
    return this.getStringAttribute('tenancy_name');
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }
}

export class DataCiphertrustOciTenancyTenanciesList extends cdktf.ComplexList {

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
  public get(index: number): DataCiphertrustOciTenancyTenanciesOutputReference {
    return new DataCiphertrustOciTenancyTenanciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_tenancy ciphertrust_oci_tenancy}
*/
export class DataCiphertrustOciTenancy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_oci_tenancy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCiphertrustOciTenancy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCiphertrustOciTenancy to import
  * @param importFromId The id of the existing DataCiphertrustOciTenancy that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_tenancy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCiphertrustOciTenancy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_oci_tenancy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_tenancy ciphertrust_oci_tenancy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCiphertrustOciTenancyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCiphertrustOciTenancyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_oci_tenancy',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
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
    this._tenancyId = config.tenancyId;
    this._tenancyName = config.tenancyName;
    this._tenancyOcid = config.tenancyOcid;
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

  // tenancies - computed: true, optional: false, required: false
  private _tenancies = new DataCiphertrustOciTenancyTenanciesList(this, "tenancies", true);
  public get tenancies() {
    return this._tenancies;
  }

  // tenancy_id - computed: false, optional: true, required: false
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  public resetTenancyId() {
    this._tenancyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }

  // tenancy_name - computed: false, optional: true, required: false
  private _tenancyName?: string; 
  public get tenancyName() {
    return this.getStringAttribute('tenancy_name');
  }
  public set tenancyName(value: string) {
    this._tenancyName = value;
  }
  public resetTenancyName() {
    this._tenancyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyNameInput() {
    return this._tenancyName;
  }

  // tenancy_ocid - computed: false, optional: true, required: false
  private _tenancyOcid?: string; 
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }
  public set tenancyOcid(value: string) {
    this._tenancyOcid = value;
  }
  public resetTenancyOcid() {
    this._tenancyOcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyOcidInput() {
    return this._tenancyOcid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      tenancy_id: cdktf.stringToTerraform(this._tenancyId),
      tenancy_name: cdktf.stringToTerraform(this._tenancyName),
      tenancy_ocid: cdktf.stringToTerraform(this._tenancyOcid),
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
      tenancy_id: {
        value: cdktf.stringToHclTerraform(this._tenancyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenancy_name: {
        value: cdktf.stringToHclTerraform(this._tenancyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenancy_ocid: {
        value: cdktf.stringToHclTerraform(this._tenancyOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
