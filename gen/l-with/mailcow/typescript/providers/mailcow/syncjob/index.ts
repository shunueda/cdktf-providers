// https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyncjobConfig extends cdktf.TerraformMetaArguments {
  /**
  * is sync job active or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#active Syncjob#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * try to automap folders ("Sent items", "Sent" => "Sent" etc.) (--automap)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#automap Syncjob#automap}
  */
  readonly automap?: boolean | cdktf.IResolvable;
  /**
  * custom parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#custom_params Syncjob#custom_params}
  */
  readonly customParams?: string;
  /**
  * delete (mail) from source when completed (--delete1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#delete1 Syncjob#delete1}
  */
  readonly delete1?: boolean | cdktf.IResolvable;
  /**
  * delete messages on destination that are not on source (--delete2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#delete2 Syncjob#delete2}
  */
  readonly delete2?: boolean | cdktf.IResolvable;
  /**
  * delete duplicates on destination (--delete2duplicates)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#delete2duplicates Syncjob#delete2duplicates}
  */
  readonly delete2Duplicates?: boolean | cdktf.IResolvable;
  /**
  * the encryption method used to connect to the target mailserver (SSL,TLS,PLAIN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#enc1 Syncjob#enc1}
  */
  readonly enc1?: string;
  /**
  * exclude objects (regex) (--exclude)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#exclude Syncjob#exclude}
  */
  readonly exclude?: string;
  /**
  * the smtp server where mails should be synced from (--host1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#host1 Syncjob#host1}
  */
  readonly host1: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#id Syncjob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * only sync messages up to this age in days (--maxage)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#maxage Syncjob#maxage}
  */
  readonly maxage?: number;
  /**
  * max speed transfer limit for the sync (--maxbytespersecond)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#maxbytespersecond Syncjob#maxbytespersecond}
  */
  readonly maxbytespersecond?: string;
  /**
  * the interval in which messages should be synced (minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#mins_interval Syncjob#mins_interval}
  */
  readonly minsInterval?: number;
  /**
  * the password of the mailbox on the host (--password1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#password1 Syncjob#password1}
  */
  readonly password1: string;
  /**
  * the smtp port of the target mail server (--port1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#port1 Syncjob#port1}
  */
  readonly port1?: number;
  /**
  * skip duplicate messages across folders (first come, first serve) (--skipcrossduplicates)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#skipcrossduplicates Syncjob#skipcrossduplicates}
  */
  readonly skipcrossduplicates?: boolean | cdktf.IResolvable;
  /**
  * sync into subfolder on destination (empty = do not use subfolder) (--subfolder2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#subfolder2 Syncjob#subfolder2}
  */
  readonly subfolder2?: string;
  /**
  * subscribe all folders (--subscribeall)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#subscribeall Syncjob#subscribeall}
  */
  readonly subscribeall?: boolean | cdktf.IResolvable;
  /**
  * timeout for connection to remote host (--timeout1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#timeout1 Syncjob#timeout1}
  */
  readonly timeout1?: number;
  /**
  * timeout for connection to local host (--timeout2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#timeout2 Syncjob#timeout2}
  */
  readonly timeout2?: number;
  /**
  * user to login on remote host (--user1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#user1 Syncjob#user1}
  */
  readonly user1: string;
  /**
  * user to login on local host (--user2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#username Syncjob#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob mailcow_syncjob}
*/
export class Syncjob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mailcow_syncjob";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Syncjob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Syncjob to import
  * @param importFromId The id of the existing Syncjob that should be imported. Refer to the {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Syncjob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mailcow_syncjob", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/syncjob mailcow_syncjob} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyncjobConfig
  */
  public constructor(scope: Construct, id: string, config: SyncjobConfig) {
    super(scope, id, {
      terraformResourceType: 'mailcow_syncjob',
      terraformGeneratorMetadata: {
        providerName: 'mailcow',
        providerVersion: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._automap = config.automap;
    this._customParams = config.customParams;
    this._delete1 = config.delete1;
    this._delete2 = config.delete2;
    this._delete2Duplicates = config.delete2Duplicates;
    this._enc1 = config.enc1;
    this._exclude = config.exclude;
    this._host1 = config.host1;
    this._id = config.id;
    this._maxage = config.maxage;
    this._maxbytespersecond = config.maxbytespersecond;
    this._minsInterval = config.minsInterval;
    this._password1 = config.password1;
    this._port1 = config.port1;
    this._skipcrossduplicates = config.skipcrossduplicates;
    this._subfolder2 = config.subfolder2;
    this._subscribeall = config.subscribeall;
    this._timeout1 = config.timeout1;
    this._timeout2 = config.timeout2;
    this._user1 = config.user1;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // automap - computed: false, optional: true, required: false
  private _automap?: boolean | cdktf.IResolvable; 
  public get automap() {
    return this.getBooleanAttribute('automap');
  }
  public set automap(value: boolean | cdktf.IResolvable) {
    this._automap = value;
  }
  public resetAutomap() {
    this._automap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automapInput() {
    return this._automap;
  }

  // custom_params - computed: false, optional: true, required: false
  private _customParams?: string; 
  public get customParams() {
    return this.getStringAttribute('custom_params');
  }
  public set customParams(value: string) {
    this._customParams = value;
  }
  public resetCustomParams() {
    this._customParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParamsInput() {
    return this._customParams;
  }

  // delete1 - computed: false, optional: true, required: false
  private _delete1?: boolean | cdktf.IResolvable; 
  public get delete1() {
    return this.getBooleanAttribute('delete1');
  }
  public set delete1(value: boolean | cdktf.IResolvable) {
    this._delete1 = value;
  }
  public resetDelete1() {
    this._delete1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delete1Input() {
    return this._delete1;
  }

  // delete2 - computed: false, optional: true, required: false
  private _delete2?: boolean | cdktf.IResolvable; 
  public get delete2() {
    return this.getBooleanAttribute('delete2');
  }
  public set delete2(value: boolean | cdktf.IResolvable) {
    this._delete2 = value;
  }
  public resetDelete2() {
    this._delete2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delete2Input() {
    return this._delete2;
  }

  // delete2duplicates - computed: false, optional: true, required: false
  private _delete2Duplicates?: boolean | cdktf.IResolvable; 
  public get delete2Duplicates() {
    return this.getBooleanAttribute('delete2duplicates');
  }
  public set delete2Duplicates(value: boolean | cdktf.IResolvable) {
    this._delete2Duplicates = value;
  }
  public resetDelete2Duplicates() {
    this._delete2Duplicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delete2DuplicatesInput() {
    return this._delete2Duplicates;
  }

  // enc1 - computed: false, optional: true, required: false
  private _enc1?: string; 
  public get enc1() {
    return this.getStringAttribute('enc1');
  }
  public set enc1(value: string) {
    this._enc1 = value;
  }
  public resetEnc1() {
    this._enc1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enc1Input() {
    return this._enc1;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // host1 - computed: false, optional: false, required: true
  private _host1?: string; 
  public get host1() {
    return this.getStringAttribute('host1');
  }
  public set host1(value: string) {
    this._host1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get host1Input() {
    return this._host1;
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

  // maxage - computed: false, optional: true, required: false
  private _maxage?: number; 
  public get maxage() {
    return this.getNumberAttribute('maxage');
  }
  public set maxage(value: number) {
    this._maxage = value;
  }
  public resetMaxage() {
    this._maxage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxageInput() {
    return this._maxage;
  }

  // maxbytespersecond - computed: false, optional: true, required: false
  private _maxbytespersecond?: string; 
  public get maxbytespersecond() {
    return this.getStringAttribute('maxbytespersecond');
  }
  public set maxbytespersecond(value: string) {
    this._maxbytespersecond = value;
  }
  public resetMaxbytespersecond() {
    this._maxbytespersecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxbytespersecondInput() {
    return this._maxbytespersecond;
  }

  // mins_interval - computed: false, optional: true, required: false
  private _minsInterval?: number; 
  public get minsInterval() {
    return this.getNumberAttribute('mins_interval');
  }
  public set minsInterval(value: number) {
    this._minsInterval = value;
  }
  public resetMinsInterval() {
    this._minsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minsIntervalInput() {
    return this._minsInterval;
  }

  // password1 - computed: false, optional: false, required: true
  private _password1?: string; 
  public get password1() {
    return this.getStringAttribute('password1');
  }
  public set password1(value: string) {
    this._password1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get password1Input() {
    return this._password1;
  }

  // port1 - computed: false, optional: true, required: false
  private _port1?: number; 
  public get port1() {
    return this.getNumberAttribute('port1');
  }
  public set port1(value: number) {
    this._port1 = value;
  }
  public resetPort1() {
    this._port1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port1Input() {
    return this._port1;
  }

  // skipcrossduplicates - computed: false, optional: true, required: false
  private _skipcrossduplicates?: boolean | cdktf.IResolvable; 
  public get skipcrossduplicates() {
    return this.getBooleanAttribute('skipcrossduplicates');
  }
  public set skipcrossduplicates(value: boolean | cdktf.IResolvable) {
    this._skipcrossduplicates = value;
  }
  public resetSkipcrossduplicates() {
    this._skipcrossduplicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipcrossduplicatesInput() {
    return this._skipcrossduplicates;
  }

  // subfolder2 - computed: false, optional: true, required: false
  private _subfolder2?: string; 
  public get subfolder2() {
    return this.getStringAttribute('subfolder2');
  }
  public set subfolder2(value: string) {
    this._subfolder2 = value;
  }
  public resetSubfolder2() {
    this._subfolder2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subfolder2Input() {
    return this._subfolder2;
  }

  // subscribeall - computed: false, optional: true, required: false
  private _subscribeall?: boolean | cdktf.IResolvable; 
  public get subscribeall() {
    return this.getBooleanAttribute('subscribeall');
  }
  public set subscribeall(value: boolean | cdktf.IResolvable) {
    this._subscribeall = value;
  }
  public resetSubscribeall() {
    this._subscribeall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeallInput() {
    return this._subscribeall;
  }

  // timeout1 - computed: false, optional: true, required: false
  private _timeout1?: number; 
  public get timeout1() {
    return this.getNumberAttribute('timeout1');
  }
  public set timeout1(value: number) {
    this._timeout1 = value;
  }
  public resetTimeout1() {
    this._timeout1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeout1Input() {
    return this._timeout1;
  }

  // timeout2 - computed: false, optional: true, required: false
  private _timeout2?: number; 
  public get timeout2() {
    return this.getNumberAttribute('timeout2');
  }
  public set timeout2(value: number) {
    this._timeout2 = value;
  }
  public resetTimeout2() {
    this._timeout2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeout2Input() {
    return this._timeout2;
  }

  // user1 - computed: false, optional: false, required: true
  private _user1?: string; 
  public get user1() {
    return this.getStringAttribute('user1');
  }
  public set user1(value: string) {
    this._user1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get user1Input() {
    return this._user1;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      automap: cdktf.booleanToTerraform(this._automap),
      custom_params: cdktf.stringToTerraform(this._customParams),
      delete1: cdktf.booleanToTerraform(this._delete1),
      delete2: cdktf.booleanToTerraform(this._delete2),
      delete2duplicates: cdktf.booleanToTerraform(this._delete2Duplicates),
      enc1: cdktf.stringToTerraform(this._enc1),
      exclude: cdktf.stringToTerraform(this._exclude),
      host1: cdktf.stringToTerraform(this._host1),
      id: cdktf.stringToTerraform(this._id),
      maxage: cdktf.numberToTerraform(this._maxage),
      maxbytespersecond: cdktf.stringToTerraform(this._maxbytespersecond),
      mins_interval: cdktf.numberToTerraform(this._minsInterval),
      password1: cdktf.stringToTerraform(this._password1),
      port1: cdktf.numberToTerraform(this._port1),
      skipcrossduplicates: cdktf.booleanToTerraform(this._skipcrossduplicates),
      subfolder2: cdktf.stringToTerraform(this._subfolder2),
      subscribeall: cdktf.booleanToTerraform(this._subscribeall),
      timeout1: cdktf.numberToTerraform(this._timeout1),
      timeout2: cdktf.numberToTerraform(this._timeout2),
      user1: cdktf.stringToTerraform(this._user1),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      automap: {
        value: cdktf.booleanToHclTerraform(this._automap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_params: {
        value: cdktf.stringToHclTerraform(this._customParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete1: {
        value: cdktf.booleanToHclTerraform(this._delete1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete2: {
        value: cdktf.booleanToHclTerraform(this._delete2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete2duplicates: {
        value: cdktf.booleanToHclTerraform(this._delete2Duplicates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enc1: {
        value: cdktf.stringToHclTerraform(this._enc1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude: {
        value: cdktf.stringToHclTerraform(this._exclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host1: {
        value: cdktf.stringToHclTerraform(this._host1),
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
      maxage: {
        value: cdktf.numberToHclTerraform(this._maxage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxbytespersecond: {
        value: cdktf.stringToHclTerraform(this._maxbytespersecond),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mins_interval: {
        value: cdktf.numberToHclTerraform(this._minsInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password1: {
        value: cdktf.stringToHclTerraform(this._password1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port1: {
        value: cdktf.numberToHclTerraform(this._port1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skipcrossduplicates: {
        value: cdktf.booleanToHclTerraform(this._skipcrossduplicates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subfolder2: {
        value: cdktf.stringToHclTerraform(this._subfolder2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscribeall: {
        value: cdktf.booleanToHclTerraform(this._subscribeall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout1: {
        value: cdktf.numberToHclTerraform(this._timeout1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout2: {
        value: cdktf.numberToHclTerraform(this._timeout2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user1: {
        value: cdktf.stringToHclTerraform(this._user1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
