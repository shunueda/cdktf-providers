// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/igtm_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IgtmInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access main domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/igtm_instance#access_domain IgtmInstance#access_domain}
  */
  readonly accessDomain: string;
  /**
  * Access subdomain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/igtm_instance#access_sub_domain IgtmInstance#access_sub_domain}
  */
  readonly accessSubDomain: string;
  /**
  * CUSTOM: Custom access domain
  * SYSTEM: System access domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/igtm_instance#access_type IgtmInstance#access_type}
  */
  readonly accessType: string;
  /**
  * Business domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/igtm_instance#domain IgtmInstance#domain}
  */
  readonly domain: string;
  /**
  * Resolution effective time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/igtm_instance#global_ttl IgtmInstance#global_ttl}
  */
  readonly globalTtl: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/igtm_instance#id IgtmInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/igtm_instance#instance_name IgtmInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Package type
  * FREE: Free version
  * STANDARD: Standard version
  * ULTIMATE: Ultimate version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/igtm_instance#package_type IgtmInstance#package_type}
  */
  readonly packageType: string;
  /**
  * Remark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/igtm_instance#remark IgtmInstance#remark}
  */
  readonly remark?: string;
  /**
  * Package resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/igtm_instance#resource_id IgtmInstance#resource_id}
  */
  readonly resourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/igtm_instance tencentcloud_igtm_instance}
*/
export class IgtmInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_igtm_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IgtmInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IgtmInstance to import
  * @param importFromId The id of the existing IgtmInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/igtm_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IgtmInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_igtm_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/igtm_instance tencentcloud_igtm_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IgtmInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: IgtmInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_igtm_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessDomain = config.accessDomain;
    this._accessSubDomain = config.accessSubDomain;
    this._accessType = config.accessType;
    this._domain = config.domain;
    this._globalTtl = config.globalTtl;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._packageType = config.packageType;
    this._remark = config.remark;
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_domain - computed: false, optional: false, required: true
  private _accessDomain?: string; 
  public get accessDomain() {
    return this.getStringAttribute('access_domain');
  }
  public set accessDomain(value: string) {
    this._accessDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessDomainInput() {
    return this._accessDomain;
  }

  // access_sub_domain - computed: false, optional: false, required: true
  private _accessSubDomain?: string; 
  public get accessSubDomain() {
    return this.getStringAttribute('access_sub_domain');
  }
  public set accessSubDomain(value: string) {
    this._accessSubDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSubDomainInput() {
    return this._accessSubDomain;
  }

  // access_type - computed: false, optional: false, required: true
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // global_ttl - computed: false, optional: false, required: true
  private _globalTtl?: number; 
  public get globalTtl() {
    return this.getNumberAttribute('global_ttl');
  }
  public set globalTtl(value: number) {
    this._globalTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTtlInput() {
    return this._globalTtl;
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // package_type - computed: false, optional: false, required: true
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_domain: cdktf.stringToTerraform(this._accessDomain),
      access_sub_domain: cdktf.stringToTerraform(this._accessSubDomain),
      access_type: cdktf.stringToTerraform(this._accessType),
      domain: cdktf.stringToTerraform(this._domain),
      global_ttl: cdktf.numberToTerraform(this._globalTtl),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      package_type: cdktf.stringToTerraform(this._packageType),
      remark: cdktf.stringToTerraform(this._remark),
      resource_id: cdktf.stringToTerraform(this._resourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_domain: {
        value: cdktf.stringToHclTerraform(this._accessDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_sub_domain: {
        value: cdktf.stringToHclTerraform(this._accessSubDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_ttl: {
        value: cdktf.numberToHclTerraform(this._globalTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
