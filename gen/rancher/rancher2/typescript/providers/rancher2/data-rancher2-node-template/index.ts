// https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/node_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRancher2NodeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/node_template#id DataRancher2NodeTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/node_template#name DataRancher2NodeTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/node_template#use_internal_ip_address DataRancher2NodeTemplate#use_internal_ip_address}
  */
  readonly useInternalIpAddress?: boolean | cdktf.IResolvable;
}
export interface DataRancher2NodeTemplateNodeTaints {
}

export function dataRancher2NodeTemplateNodeTaintsToTerraform(struct?: DataRancher2NodeTemplateNodeTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2NodeTemplateNodeTaintsToHclTerraform(struct?: DataRancher2NodeTemplateNodeTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2NodeTemplateNodeTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2NodeTemplateNodeTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2NodeTemplateNodeTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // time_added - computed: true, optional: false, required: false
  public get timeAdded() {
    return this.getStringAttribute('time_added');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataRancher2NodeTemplateNodeTaintsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2NodeTemplateNodeTaintsOutputReference {
    return new DataRancher2NodeTemplateNodeTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/node_template rancher2_node_template}
*/
export class DataRancher2NodeTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_node_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRancher2NodeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRancher2NodeTemplate to import
  * @param importFromId The id of the existing DataRancher2NodeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/node_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRancher2NodeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_node_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/node_template rancher2_node_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRancher2NodeTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataRancher2NodeTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_node_template',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '8.3.1',
        providerVersionConstraint: '8.3.1'
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
    this._name = config.name;
    this._useInternalIpAddress = config.useInternalIpAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // cloud_credential_id - computed: true, optional: false, required: false
  public get cloudCredentialId() {
    return this.getStringAttribute('cloud_credential_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // engine_env - computed: true, optional: false, required: false
  private _engineEnv = new cdktf.StringMap(this, "engine_env");
  public get engineEnv() {
    return this._engineEnv;
  }

  // engine_insecure_registry - computed: true, optional: false, required: false
  public get engineInsecureRegistry() {
    return this.getListAttribute('engine_insecure_registry');
  }

  // engine_install_url - computed: true, optional: false, required: false
  public get engineInstallUrl() {
    return this.getStringAttribute('engine_install_url');
  }

  // engine_label - computed: true, optional: false, required: false
  private _engineLabel = new cdktf.StringMap(this, "engine_label");
  public get engineLabel() {
    return this._engineLabel;
  }

  // engine_opt - computed: true, optional: false, required: false
  private _engineOpt = new cdktf.StringMap(this, "engine_opt");
  public get engineOpt() {
    return this._engineOpt;
  }

  // engine_registry_mirror - computed: true, optional: false, required: false
  public get engineRegistryMirror() {
    return this.getListAttribute('engine_registry_mirror');
  }

  // engine_storage_driver - computed: true, optional: false, required: false
  public get engineStorageDriver() {
    return this.getStringAttribute('engine_storage_driver');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_taints - computed: true, optional: false, required: false
  private _nodeTaints = new DataRancher2NodeTemplateNodeTaintsList(this, "node_taints", false);
  public get nodeTaints() {
    return this._nodeTaints;
  }

  // use_internal_ip_address - computed: false, optional: true, required: false
  private _useInternalIpAddress?: boolean | cdktf.IResolvable; 
  public get useInternalIpAddress() {
    return this.getBooleanAttribute('use_internal_ip_address');
  }
  public set useInternalIpAddress(value: boolean | cdktf.IResolvable) {
    this._useInternalIpAddress = value;
  }
  public resetUseInternalIpAddress() {
    this._useInternalIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInternalIpAddressInput() {
    return this._useInternalIpAddress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      use_internal_ip_address: cdktf.booleanToTerraform(this._useInternalIpAddress),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_internal_ip_address: {
        value: cdktf.booleanToHclTerraform(this._useInternalIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
