// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackApiGatewayV2DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_domain#ca_certificate_id ApsarastackApiGatewayV2Domain#ca_certificate_id}
  */
  readonly caCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_domain#certificate_id ApsarastackApiGatewayV2Domain#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_domain#client_auth ApsarastackApiGatewayV2Domain#client_auth}
  */
  readonly clientAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_domain#domain ApsarastackApiGatewayV2Domain#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_domain#id ApsarastackApiGatewayV2Domain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_domain#instance_id ApsarastackApiGatewayV2Domain#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_domain#issuer_dn ApsarastackApiGatewayV2Domain#issuer_dn}
  */
  readonly issuerDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_domain#protocol ApsarastackApiGatewayV2Domain#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_domain#subject_dn ApsarastackApiGatewayV2Domain#subject_dn}
  */
  readonly subjectDn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_domain apsarastack_api_gateway_v2_domain}
*/
export class ApsarastackApiGatewayV2Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_api_gateway_v2_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackApiGatewayV2Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackApiGatewayV2Domain to import
  * @param importFromId The id of the existing ApsarastackApiGatewayV2Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackApiGatewayV2Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_api_gateway_v2_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_domain apsarastack_api_gateway_v2_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackApiGatewayV2DomainConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackApiGatewayV2DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_api_gateway_v2_domain',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCertificateId = config.caCertificateId;
    this._certificateId = config.certificateId;
    this._clientAuth = config.clientAuth;
    this._domain = config.domain;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._issuerDn = config.issuerDn;
    this._protocol = config.protocol;
    this._subjectDn = config.subjectDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate_id - computed: true, optional: true, required: false
  private _caCertificateId?: string; 
  public get caCertificateId() {
    return this.getStringAttribute('ca_certificate_id');
  }
  public set caCertificateId(value: string) {
    this._caCertificateId = value;
  }
  public resetCaCertificateId() {
    this._caCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateIdInput() {
    return this._caCertificateId;
  }

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // client_auth - computed: false, optional: true, required: false
  private _clientAuth?: string; 
  public get clientAuth() {
    return this.getStringAttribute('client_auth');
  }
  public set clientAuth(value: string) {
    this._clientAuth = value;
  }
  public resetClientAuth() {
    this._clientAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth;
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

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
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

  // issuer_dn - computed: true, optional: true, required: false
  private _issuerDn?: string; 
  public get issuerDn() {
    return this.getStringAttribute('issuer_dn');
  }
  public set issuerDn(value: string) {
    this._issuerDn = value;
  }
  public resetIssuerDn() {
    this._issuerDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerDnInput() {
    return this._issuerDn;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // subject_dn - computed: true, optional: true, required: false
  private _subjectDn?: string; 
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }
  public set subjectDn(value: string) {
    this._subjectDn = value;
  }
  public resetSubjectDn() {
    this._subjectDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectDnInput() {
    return this._subjectDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_certificate_id: cdktf.stringToTerraform(this._caCertificateId),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      client_auth: cdktf.stringToTerraform(this._clientAuth),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      issuer_dn: cdktf.stringToTerraform(this._issuerDn),
      protocol: cdktf.stringToTerraform(this._protocol),
      subject_dn: cdktf.stringToTerraform(this._subjectDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_certificate_id: {
        value: cdktf.stringToHclTerraform(this._caCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth: {
        value: cdktf.stringToHclTerraform(this._clientAuth),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer_dn: {
        value: cdktf.stringToHclTerraform(this._issuerDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_dn: {
        value: cdktf.stringToHclTerraform(this._subjectDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
