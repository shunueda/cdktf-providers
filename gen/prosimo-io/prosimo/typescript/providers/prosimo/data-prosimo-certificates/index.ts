// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/certificates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProsimoCertificatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom filters to scope specific results. Usage: filter = app_access_type==agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/certificates#filter DataProsimoCertificates#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/certificates#id DataProsimoCertificates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataProsimoCertificatesCerts {
}

export function dataProsimoCertificatesCertsToTerraform(struct?: DataProsimoCertificatesCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoCertificatesCertsToHclTerraform(struct?: DataProsimoCertificatesCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoCertificatesCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoCertificatesCerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoCertificatesCerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca - computed: true, optional: false, required: false
  public get ca() {
    return this.getStringAttribute('ca');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificatehash - computed: true, optional: false, required: false
  public get certificatehash() {
    return this.getStringAttribute('certificatehash');
  }

  // createdtime - computed: true, optional: false, required: false
  public get createdtime() {
    return this.getStringAttribute('createdtime');
  }

  // dn - computed: true, optional: false, required: false
  public get dn() {
    return this.getStringAttribute('dn');
  }

  // expirytime - computed: true, optional: false, required: false
  public get expirytime() {
    return this.getStringAttribute('expirytime');
  }

  // generatedby - computed: true, optional: false, required: false
  public get generatedby() {
    return this.getStringAttribute('generatedby');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuetime - computed: true, optional: false, required: false
  public get issuetime() {
    return this.getStringAttribute('issuetime');
  }

  // isteamcert - computed: true, optional: false, required: false
  public get isteamcert() {
    return this.getBooleanAttribute('isteamcert');
  }

  // keysize - computed: true, optional: false, required: false
  public get keysize() {
    return this.getStringAttribute('keysize');
  }

  // notified - computed: true, optional: false, required: false
  public get notified() {
    return this.getBooleanAttribute('notified');
  }

  // pstatus - computed: true, optional: false, required: false
  public get pstatus() {
    return this.getStringAttribute('pstatus');
  }

  // publickeyalgorithm - computed: true, optional: false, required: false
  public get publickeyalgorithm() {
    return this.getStringAttribute('publickeyalgorithm');
  }

  // san - computed: true, optional: false, required: false
  public get san() {
    return this.getStringAttribute('san');
  }

  // signingalgorithm - computed: true, optional: false, required: false
  public get signingalgorithm() {
    return this.getStringAttribute('signingalgorithm');
  }

  // teamid - computed: true, optional: false, required: false
  public get teamid() {
    return this.getStringAttribute('teamid');
  }

  // updatedtime - computed: true, optional: false, required: false
  public get updatedtime() {
    return this.getStringAttribute('updatedtime');
  }
}

export class DataProsimoCertificatesCertsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoCertificatesCertsOutputReference {
    return new DataProsimoCertificatesCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/certificates prosimo_certificates}
*/
export class DataProsimoCertificates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_certificates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProsimoCertificates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProsimoCertificates to import
  * @param importFromId The id of the existing DataProsimoCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/certificates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProsimoCertificates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_certificates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/certificates prosimo_certificates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProsimoCertificatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProsimoCertificatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prosimo_certificates',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certs - computed: true, optional: false, required: false
  private _certs = new DataProsimoCertificatesCertsList(this, "certs", true);
  public get certs() {
    return this._certs;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
