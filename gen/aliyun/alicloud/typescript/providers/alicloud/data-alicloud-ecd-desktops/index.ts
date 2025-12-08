// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ecd_desktops
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudEcdDesktopsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ecd_desktops#desktop_name DataAlicloudEcdDesktops#desktop_name}
  */
  readonly desktopName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ecd_desktops#end_user_ids DataAlicloudEcdDesktops#end_user_ids}
  */
  readonly endUserIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ecd_desktops#id DataAlicloudEcdDesktops#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ecd_desktops#ids DataAlicloudEcdDesktops#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ecd_desktops#name_regex DataAlicloudEcdDesktops#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ecd_desktops#office_site_id DataAlicloudEcdDesktops#office_site_id}
  */
  readonly officeSiteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ecd_desktops#output_file DataAlicloudEcdDesktops#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ecd_desktops#policy_group_id DataAlicloudEcdDesktops#policy_group_id}
  */
  readonly policyGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ecd_desktops#status DataAlicloudEcdDesktops#status}
  */
  readonly status?: string;
}
export interface DataAlicloudEcdDesktopsDesktops {
}

export function dataAlicloudEcdDesktopsDesktopsToTerraform(struct?: DataAlicloudEcdDesktopsDesktops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEcdDesktopsDesktopsToHclTerraform(struct?: DataAlicloudEcdDesktopsDesktops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEcdDesktopsDesktopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEcdDesktopsDesktops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEcdDesktopsDesktops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // desktop_id - computed: true, optional: false, required: false
  public get desktopId() {
    return this.getStringAttribute('desktop_id');
  }

  // desktop_name - computed: true, optional: false, required: false
  public get desktopName() {
    return this.getStringAttribute('desktop_name');
  }

  // desktop_type - computed: true, optional: false, required: false
  public get desktopType() {
    return this.getStringAttribute('desktop_type');
  }

  // directory_id - computed: true, optional: false, required: false
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }

  // end_user_ids - computed: true, optional: false, required: false
  public get endUserIds() {
    return this.getListAttribute('end_user_ids');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // payment_type - computed: true, optional: false, required: false
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }

  // policy_group_id - computed: true, optional: false, required: false
  public get policyGroupId() {
    return this.getStringAttribute('policy_group_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_disk_size - computed: true, optional: false, required: false
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
}

export class DataAlicloudEcdDesktopsDesktopsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEcdDesktopsDesktopsOutputReference {
    return new DataAlicloudEcdDesktopsDesktopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ecd_desktops alicloud_ecd_desktops}
*/
export class DataAlicloudEcdDesktops extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecd_desktops";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudEcdDesktops resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudEcdDesktops to import
  * @param importFromId The id of the existing DataAlicloudEcdDesktops that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ecd_desktops#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudEcdDesktops to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecd_desktops", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ecd_desktops alicloud_ecd_desktops} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudEcdDesktopsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudEcdDesktopsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecd_desktops',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._desktopName = config.desktopName;
    this._endUserIds = config.endUserIds;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._officeSiteId = config.officeSiteId;
    this._outputFile = config.outputFile;
    this._policyGroupId = config.policyGroupId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // desktop_name - computed: false, optional: true, required: false
  private _desktopName?: string; 
  public get desktopName() {
    return this.getStringAttribute('desktop_name');
  }
  public set desktopName(value: string) {
    this._desktopName = value;
  }
  public resetDesktopName() {
    this._desktopName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopNameInput() {
    return this._desktopName;
  }

  // desktops - computed: true, optional: false, required: false
  private _desktops = new DataAlicloudEcdDesktopsDesktopsList(this, "desktops", false);
  public get desktops() {
    return this._desktops;
  }

  // end_user_ids - computed: false, optional: true, required: false
  private _endUserIds?: string[]; 
  public get endUserIds() {
    return this.getListAttribute('end_user_ids');
  }
  public set endUserIds(value: string[]) {
    this._endUserIds = value;
  }
  public resetEndUserIds() {
    this._endUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserIdsInput() {
    return this._endUserIds;
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

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // office_site_id - computed: false, optional: true, required: false
  private _officeSiteId?: string; 
  public get officeSiteId() {
    return this.getStringAttribute('office_site_id');
  }
  public set officeSiteId(value: string) {
    this._officeSiteId = value;
  }
  public resetOfficeSiteId() {
    this._officeSiteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeSiteIdInput() {
    return this._officeSiteId;
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

  // policy_group_id - computed: false, optional: true, required: false
  private _policyGroupId?: string; 
  public get policyGroupId() {
    return this.getStringAttribute('policy_group_id');
  }
  public set policyGroupId(value: string) {
    this._policyGroupId = value;
  }
  public resetPolicyGroupId() {
    this._policyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyGroupIdInput() {
    return this._policyGroupId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      desktop_name: cdktf.stringToTerraform(this._desktopName),
      end_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endUserIds),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      office_site_id: cdktf.stringToTerraform(this._officeSiteId),
      output_file: cdktf.stringToTerraform(this._outputFile),
      policy_group_id: cdktf.stringToTerraform(this._policyGroupId),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      desktop_name: {
        value: cdktf.stringToHclTerraform(this._desktopName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_user_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endUserIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      office_site_id: {
        value: cdktf.stringToHclTerraform(this._officeSiteId),
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
      policy_group_id: {
        value: cdktf.stringToHclTerraform(this._policyGroupId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
