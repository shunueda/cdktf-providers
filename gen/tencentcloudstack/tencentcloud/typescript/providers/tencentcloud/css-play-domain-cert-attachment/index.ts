// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_play_domain_cert_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssPlayDomainCertAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tencent cloud ssl certificate Id. Refer to `tencentcloud_ssl_certificate` to create or obtain the resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_play_domain_cert_attachment#cloud_cert_id CssPlayDomainCertAttachment#cloud_cert_id}
  */
  readonly cloudCertId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_play_domain_cert_attachment#id CssPlayDomainCertAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * domain_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_play_domain_cert_attachment#domain_info CssPlayDomainCertAttachment#domain_info}
  */
  readonly domainInfo: CssPlayDomainCertAttachmentDomainInfo;
}
export interface CssPlayDomainCertAttachmentDomainInfo {
  /**
  * domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_play_domain_cert_attachment#domain_name CssPlayDomainCertAttachment#domain_name}
  */
  readonly domainName: string;
  /**
  * Whether to enable the https rule for the domain name. 1: enable, 0: disabled, -1: remain unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_play_domain_cert_attachment#status CssPlayDomainCertAttachment#status}
  */
  readonly status: number;
}

export function cssPlayDomainCertAttachmentDomainInfoToTerraform(struct?: CssPlayDomainCertAttachmentDomainInfoOutputReference | CssPlayDomainCertAttachmentDomainInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    status: cdktf.numberToTerraform(struct!.status),
  }
}


export function cssPlayDomainCertAttachmentDomainInfoToHclTerraform(struct?: CssPlayDomainCertAttachmentDomainInfoOutputReference | CssPlayDomainCertAttachmentDomainInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CssPlayDomainCertAttachmentDomainInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssPlayDomainCertAttachmentDomainInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssPlayDomainCertAttachmentDomainInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainName = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainName = value.domainName;
      this._status = value.status;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // status - computed: false, optional: false, required: true
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_play_domain_cert_attachment tencentcloud_css_play_domain_cert_attachment}
*/
export class CssPlayDomainCertAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_play_domain_cert_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssPlayDomainCertAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssPlayDomainCertAttachment to import
  * @param importFromId The id of the existing CssPlayDomainCertAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_play_domain_cert_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssPlayDomainCertAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_play_domain_cert_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_play_domain_cert_attachment tencentcloud_css_play_domain_cert_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssPlayDomainCertAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CssPlayDomainCertAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_play_domain_cert_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudCertId = config.cloudCertId;
    this._id = config.id;
    this._domainInfo.internalValue = config.domainInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_expire_time - computed: true, optional: false, required: false
  public get certExpireTime() {
    return this.getStringAttribute('cert_expire_time');
  }

  // cert_id - computed: true, optional: false, required: false
  public get certId() {
    return this.getNumberAttribute('cert_id');
  }

  // cert_type - computed: true, optional: false, required: false
  public get certType() {
    return this.getNumberAttribute('cert_type');
  }

  // certificate_alias - computed: true, optional: false, required: false
  public get certificateAlias() {
    return this.getStringAttribute('certificate_alias');
  }

  // cloud_cert_id - computed: false, optional: true, required: false
  private _cloudCertId?: string; 
  public get cloudCertId() {
    return this.getStringAttribute('cloud_cert_id');
  }
  public set cloudCertId(value: string) {
    this._cloudCertId = value;
  }
  public resetCloudCertId() {
    this._cloudCertId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCertIdInput() {
    return this._cloudCertId;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // domain_info - computed: false, optional: false, required: true
  private _domainInfo = new CssPlayDomainCertAttachmentDomainInfoOutputReference(this, "domain_info");
  public get domainInfo() {
    return this._domainInfo;
  }
  public putDomainInfo(value: CssPlayDomainCertAttachmentDomainInfo) {
    this._domainInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInfoInput() {
    return this._domainInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_cert_id: cdktf.stringToTerraform(this._cloudCertId),
      id: cdktf.stringToTerraform(this._id),
      domain_info: cssPlayDomainCertAttachmentDomainInfoToTerraform(this._domainInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_cert_id: {
        value: cdktf.stringToHclTerraform(this._cloudCertId),
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
      domain_info: {
        value: cssPlayDomainCertAttachmentDomainInfoToHclTerraform(this._domainInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CssPlayDomainCertAttachmentDomainInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
