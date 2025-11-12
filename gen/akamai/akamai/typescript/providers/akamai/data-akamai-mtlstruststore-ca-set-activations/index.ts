// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiMtlstruststoreCaSetActivationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * CA set identifier that filters out the activations or deactivations. Either 'ca_set_id' or 'ca_set_name' must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activations#ca_set_id DataAkamaiMtlstruststoreCaSetActivations#ca_set_id}
  */
  readonly caSetId?: string;
  /**
  * The name of the CA set. Either 'ca_set_id' or 'ca_set_name' must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activations#ca_set_name DataAkamaiMtlstruststoreCaSetActivations#ca_set_name}
  */
  readonly caSetName?: string;
  /**
  * If provided, filters the results to return only activations or deactivations from the specified network, either 'STAGING' or 'PRODUCTION'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activations#network DataAkamaiMtlstruststoreCaSetActivations#network}
  */
  readonly network?: string;
  /**
  * If provided, filters the results to return only activities with the specified status, either 'IN_PROGRESS', 'COMPLETE', or 'FAILED'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activations#status DataAkamaiMtlstruststoreCaSetActivations#status}
  */
  readonly status?: string;
  /**
  * If provided, filters the results to return only activities of the specified type, either 'ACTIVATE', 'DEACTIVATE', or 'DELETE'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activations#type DataAkamaiMtlstruststoreCaSetActivations#type}
  */
  readonly type?: string;
  /**
  * If provided, filters the results to return only activities for the specified CA set version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activations#version DataAkamaiMtlstruststoreCaSetActivations#version}
  */
  readonly version?: number;
}
export interface DataAkamaiMtlstruststoreCaSetActivationsActivations {
}

export function dataAkamaiMtlstruststoreCaSetActivationsActivationsToTerraform(struct?: DataAkamaiMtlstruststoreCaSetActivationsActivations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlstruststoreCaSetActivationsActivationsToHclTerraform(struct?: DataAkamaiMtlstruststoreCaSetActivationsActivations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlstruststoreCaSetActivationsActivationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiMtlstruststoreCaSetActivationsActivations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlstruststoreCaSetActivationsActivations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_date - computed: true, optional: false, required: false
  public get modifiedDate() {
    return this.getStringAttribute('modified_date');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataAkamaiMtlstruststoreCaSetActivationsActivationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiMtlstruststoreCaSetActivationsActivationsOutputReference {
    return new DataAkamaiMtlstruststoreCaSetActivationsActivationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activations akamai_mtlstruststore_ca_set_activations}
*/
export class DataAkamaiMtlstruststoreCaSetActivations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_mtlstruststore_ca_set_activations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiMtlstruststoreCaSetActivations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiMtlstruststoreCaSetActivations to import
  * @param importFromId The id of the existing DataAkamaiMtlstruststoreCaSetActivations that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiMtlstruststoreCaSetActivations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_mtlstruststore_ca_set_activations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activations akamai_mtlstruststore_ca_set_activations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiMtlstruststoreCaSetActivationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiMtlstruststoreCaSetActivationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_mtlstruststore_ca_set_activations',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caSetId = config.caSetId;
    this._caSetName = config.caSetName;
    this._network = config.network;
    this._status = config.status;
    this._type = config.type;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activations - computed: true, optional: false, required: false
  private _activations = new DataAkamaiMtlstruststoreCaSetActivationsActivationsList(this, "activations", false);
  public get activations() {
    return this._activations;
  }

  // ca_set_id - computed: true, optional: true, required: false
  private _caSetId?: string; 
  public get caSetId() {
    return this.getStringAttribute('ca_set_id');
  }
  public set caSetId(value: string) {
    this._caSetId = value;
  }
  public resetCaSetId() {
    this._caSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSetIdInput() {
    return this._caSetId;
  }

  // ca_set_name - computed: true, optional: true, required: false
  private _caSetName?: string; 
  public get caSetName() {
    return this.getStringAttribute('ca_set_name');
  }
  public set caSetName(value: string) {
    this._caSetName = value;
  }
  public resetCaSetName() {
    this._caSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSetNameInput() {
    return this._caSetName;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_set_id: cdktf.stringToTerraform(this._caSetId),
      ca_set_name: cdktf.stringToTerraform(this._caSetName),
      network: cdktf.stringToTerraform(this._network),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.numberToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_set_id: {
        value: cdktf.stringToHclTerraform(this._caSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_set_name: {
        value: cdktf.stringToHclTerraform(this._caSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
