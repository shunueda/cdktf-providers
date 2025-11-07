// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_connection_reuse
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateConnectionReuseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Insert HTTP Connection: keep-alive header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_connection_reuse#add_header SlbTemplateConnectionReuse#add_header}
  */
  readonly addHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_connection_reuse#id SlbTemplateConnectionReuse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Keep a number of server connections open
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_connection_reuse#keep_alive_conn SlbTemplateConnectionReuse#keep_alive_conn}
  */
  readonly keepAliveConn?: number;
  /**
  * Max Server Connections allowed (Connections per Server Port (default 1000))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_connection_reuse#limit_per_server SlbTemplateConnectionReuse#limit_per_server}
  */
  readonly limitPerServer?: number;
  /**
  * Connection Reuse Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_connection_reuse#name SlbTemplateConnectionReuse#name}
  */
  readonly name: string;
  /**
  * Connections per Server Port (default 100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_connection_reuse#num_conn_per_port SlbTemplateConnectionReuse#num_conn_per_port}
  */
  readonly numConnPerPort?: number;
  /**
  * Preopen server connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_connection_reuse#preopen SlbTemplateConnectionReuse#preopen}
  */
  readonly preopen?: number;
  /**
  * Timeout in seconds. Multiple of 60 (default 2400)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_connection_reuse#timeout SlbTemplateConnectionReuse#timeout}
  */
  readonly timeout?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_connection_reuse#user_tag SlbTemplateConnectionReuse#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_connection_reuse#uuid SlbTemplateConnectionReuse#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_connection_reuse thunder_slb_template_connection_reuse}
*/
export class SlbTemplateConnectionReuse extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_connection_reuse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateConnectionReuse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateConnectionReuse to import
  * @param importFromId The id of the existing SlbTemplateConnectionReuse that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_connection_reuse#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateConnectionReuse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_connection_reuse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_connection_reuse thunder_slb_template_connection_reuse} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateConnectionReuseConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateConnectionReuseConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_connection_reuse',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addHeader = config.addHeader;
    this._id = config.id;
    this._keepAliveConn = config.keepAliveConn;
    this._limitPerServer = config.limitPerServer;
    this._name = config.name;
    this._numConnPerPort = config.numConnPerPort;
    this._preopen = config.preopen;
    this._timeout = config.timeout;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_header - computed: false, optional: true, required: false
  private _addHeader?: number; 
  public get addHeader() {
    return this.getNumberAttribute('add_header');
  }
  public set addHeader(value: number) {
    this._addHeader = value;
  }
  public resetAddHeader() {
    this._addHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderInput() {
    return this._addHeader;
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

  // keep_alive_conn - computed: false, optional: true, required: false
  private _keepAliveConn?: number; 
  public get keepAliveConn() {
    return this.getNumberAttribute('keep_alive_conn');
  }
  public set keepAliveConn(value: number) {
    this._keepAliveConn = value;
  }
  public resetKeepAliveConn() {
    this._keepAliveConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveConnInput() {
    return this._keepAliveConn;
  }

  // limit_per_server - computed: false, optional: true, required: false
  private _limitPerServer?: number; 
  public get limitPerServer() {
    return this.getNumberAttribute('limit_per_server');
  }
  public set limitPerServer(value: number) {
    this._limitPerServer = value;
  }
  public resetLimitPerServer() {
    this._limitPerServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitPerServerInput() {
    return this._limitPerServer;
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

  // num_conn_per_port - computed: false, optional: true, required: false
  private _numConnPerPort?: number; 
  public get numConnPerPort() {
    return this.getNumberAttribute('num_conn_per_port');
  }
  public set numConnPerPort(value: number) {
    this._numConnPerPort = value;
  }
  public resetNumConnPerPort() {
    this._numConnPerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnPerPortInput() {
    return this._numConnPerPort;
  }

  // preopen - computed: false, optional: true, required: false
  private _preopen?: number; 
  public get preopen() {
    return this.getNumberAttribute('preopen');
  }
  public set preopen(value: number) {
    this._preopen = value;
  }
  public resetPreopen() {
    this._preopen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preopenInput() {
    return this._preopen;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_header: cdktf.numberToTerraform(this._addHeader),
      id: cdktf.stringToTerraform(this._id),
      keep_alive_conn: cdktf.numberToTerraform(this._keepAliveConn),
      limit_per_server: cdktf.numberToTerraform(this._limitPerServer),
      name: cdktf.stringToTerraform(this._name),
      num_conn_per_port: cdktf.numberToTerraform(this._numConnPerPort),
      preopen: cdktf.numberToTerraform(this._preopen),
      timeout: cdktf.numberToTerraform(this._timeout),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_header: {
        value: cdktf.numberToHclTerraform(this._addHeader),
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
      keep_alive_conn: {
        value: cdktf.numberToHclTerraform(this._keepAliveConn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_per_server: {
        value: cdktf.numberToHclTerraform(this._limitPerServer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_conn_per_port: {
        value: cdktf.numberToHclTerraform(this._numConnPerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preopen: {
        value: cdktf.numberToHclTerraform(this._preopen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
