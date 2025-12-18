// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_byoasn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreByoasnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_byoasn#byoasn_id DataOciCoreByoasn#byoasn_id}
  */
  readonly byoasnId: string;
}
export interface DataOciCoreByoasnByoipRanges {
}

export function dataOciCoreByoasnByoipRangesToTerraform(struct?: DataOciCoreByoasnByoipRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreByoasnByoipRangesToHclTerraform(struct?: DataOciCoreByoasnByoipRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreByoasnByoipRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreByoasnByoipRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreByoasnByoipRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_path_prepend_length - computed: true, optional: false, required: false
  public get asPathPrependLength() {
    return this.getNumberAttribute('as_path_prepend_length');
  }

  // byoip_range_id - computed: true, optional: false, required: false
  public get byoipRangeId() {
    return this.getStringAttribute('byoip_range_id');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // ipv6cidr_block - computed: true, optional: false, required: false
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6cidr_block');
  }
}

export class DataOciCoreByoasnByoipRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreByoasnByoipRangesOutputReference {
    return new DataOciCoreByoasnByoipRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_byoasn oci_core_byoasn}
*/
export class DataOciCoreByoasn extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_byoasn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreByoasn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreByoasn to import
  * @param importFromId The id of the existing DataOciCoreByoasn that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_byoasn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreByoasn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_byoasn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_byoasn oci_core_byoasn} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreByoasnConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreByoasnConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_byoasn',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._byoasnId = config.byoasnId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getStringAttribute('asn');
  }

  // byoasn_id - computed: false, optional: false, required: true
  private _byoasnId?: string; 
  public get byoasnId() {
    return this.getStringAttribute('byoasn_id');
  }
  public set byoasnId(value: string) {
    this._byoasnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get byoasnIdInput() {
    return this._byoasnId;
  }

  // byoip_ranges - computed: true, optional: false, required: false
  private _byoipRanges = new DataOciCoreByoasnByoipRangesList(this, "byoip_ranges", false);
  public get byoipRanges() {
    return this._byoipRanges;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // time_validated - computed: true, optional: false, required: false
  public get timeValidated() {
    return this.getStringAttribute('time_validated');
  }

  // validation_token - computed: true, optional: false, required: false
  public get validationToken() {
    return this.getStringAttribute('validation_token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      byoasn_id: cdktf.stringToTerraform(this._byoasnId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      byoasn_id: {
        value: cdktf.stringToHclTerraform(this._byoasnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
