// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/natgateway_forwardentries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackNatgatewayForwardentriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/natgateway_forwardentries#external_ip DataAlibabacloudstackNatgatewayForwardentries#external_ip}
  */
  readonly externalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/natgateway_forwardentries#forward_table_id DataAlibabacloudstackNatgatewayForwardentries#forward_table_id}
  */
  readonly forwardTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/natgateway_forwardentries#id DataAlibabacloudstackNatgatewayForwardentries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/natgateway_forwardentries#ids DataAlibabacloudstackNatgatewayForwardentries#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/natgateway_forwardentries#internal_ip DataAlibabacloudstackNatgatewayForwardentries#internal_ip}
  */
  readonly internalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/natgateway_forwardentries#name_regex DataAlibabacloudstackNatgatewayForwardentries#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/natgateway_forwardentries#output_file DataAlibabacloudstackNatgatewayForwardentries#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlibabacloudstackNatgatewayForwardentriesEntries {
}

export function dataAlibabacloudstackNatgatewayForwardentriesEntriesToTerraform(struct?: DataAlibabacloudstackNatgatewayForwardentriesEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackNatgatewayForwardentriesEntriesToHclTerraform(struct?: DataAlibabacloudstackNatgatewayForwardentriesEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackNatgatewayForwardentriesEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackNatgatewayForwardentriesEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackNatgatewayForwardentriesEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_ip - computed: true, optional: false, required: false
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }

  // external_port - computed: true, optional: false, required: false
  public get externalPort() {
    return this.getStringAttribute('external_port');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // internal_port - computed: true, optional: false, required: false
  public get internalPort() {
    return this.getStringAttribute('internal_port');
  }

  // ip_protocol - computed: true, optional: false, required: false
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlibabacloudstackNatgatewayForwardentriesEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackNatgatewayForwardentriesEntriesOutputReference {
    return new DataAlibabacloudstackNatgatewayForwardentriesEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/natgateway_forwardentries alibabacloudstack_natgateway_forwardentries}
*/
export class DataAlibabacloudstackNatgatewayForwardentries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_natgateway_forwardentries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackNatgatewayForwardentries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackNatgatewayForwardentries to import
  * @param importFromId The id of the existing DataAlibabacloudstackNatgatewayForwardentries that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/natgateway_forwardentries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackNatgatewayForwardentries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_natgateway_forwardentries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/natgateway_forwardentries alibabacloudstack_natgateway_forwardentries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackNatgatewayForwardentriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackNatgatewayForwardentriesConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_natgateway_forwardentries',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalIp = config.externalIp;
    this._forwardTableId = config.forwardTableId;
    this._id = config.id;
    this._ids = config.ids;
    this._internalIp = config.internalIp;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entries - computed: true, optional: false, required: false
  private _entries = new DataAlibabacloudstackNatgatewayForwardentriesEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }

  // external_ip - computed: false, optional: true, required: false
  private _externalIp?: string; 
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }
  public set externalIp(value: string) {
    this._externalIp = value;
  }
  public resetExternalIp() {
    this._externalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp;
  }

  // forward_table_id - computed: false, optional: false, required: true
  private _forwardTableId?: string; 
  public get forwardTableId() {
    return this.getStringAttribute('forward_table_id');
  }
  public set forwardTableId(value: string) {
    this._forwardTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTableIdInput() {
    return this._forwardTableId;
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

  // internal_ip - computed: false, optional: true, required: false
  private _internalIp?: string; 
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }
  public set internalIp(value: string) {
    this._internalIp = value;
  }
  public resetInternalIp() {
    this._internalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_ip: cdktf.stringToTerraform(this._externalIp),
      forward_table_id: cdktf.stringToTerraform(this._forwardTableId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      internal_ip: cdktf.stringToTerraform(this._internalIp),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_ip: {
        value: cdktf.stringToHclTerraform(this._externalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_table_id: {
        value: cdktf.stringToHclTerraform(this._forwardTableId),
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
      internal_ip: {
        value: cdktf.stringToHclTerraform(this._internalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
