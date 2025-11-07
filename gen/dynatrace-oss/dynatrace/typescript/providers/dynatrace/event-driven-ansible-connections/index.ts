// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/event_driven_ansible_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventDrivenAnsibleConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag if Red Hat Event Stream is use for Event-Driven Ansible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/event_driven_ansible_connections#event_stream_enabled EventDrivenAnsibleConnections#event_stream_enabled}
  */
  readonly eventStreamEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/event_driven_ansible_connections#id EventDrivenAnsibleConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique and clearly identifiable connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/event_driven_ansible_connections#name EventDrivenAnsibleConnections#name}
  */
  readonly name: string;
  /**
  * API access token for the Event-Driven Ansible Controller. Please note that this token is not refreshed and can expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/event_driven_ansible_connections#token EventDrivenAnsibleConnections#token}
  */
  readonly token?: string;
  /**
  * Possible Values: `Api_token`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/event_driven_ansible_connections#type EventDrivenAnsibleConnections#type}
  */
  readonly type: string;
  /**
  * URL of the Event-Driven Ansible source plugin webhook. For example, https://eda.yourdomain.com:5010
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/event_driven_ansible_connections#url EventDrivenAnsibleConnections#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/event_driven_ansible_connections dynatrace_event_driven_ansible_connections}
*/
export class EventDrivenAnsibleConnections extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_event_driven_ansible_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventDrivenAnsibleConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventDrivenAnsibleConnections to import
  * @param importFromId The id of the existing EventDrivenAnsibleConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/event_driven_ansible_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventDrivenAnsibleConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_event_driven_ansible_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/event_driven_ansible_connections dynatrace_event_driven_ansible_connections} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventDrivenAnsibleConnectionsConfig
  */
  public constructor(scope: Construct, id: string, config: EventDrivenAnsibleConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_event_driven_ansible_connections',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eventStreamEnabled = config.eventStreamEnabled;
    this._id = config.id;
    this._name = config.name;
    this._token = config.token;
    this._type = config.type;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_stream_enabled - computed: false, optional: true, required: false
  private _eventStreamEnabled?: boolean | cdktf.IResolvable; 
  public get eventStreamEnabled() {
    return this.getBooleanAttribute('event_stream_enabled');
  }
  public set eventStreamEnabled(value: boolean | cdktf.IResolvable) {
    this._eventStreamEnabled = value;
  }
  public resetEventStreamEnabled() {
    this._eventStreamEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStreamEnabledInput() {
    return this._eventStreamEnabled;
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_stream_enabled: cdktf.booleanToTerraform(this._eventStreamEnabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      token: cdktf.stringToTerraform(this._token),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event_stream_enabled: {
        value: cdktf.booleanToHclTerraform(this._eventStreamEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
