// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/object_storage_accesskey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIonoscloudObjectStorageAccesskeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access key metadata is a string of 92 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/object_storage_accesskey#accesskey DataIonoscloudObjectStorageAccesskey#accesskey}
  */
  readonly accesskey?: string;
  /**
  * Description of the Access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/object_storage_accesskey#description DataIonoscloudObjectStorageAccesskey#description}
  */
  readonly description?: string;
  /**
  * The ID (UUID) of the AccessKey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/object_storage_accesskey#id DataIonoscloudObjectStorageAccesskey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/object_storage_accesskey ionoscloud_object_storage_accesskey}
*/
export class DataIonoscloudObjectStorageAccesskey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_object_storage_accesskey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIonoscloudObjectStorageAccesskey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIonoscloudObjectStorageAccesskey to import
  * @param importFromId The id of the existing DataIonoscloudObjectStorageAccesskey that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/object_storage_accesskey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIonoscloudObjectStorageAccesskey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_object_storage_accesskey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/object_storage_accesskey ionoscloud_object_storage_accesskey} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIonoscloudObjectStorageAccesskeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIonoscloudObjectStorageAccesskeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_object_storage_accesskey',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.20',
        providerVersionConstraint: '6.7.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accesskey = config.accesskey;
    this._description = config.description;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accesskey - computed: true, optional: true, required: false
  private _accesskey?: string; 
  public get accesskey() {
    return this.getStringAttribute('accesskey');
  }
  public set accesskey(value: string) {
    this._accesskey = value;
  }
  public resetAccesskey() {
    this._accesskey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accesskeyInput() {
    return this._accesskey;
  }

  // canonical_user_id - computed: true, optional: false, required: false
  public get canonicalUserId() {
    return this.getStringAttribute('canonical_user_id');
  }

  // contract_user_id - computed: true, optional: false, required: false
  public get contractUserId() {
    return this.getStringAttribute('contract_user_id');
  }

  // description - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accesskey: cdktf.stringToTerraform(this._accesskey),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accesskey: {
        value: cdktf.stringToHclTerraform(this._accesskey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
