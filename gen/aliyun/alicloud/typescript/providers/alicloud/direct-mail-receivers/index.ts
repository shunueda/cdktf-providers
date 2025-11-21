// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/direct_mail_receivers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectMailReceiversConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/direct_mail_receivers#description DirectMailReceivers#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/direct_mail_receivers#id DirectMailReceivers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/direct_mail_receivers#receivers_alias DirectMailReceivers#receivers_alias}
  */
  readonly receiversAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/direct_mail_receivers#receivers_name DirectMailReceivers#receivers_name}
  */
  readonly receiversName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/direct_mail_receivers alicloud_direct_mail_receivers}
*/
export class DirectMailReceivers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_direct_mail_receivers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DirectMailReceivers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectMailReceivers to import
  * @param importFromId The id of the existing DirectMailReceivers that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/direct_mail_receivers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectMailReceivers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_direct_mail_receivers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/direct_mail_receivers alicloud_direct_mail_receivers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectMailReceiversConfig
  */
  public constructor(scope: Construct, id: string, config: DirectMailReceiversConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_direct_mail_receivers',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._receiversAlias = config.receiversAlias;
    this._receiversName = config.receiversName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // receivers_alias - computed: false, optional: false, required: true
  private _receiversAlias?: string; 
  public get receiversAlias() {
    return this.getStringAttribute('receivers_alias');
  }
  public set receiversAlias(value: string) {
    this._receiversAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiversAliasInput() {
    return this._receiversAlias;
  }

  // receivers_name - computed: false, optional: false, required: true
  private _receiversName?: string; 
  public get receiversName() {
    return this.getStringAttribute('receivers_name');
  }
  public set receiversName(value: string) {
    this._receiversName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiversNameInput() {
    return this._receiversName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      receivers_alias: cdktf.stringToTerraform(this._receiversAlias),
      receivers_name: cdktf.stringToTerraform(this._receiversName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      receivers_alias: {
        value: cdktf.stringToHclTerraform(this._receiversAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receivers_name: {
        value: cdktf.stringToHclTerraform(this._receiversName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
