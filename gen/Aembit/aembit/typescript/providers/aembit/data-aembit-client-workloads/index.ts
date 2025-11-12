// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/client_workloads
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitClientWorkloadsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAembitClientWorkloadsClientWorkloadsIdentities {
}

export function dataAembitClientWorkloadsClientWorkloadsIdentitiesToTerraform(struct?: DataAembitClientWorkloadsClientWorkloadsIdentities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitClientWorkloadsClientWorkloadsIdentitiesToHclTerraform(struct?: DataAembitClientWorkloadsClientWorkloadsIdentities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitClientWorkloadsClientWorkloadsIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitClientWorkloadsClientWorkloadsIdentities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitClientWorkloadsClientWorkloadsIdentities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAembitClientWorkloadsClientWorkloadsIdentitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAembitClientWorkloadsClientWorkloadsIdentitiesOutputReference {
    return new DataAembitClientWorkloadsClientWorkloadsIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAembitClientWorkloadsClientWorkloads {
  /**
  * Standalone Certificate Authority ID configured for this client workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/client_workloads#standalone_certificate_authority DataAembitClientWorkloads#standalone_certificate_authority}
  */
  readonly standaloneCertificateAuthority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/client_workloads#tags DataAembitClientWorkloads#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataAembitClientWorkloadsClientWorkloadsToTerraform(struct?: DataAembitClientWorkloadsClientWorkloads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    standalone_certificate_authority: cdktf.stringToTerraform(struct!.standaloneCertificateAuthority),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataAembitClientWorkloadsClientWorkloadsToHclTerraform(struct?: DataAembitClientWorkloadsClientWorkloads): any {
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
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitClientWorkloadsClientWorkloadsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitClientWorkloadsClientWorkloads | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._standaloneCertificateAuthority !== undefined) {
      hasAnyValues = true;
      internalValueResult.standaloneCertificateAuthority = this._standaloneCertificateAuthority;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitClientWorkloadsClientWorkloads | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._standaloneCertificateAuthority = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._standaloneCertificateAuthority = value.standaloneCertificateAuthority;
      this._tags = value.tags;
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

  // identities - computed: true, optional: false, required: false
  private _identities = new DataAembitClientWorkloadsClientWorkloadsIdentitiesList(this, "identities", true);
  public get identities() {
    return this._identities;
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class DataAembitClientWorkloadsClientWorkloadsList extends cdktf.ComplexList {
  public internalValue? : DataAembitClientWorkloadsClientWorkloads[] | cdktf.IResolvable

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
  public get(index: number): DataAembitClientWorkloadsClientWorkloadsOutputReference {
    return new DataAembitClientWorkloadsClientWorkloadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/client_workloads aembit_client_workloads}
*/
export class DataAembitClientWorkloads extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_client_workloads";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitClientWorkloads resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitClientWorkloads to import
  * @param importFromId The id of the existing DataAembitClientWorkloads that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/client_workloads#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitClientWorkloads to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_client_workloads", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/client_workloads aembit_client_workloads} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitClientWorkloadsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAembitClientWorkloadsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit_client_workloads',
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

  // client_workloads - computed: true, optional: false, required: false
  private _clientWorkloads = new DataAembitClientWorkloadsClientWorkloadsList(this, "client_workloads", false);
  public get clientWorkloads() {
    return this._clientWorkloads;
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
