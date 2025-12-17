// generated from terraform resource schema

import { HttppolicysetConfigpbAttributes, 
httppolicysetConfigpbAttributesToTerraform, 
httppolicysetConfigpbAttributesToHclTerraform, 
HttppolicysetConfigpbAttributesList, 
HttppolicysetHttpRequestPolicy, 
httppolicysetHttpRequestPolicyToTerraform, 
httppolicysetHttpRequestPolicyToHclTerraform, 
HttppolicysetHttpRequestPolicyList, 
HttppolicysetHttpResponsePolicy, 
httppolicysetHttpResponsePolicyToTerraform, 
httppolicysetHttpResponsePolicyToHclTerraform, 
HttppolicysetHttpResponsePolicyList, 
HttppolicysetHttpSecurityPolicy, 
httppolicysetHttpSecurityPolicyToTerraform, 
httppolicysetHttpSecurityPolicyToHclTerraform, 
HttppolicysetHttpSecurityPolicyList, 
HttppolicysetMarkers, 
httppolicysetMarkersToTerraform, 
httppolicysetMarkersToHclTerraform, 
HttppolicysetMarkersList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface HttppolicysetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#cloud_config_cksum Httppolicyset#cloud_config_cksum}
  */
  readonly cloudConfigCksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#created_by Httppolicyset#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#description Httppolicyset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#geo_db_ref Httppolicyset#geo_db_ref}
  */
  readonly geoDbRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#id Httppolicyset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#ip_reputation_db_ref Httppolicyset#ip_reputation_db_ref}
  */
  readonly ipReputationDbRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#is_internal_policy Httppolicyset#is_internal_policy}
  */
  readonly isInternalPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#name Httppolicyset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#tenant_ref Httppolicyset#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#uuid Httppolicyset#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#configpb_attributes Httppolicyset#configpb_attributes}
  */
  readonly configpbAttributes?: HttppolicysetConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * http_request_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#http_request_policy Httppolicyset#http_request_policy}
  */
  readonly httpRequestPolicy?: HttppolicysetHttpRequestPolicy[] | cdktf.IResolvable;
  /**
  * http_response_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#http_response_policy Httppolicyset#http_response_policy}
  */
  readonly httpResponsePolicy?: HttppolicysetHttpResponsePolicy[] | cdktf.IResolvable;
  /**
  * http_security_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#http_security_policy Httppolicyset#http_security_policy}
  */
  readonly httpSecurityPolicy?: HttppolicysetHttpSecurityPolicy[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#markers Httppolicyset#markers}
  */
  readonly markers?: HttppolicysetMarkers[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset avi_httppolicyset}
*/
export class Httppolicyset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_httppolicyset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Httppolicyset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Httppolicyset to import
  * @param importFromId The id of the existing Httppolicyset that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Httppolicyset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_httppolicyset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/httppolicyset avi_httppolicyset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HttppolicysetConfig
  */
  public constructor(scope: Construct, id: string, config: HttppolicysetConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_httppolicyset',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.6',
        providerVersionConstraint: '30.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudConfigCksum = config.cloudConfigCksum;
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._geoDbRef = config.geoDbRef;
    this._id = config.id;
    this._ipReputationDbRef = config.ipReputationDbRef;
    this._isInternalPolicy = config.isInternalPolicy;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._httpRequestPolicy.internalValue = config.httpRequestPolicy;
    this._httpResponsePolicy.internalValue = config.httpResponsePolicy;
    this._httpSecurityPolicy.internalValue = config.httpSecurityPolicy;
    this._markers.internalValue = config.markers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_config_cksum - computed: true, optional: true, required: false
  private _cloudConfigCksum?: string; 
  public get cloudConfigCksum() {
    return this.getStringAttribute('cloud_config_cksum');
  }
  public set cloudConfigCksum(value: string) {
    this._cloudConfigCksum = value;
  }
  public resetCloudConfigCksum() {
    this._cloudConfigCksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigCksumInput() {
    return this._cloudConfigCksum;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // geo_db_ref - computed: true, optional: true, required: false
  private _geoDbRef?: string; 
  public get geoDbRef() {
    return this.getStringAttribute('geo_db_ref');
  }
  public set geoDbRef(value: string) {
    this._geoDbRef = value;
  }
  public resetGeoDbRef() {
    this._geoDbRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoDbRefInput() {
    return this._geoDbRef;
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

  // ip_reputation_db_ref - computed: true, optional: true, required: false
  private _ipReputationDbRef?: string; 
  public get ipReputationDbRef() {
    return this.getStringAttribute('ip_reputation_db_ref');
  }
  public set ipReputationDbRef(value: string) {
    this._ipReputationDbRef = value;
  }
  public resetIpReputationDbRef() {
    this._ipReputationDbRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationDbRefInput() {
    return this._ipReputationDbRef;
  }

  // is_internal_policy - computed: false, optional: true, required: false
  private _isInternalPolicy?: string; 
  public get isInternalPolicy() {
    return this.getStringAttribute('is_internal_policy');
  }
  public set isInternalPolicy(value: string) {
    this._isInternalPolicy = value;
  }
  public resetIsInternalPolicy() {
    this._isInternalPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInternalPolicyInput() {
    return this._isInternalPolicy;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new HttppolicysetConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: HttppolicysetConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // http_request_policy - computed: false, optional: true, required: false
  private _httpRequestPolicy = new HttppolicysetHttpRequestPolicyList(this, "http_request_policy", true);
  public get httpRequestPolicy() {
    return this._httpRequestPolicy;
  }
  public putHttpRequestPolicy(value: HttppolicysetHttpRequestPolicy[] | cdktf.IResolvable) {
    this._httpRequestPolicy.internalValue = value;
  }
  public resetHttpRequestPolicy() {
    this._httpRequestPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestPolicyInput() {
    return this._httpRequestPolicy.internalValue;
  }

  // http_response_policy - computed: false, optional: true, required: false
  private _httpResponsePolicy = new HttppolicysetHttpResponsePolicyList(this, "http_response_policy", true);
  public get httpResponsePolicy() {
    return this._httpResponsePolicy;
  }
  public putHttpResponsePolicy(value: HttppolicysetHttpResponsePolicy[] | cdktf.IResolvable) {
    this._httpResponsePolicy.internalValue = value;
  }
  public resetHttpResponsePolicy() {
    this._httpResponsePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponsePolicyInput() {
    return this._httpResponsePolicy.internalValue;
  }

  // http_security_policy - computed: false, optional: true, required: false
  private _httpSecurityPolicy = new HttppolicysetHttpSecurityPolicyList(this, "http_security_policy", true);
  public get httpSecurityPolicy() {
    return this._httpSecurityPolicy;
  }
  public putHttpSecurityPolicy(value: HttppolicysetHttpSecurityPolicy[] | cdktf.IResolvable) {
    this._httpSecurityPolicy.internalValue = value;
  }
  public resetHttpSecurityPolicy() {
    this._httpSecurityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSecurityPolicyInput() {
    return this._httpSecurityPolicy.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new HttppolicysetMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: HttppolicysetMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_config_cksum: cdktf.stringToTerraform(this._cloudConfigCksum),
      created_by: cdktf.stringToTerraform(this._createdBy),
      description: cdktf.stringToTerraform(this._description),
      geo_db_ref: cdktf.stringToTerraform(this._geoDbRef),
      id: cdktf.stringToTerraform(this._id),
      ip_reputation_db_ref: cdktf.stringToTerraform(this._ipReputationDbRef),
      is_internal_policy: cdktf.stringToTerraform(this._isInternalPolicy),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(httppolicysetConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      http_request_policy: cdktf.listMapper(httppolicysetHttpRequestPolicyToTerraform, true)(this._httpRequestPolicy.internalValue),
      http_response_policy: cdktf.listMapper(httppolicysetHttpResponsePolicyToTerraform, true)(this._httpResponsePolicy.internalValue),
      http_security_policy: cdktf.listMapper(httppolicysetHttpSecurityPolicyToTerraform, true)(this._httpSecurityPolicy.internalValue),
      markers: cdktf.listMapper(httppolicysetMarkersToTerraform, true)(this._markers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_config_cksum: {
        value: cdktf.stringToHclTerraform(this._cloudConfigCksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
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
      geo_db_ref: {
        value: cdktf.stringToHclTerraform(this._geoDbRef),
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
      ip_reputation_db_ref: {
        value: cdktf.stringToHclTerraform(this._ipReputationDbRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_internal_policy: {
        value: cdktf.stringToHclTerraform(this._isInternalPolicy),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(httppolicysetConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HttppolicysetConfigpbAttributesList",
      },
      http_request_policy: {
        value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyToHclTerraform, true)(this._httpRequestPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HttppolicysetHttpRequestPolicyList",
      },
      http_response_policy: {
        value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyToHclTerraform, true)(this._httpResponsePolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HttppolicysetHttpResponsePolicyList",
      },
      http_security_policy: {
        value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyToHclTerraform, true)(this._httpSecurityPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HttppolicysetHttpSecurityPolicyList",
      },
      markers: {
        value: cdktf.listMapperHcl(httppolicysetMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HttppolicysetMarkersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
