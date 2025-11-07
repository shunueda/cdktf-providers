// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/arms_alertcontactgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArmsAlertcontactgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/arms_alertcontactgroup#alert_contact_group_name ArmsAlertcontactgroup#alert_contact_group_name}
  */
  readonly alertContactGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/arms_alertcontactgroup#contact_ids ArmsAlertcontactgroup#contact_ids}
  */
  readonly contactIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/arms_alertcontactgroup#id ArmsAlertcontactgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/arms_alertcontactgroup alibabacloudstack_arms_alertcontactgroup}
*/
export class ArmsAlertcontactgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_arms_alertcontactgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArmsAlertcontactgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArmsAlertcontactgroup to import
  * @param importFromId The id of the existing ArmsAlertcontactgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/arms_alertcontactgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArmsAlertcontactgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_arms_alertcontactgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/arms_alertcontactgroup alibabacloudstack_arms_alertcontactgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArmsAlertcontactgroupConfig
  */
  public constructor(scope: Construct, id: string, config: ArmsAlertcontactgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_arms_alertcontactgroup',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertContactGroupName = config.alertContactGroupName;
    this._contactIds = config.contactIds;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_contact_group_name - computed: false, optional: false, required: true
  private _alertContactGroupName?: string; 
  public get alertContactGroupName() {
    return this.getStringAttribute('alert_contact_group_name');
  }
  public set alertContactGroupName(value: string) {
    this._alertContactGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertContactGroupNameInput() {
    return this._alertContactGroupName;
  }

  // contact_ids - computed: false, optional: true, required: false
  private _contactIds?: string[]; 
  public get contactIds() {
    return cdktf.Fn.tolist(this.getListAttribute('contact_ids'));
  }
  public set contactIds(value: string[]) {
    this._contactIds = value;
  }
  public resetContactIds() {
    this._contactIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdsInput() {
    return this._contactIds;
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
      alert_contact_group_name: cdktf.stringToTerraform(this._alertContactGroupName),
      contact_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactIds),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_contact_group_name: {
        value: cdktf.stringToHclTerraform(this._alertContactGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
