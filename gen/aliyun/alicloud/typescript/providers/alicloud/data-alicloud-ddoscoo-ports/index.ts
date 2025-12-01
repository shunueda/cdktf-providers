// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ddoscoo_ports
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudDdoscooPortsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ddoscoo_ports#frontend_port DataAlicloudDdoscooPorts#frontend_port}
  */
  readonly frontendPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ddoscoo_ports#frontend_protocol DataAlicloudDdoscooPorts#frontend_protocol}
  */
  readonly frontendProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ddoscoo_ports#id DataAlicloudDdoscooPorts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ddoscoo_ports#ids DataAlicloudDdoscooPorts#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ddoscoo_ports#instance_id DataAlicloudDdoscooPorts#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ddoscoo_ports#output_file DataAlicloudDdoscooPorts#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudDdoscooPortsPorts {
}

export function dataAlicloudDdoscooPortsPortsToTerraform(struct?: DataAlicloudDdoscooPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDdoscooPortsPortsToHclTerraform(struct?: DataAlicloudDdoscooPortsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDdoscooPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDdoscooPortsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDdoscooPortsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_port - computed: true, optional: false, required: false
  public get backendPort() {
    return this.getStringAttribute('backend_port');
  }

  // frontend_port - computed: true, optional: false, required: false
  public get frontendPort() {
    return this.getStringAttribute('frontend_port');
  }

  // frontend_protocol - computed: true, optional: false, required: false
  public get frontendProtocol() {
    return this.getStringAttribute('frontend_protocol');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // real_servers - computed: true, optional: false, required: false
  public get realServers() {
    return this.getListAttribute('real_servers');
  }
}

export class DataAlicloudDdoscooPortsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDdoscooPortsPortsOutputReference {
    return new DataAlicloudDdoscooPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ddoscoo_ports alicloud_ddoscoo_ports}
*/
export class DataAlicloudDdoscooPorts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ddoscoo_ports";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudDdoscooPorts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudDdoscooPorts to import
  * @param importFromId The id of the existing DataAlicloudDdoscooPorts that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ddoscoo_ports#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudDdoscooPorts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ddoscoo_ports", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ddoscoo_ports alicloud_ddoscoo_ports} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudDdoscooPortsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudDdoscooPortsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ddoscoo_ports',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._frontendPort = config.frontendPort;
    this._frontendProtocol = config.frontendProtocol;
    this._id = config.id;
    this._ids = config.ids;
    this._instanceId = config.instanceId;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // frontend_port - computed: false, optional: true, required: false
  private _frontendPort?: string; 
  public get frontendPort() {
    return this.getStringAttribute('frontend_port');
  }
  public set frontendPort(value: string) {
    this._frontendPort = value;
  }
  public resetFrontendPort() {
    this._frontendPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortInput() {
    return this._frontendPort;
  }

  // frontend_protocol - computed: false, optional: true, required: false
  private _frontendProtocol?: string; 
  public get frontendProtocol() {
    return this.getStringAttribute('frontend_protocol');
  }
  public set frontendProtocol(value: string) {
    this._frontendProtocol = value;
  }
  public resetFrontendProtocol() {
    this._frontendProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendProtocolInput() {
    return this._frontendProtocol;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataAlicloudDdoscooPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      frontend_port: cdktf.stringToTerraform(this._frontendPort),
      frontend_protocol: cdktf.stringToTerraform(this._frontendProtocol),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      frontend_port: {
        value: cdktf.stringToHclTerraform(this._frontendPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frontend_protocol: {
        value: cdktf.stringToHclTerraform(this._frontendProtocol),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
