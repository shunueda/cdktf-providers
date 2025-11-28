// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/sdn_ports
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudSdnPortsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of datacenter that the port locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/sdn_ports#datacenter DataZenlayercloudSdnPorts#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/sdn_ports#id DataZenlayercloudSdnPorts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDs of the port to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/sdn_ports#port_ids DataZenlayercloudSdnPorts#port_ids}
  */
  readonly portIds?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/sdn_ports#result_output_file DataZenlayercloudSdnPorts#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataZenlayercloudSdnPortsPortListStruct {
}

export function dataZenlayercloudSdnPortsPortListStructToTerraform(struct?: DataZenlayercloudSdnPortsPortListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudSdnPortsPortListStructToHclTerraform(struct?: DataZenlayercloudSdnPortsPortListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudSdnPortsPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudSdnPortsPortListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudSdnPortsPortListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // business_entity_name - computed: true, optional: false, required: false
  public get businessEntityName() {
    return this.getStringAttribute('business_entity_name');
  }

  // connect_status - computed: true, optional: false, required: false
  public get connectStatus() {
    return this.getStringAttribute('connect_status');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // datacenter - computed: true, optional: false, required: false
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }

  // datacenter_name - computed: true, optional: false, required: false
  public get datacenterName() {
    return this.getStringAttribute('datacenter_name');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // loa_status - computed: true, optional: false, required: false
  public get loaStatus() {
    return this.getStringAttribute('loa_status');
  }

  // loa_url - computed: true, optional: false, required: false
  public get loaUrl() {
    return this.getStringAttribute('loa_url');
  }

  // port_charge_type - computed: true, optional: false, required: false
  public get portChargeType() {
    return this.getStringAttribute('port_charge_type');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // port_status - computed: true, optional: false, required: false
  public get portStatus() {
    return this.getStringAttribute('port_status');
  }

  // port_type - computed: true, optional: false, required: false
  public get portType() {
    return this.getStringAttribute('port_type');
  }

  // remarks - computed: true, optional: false, required: false
  public get remarks() {
    return this.getStringAttribute('remarks');
  }
}

export class DataZenlayercloudSdnPortsPortListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudSdnPortsPortListStructOutputReference {
    return new DataZenlayercloudSdnPortsPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/sdn_ports zenlayercloud_sdn_ports}
*/
export class DataZenlayercloudSdnPorts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_sdn_ports";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudSdnPorts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudSdnPorts to import
  * @param importFromId The id of the existing DataZenlayercloudSdnPorts that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/sdn_ports#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudSdnPorts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_sdn_ports", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/sdn_ports zenlayercloud_sdn_ports} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudSdnPortsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudSdnPortsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_sdn_ports',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.14',
        providerVersionConstraint: '0.2.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datacenter = config.datacenter;
    this._id = config.id;
    this._portIds = config.portIds;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
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

  // port_ids - computed: false, optional: true, required: false
  private _portIds?: string[]; 
  public get portIds() {
    return cdktf.Fn.tolist(this.getListAttribute('port_ids'));
  }
  public set portIds(value: string[]) {
    this._portIds = value;
  }
  public resetPortIds() {
    this._portIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdsInput() {
    return this._portIds;
  }

  // port_list - computed: true, optional: false, required: false
  private _portList = new DataZenlayercloudSdnPortsPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datacenter: cdktf.stringToTerraform(this._datacenter),
      id: cdktf.stringToTerraform(this._id),
      port_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portIds),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
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
      port_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._portIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
