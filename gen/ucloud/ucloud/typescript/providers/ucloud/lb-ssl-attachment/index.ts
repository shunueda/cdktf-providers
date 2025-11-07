// https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/lb_ssl_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbSslAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/lb_ssl_attachment#id LbSslAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/lb_ssl_attachment#listener_id LbSslAttachment#listener_id}
  */
  readonly listenerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/lb_ssl_attachment#load_balancer_id LbSslAttachment#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/lb_ssl_attachment#ssl_id LbSslAttachment#ssl_id}
  */
  readonly sslId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/lb_ssl_attachment ucloud_lb_ssl_attachment}
*/
export class LbSslAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ucloud_lb_ssl_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbSslAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbSslAttachment to import
  * @param importFromId The id of the existing LbSslAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/lb_ssl_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbSslAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ucloud_lb_ssl_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/lb_ssl_attachment ucloud_lb_ssl_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbSslAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: LbSslAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'ucloud_lb_ssl_attachment',
      terraformGeneratorMetadata: {
        providerName: 'ucloud',
        providerVersion: '1.39.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._listenerId = config.listenerId;
    this._loadBalancerId = config.loadBalancerId;
    this._sslId = config.sslId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
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

  // ssl_id - computed: false, optional: false, required: true
  private _sslId?: string; 
  public get sslId() {
    return this.getStringAttribute('ssl_id');
  }
  public set sslId(value: string) {
    this._sslId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslIdInput() {
    return this._sslId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      ssl_id: cdktf.stringToTerraform(this._sslId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_id: {
        value: cdktf.stringToHclTerraform(this._sslId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
