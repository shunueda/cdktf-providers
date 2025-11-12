// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/resource_sets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitResourceSetsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAembitResourceSetsResourceSets {
  /**
  * Standalone Certificate Authority ID configured for this ResourceSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/resource_sets#standalone_certificate_authority DataAembitResourceSets#standalone_certificate_authority}
  */
  readonly standaloneCertificateAuthority?: string;
}

export function dataAembitResourceSetsResourceSetsToTerraform(struct?: DataAembitResourceSetsResourceSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    standalone_certificate_authority: cdktf.stringToTerraform(struct!.standaloneCertificateAuthority),
  }
}


export function dataAembitResourceSetsResourceSetsToHclTerraform(struct?: DataAembitResourceSetsResourceSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    standalone_certificate_authority: {
      value: cdktf.stringToHclTerraform(struct!.standaloneCertificateAuthority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitResourceSetsResourceSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitResourceSetsResourceSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._standaloneCertificateAuthority !== undefined) {
      hasAnyValues = true;
      internalValueResult.standaloneCertificateAuthority = this._standaloneCertificateAuthority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitResourceSetsResourceSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._standaloneCertificateAuthority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._standaloneCertificateAuthority = value.standaloneCertificateAuthority;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }

  // standalone_certificate_authority - computed: true, optional: true, required: false
  private _standaloneCertificateAuthority?: string; 
  public get standaloneCertificateAuthority() {
    return this.getStringAttribute('standalone_certificate_authority');
  }
  public set standaloneCertificateAuthority(value: string) {
    this._standaloneCertificateAuthority = value;
  }
  public resetStandaloneCertificateAuthority() {
    this._standaloneCertificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneCertificateAuthorityInput() {
    return this._standaloneCertificateAuthority;
  }
}

export class DataAembitResourceSetsResourceSetsList extends cdktf.ComplexList {
  public internalValue? : DataAembitResourceSetsResourceSets[] | cdktf.IResolvable

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
  public get(index: number): DataAembitResourceSetsResourceSetsOutputReference {
    return new DataAembitResourceSetsResourceSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/resource_sets aembit_resource_sets}
*/
export class DataAembitResourceSets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_resource_sets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitResourceSets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitResourceSets to import
  * @param importFromId The id of the existing DataAembitResourceSets that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/resource_sets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitResourceSets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_resource_sets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/resource_sets aembit_resource_sets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitResourceSetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAembitResourceSetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit_resource_sets',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1',
        providerVersionConstraint: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // resource_sets - computed: true, optional: false, required: false
  private _resourceSets = new DataAembitResourceSetsResourceSetsList(this, "resource_sets", false);
  public get resourceSets() {
    return this._resourceSets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
