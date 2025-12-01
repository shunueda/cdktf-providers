// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbServerCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate#alicloud_certifacte_id SlbServerCertificate#alicloud_certifacte_id}
  */
  readonly alicloudCertifacteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate#alicloud_certifacte_name SlbServerCertificate#alicloud_certifacte_name}
  */
  readonly alicloudCertifacteName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate#alicloud_certificate_id SlbServerCertificate#alicloud_certificate_id}
  */
  readonly alicloudCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate#alicloud_certificate_name SlbServerCertificate#alicloud_certificate_name}
  */
  readonly alicloudCertificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate#alicloud_certificate_region_id SlbServerCertificate#alicloud_certificate_region_id}
  */
  readonly alicloudCertificateRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate#id SlbServerCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate#name SlbServerCertificate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate#private_key SlbServerCertificate#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate#resource_group_id SlbServerCertificate#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate#server_certificate SlbServerCertificate#server_certificate}
  */
  readonly serverCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate#tags SlbServerCertificate#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate alicloud_slb_server_certificate}
*/
export class SlbServerCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_slb_server_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbServerCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbServerCertificate to import
  * @param importFromId The id of the existing SlbServerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbServerCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_slb_server_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/slb_server_certificate alicloud_slb_server_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbServerCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbServerCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_slb_server_certificate',
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
    this._alicloudCertifacteId = config.alicloudCertifacteId;
    this._alicloudCertifacteName = config.alicloudCertifacteName;
    this._alicloudCertificateId = config.alicloudCertificateId;
    this._alicloudCertificateName = config.alicloudCertificateName;
    this._alicloudCertificateRegionId = config.alicloudCertificateRegionId;
    this._id = config.id;
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._resourceGroupId = config.resourceGroupId;
    this._serverCertificate = config.serverCertificate;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alicloud_certifacte_id - computed: false, optional: true, required: false
  private _alicloudCertifacteId?: string; 
  public get alicloudCertifacteId() {
    return this.getStringAttribute('alicloud_certifacte_id');
  }
  public set alicloudCertifacteId(value: string) {
    this._alicloudCertifacteId = value;
  }
  public resetAlicloudCertifacteId() {
    this._alicloudCertifacteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudCertifacteIdInput() {
    return this._alicloudCertifacteId;
  }

  // alicloud_certifacte_name - computed: false, optional: true, required: false
  private _alicloudCertifacteName?: string; 
  public get alicloudCertifacteName() {
    return this.getStringAttribute('alicloud_certifacte_name');
  }
  public set alicloudCertifacteName(value: string) {
    this._alicloudCertifacteName = value;
  }
  public resetAlicloudCertifacteName() {
    this._alicloudCertifacteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudCertifacteNameInput() {
    return this._alicloudCertifacteName;
  }

  // alicloud_certificate_id - computed: false, optional: true, required: false
  private _alicloudCertificateId?: string; 
  public get alicloudCertificateId() {
    return this.getStringAttribute('alicloud_certificate_id');
  }
  public set alicloudCertificateId(value: string) {
    this._alicloudCertificateId = value;
  }
  public resetAlicloudCertificateId() {
    this._alicloudCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudCertificateIdInput() {
    return this._alicloudCertificateId;
  }

  // alicloud_certificate_name - computed: false, optional: true, required: false
  private _alicloudCertificateName?: string; 
  public get alicloudCertificateName() {
    return this.getStringAttribute('alicloud_certificate_name');
  }
  public set alicloudCertificateName(value: string) {
    this._alicloudCertificateName = value;
  }
  public resetAlicloudCertificateName() {
    this._alicloudCertificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudCertificateNameInput() {
    return this._alicloudCertificateName;
  }

  // alicloud_certificate_region_id - computed: false, optional: true, required: false
  private _alicloudCertificateRegionId?: string; 
  public get alicloudCertificateRegionId() {
    return this.getStringAttribute('alicloud_certificate_region_id');
  }
  public set alicloudCertificateRegionId(value: string) {
    this._alicloudCertificateRegionId = value;
  }
  public resetAlicloudCertificateRegionId() {
    this._alicloudCertificateRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudCertificateRegionIdInput() {
    return this._alicloudCertificateRegionId;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // server_certificate - computed: false, optional: true, required: false
  private _serverCertificate?: string; 
  public get serverCertificate() {
    return this.getStringAttribute('server_certificate');
  }
  public set serverCertificate(value: string) {
    this._serverCertificate = value;
  }
  public resetServerCertificate() {
    this._serverCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate;
  }

  // tags - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alicloud_certifacte_id: cdktf.stringToTerraform(this._alicloudCertifacteId),
      alicloud_certifacte_name: cdktf.stringToTerraform(this._alicloudCertifacteName),
      alicloud_certificate_id: cdktf.stringToTerraform(this._alicloudCertificateId),
      alicloud_certificate_name: cdktf.stringToTerraform(this._alicloudCertificateName),
      alicloud_certificate_region_id: cdktf.stringToTerraform(this._alicloudCertificateRegionId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      server_certificate: cdktf.stringToTerraform(this._serverCertificate),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alicloud_certifacte_id: {
        value: cdktf.stringToHclTerraform(this._alicloudCertifacteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_certifacte_name: {
        value: cdktf.stringToHclTerraform(this._alicloudCertifacteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_certificate_id: {
        value: cdktf.stringToHclTerraform(this._alicloudCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_certificate_name: {
        value: cdktf.stringToHclTerraform(this._alicloudCertificateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_certificate_region_id: {
        value: cdktf.stringToHclTerraform(this._alicloudCertificateRegionId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificate: {
        value: cdktf.stringToHclTerraform(this._serverCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
