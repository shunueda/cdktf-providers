// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_domain_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbDomainExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_domain_extension#delete_protection_validation SlbDomainExtension#delete_protection_validation}
  */
  readonly deleteProtectionValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_domain_extension#domain SlbDomainExtension#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_domain_extension#frontend_port SlbDomainExtension#frontend_port}
  */
  readonly frontendPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_domain_extension#listener_port SlbDomainExtension#listener_port}
  */
  readonly listenerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_domain_extension#load_balancer_id SlbDomainExtension#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_domain_extension#server_certificate_id SlbDomainExtension#server_certificate_id}
  */
  readonly serverCertificateId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_domain_extension alibabacloudstack_slb_domain_extension}
*/
export class SlbDomainExtension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_slb_domain_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbDomainExtension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbDomainExtension to import
  * @param importFromId The id of the existing SlbDomainExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_domain_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbDomainExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_slb_domain_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_domain_extension alibabacloudstack_slb_domain_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbDomainExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: SlbDomainExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_slb_domain_extension',
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
    this._deleteProtectionValidation = config.deleteProtectionValidation;
    this._domain = config.domain;
    this._frontendPort = config.frontendPort;
    this._listenerPort = config.listenerPort;
    this._loadBalancerId = config.loadBalancerId;
    this._serverCertificateId = config.serverCertificateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_protection_validation - computed: false, optional: true, required: false
  private _deleteProtectionValidation?: boolean | cdktf.IResolvable; 
  public get deleteProtectionValidation() {
    return this.getBooleanAttribute('delete_protection_validation');
  }
  public set deleteProtectionValidation(value: boolean | cdktf.IResolvable) {
    this._deleteProtectionValidation = value;
  }
  public resetDeleteProtectionValidation() {
    this._deleteProtectionValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionValidationInput() {
    return this._deleteProtectionValidation;
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

  // domain_extension_id - computed: true, optional: false, required: false
  public get domainExtensionId() {
    return this.getStringAttribute('domain_extension_id');
  }

  // frontend_port - computed: true, optional: true, required: false
  private _frontendPort?: number; 
  public get frontendPort() {
    return this.getNumberAttribute('frontend_port');
  }
  public set frontendPort(value: number) {
    this._frontendPort = value;
  }
  public resetFrontendPort() {
    this._frontendPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortInput() {
    return this._frontendPort;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listener_port - computed: true, optional: true, required: false
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  public resetListenerPort() {
    this._listenerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // server_certificate_id - computed: false, optional: false, required: true
  private _serverCertificateId?: string; 
  public get serverCertificateId() {
    return this.getStringAttribute('server_certificate_id');
  }
  public set serverCertificateId(value: string) {
    this._serverCertificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateIdInput() {
    return this._serverCertificateId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_protection_validation: cdktf.booleanToTerraform(this._deleteProtectionValidation),
      domain: cdktf.stringToTerraform(this._domain),
      frontend_port: cdktf.numberToTerraform(this._frontendPort),
      listener_port: cdktf.numberToTerraform(this._listenerPort),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      server_certificate_id: cdktf.stringToTerraform(this._serverCertificateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_protection_validation: {
        value: cdktf.booleanToHclTerraform(this._deleteProtectionValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frontend_port: {
        value: cdktf.numberToHclTerraform(this._frontendPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listener_port: {
        value: cdktf.numberToHclTerraform(this._listenerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificate_id: {
        value: cdktf.stringToHclTerraform(this._serverCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
