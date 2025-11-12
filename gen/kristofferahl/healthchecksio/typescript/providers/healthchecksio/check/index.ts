// https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Channels integrated with the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check#channels Check#channels}
  */
  readonly channels?: string[];
  /**
  * Description of the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check#desc Check#desc}
  */
  readonly desc?: string;
  /**
  * Grace period for the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check#grace Check#grace}
  */
  readonly grace?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check#id Check#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allowed HTTP methods for making ping requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check#methods Check#methods}
  */
  readonly methods?: string;
  /**
  * Name of the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check#name Check#name}
  */
  readonly name: string;
  /**
  * A cron expression defining the check's schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check#schedule Check#schedule}
  */
  readonly schedule?: string;
  /**
  * Slug of the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check#slug Check#slug}
  */
  readonly slug?: string;
  /**
  * Tags associated with the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check#tags Check#tags}
  */
  readonly tags?: string[];
  /**
  * Timeout period of the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check#timeout Check#timeout}
  */
  readonly timeout?: number;
  /**
  * Timezone used for the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check#timezone Check#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check healthchecksio_check}
*/
export class Check extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "healthchecksio_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Check resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Check to import
  * @param importFromId The id of the existing Check that should be imported. Refer to the {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Check to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "healthchecksio_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/resources/check healthchecksio_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckConfig
  */
  public constructor(scope: Construct, id: string, config: CheckConfig) {
    super(scope, id, {
      terraformResourceType: 'healthchecksio_check',
      terraformGeneratorMetadata: {
        providerName: 'healthchecksio',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channels = config.channels;
    this._desc = config.desc;
    this._grace = config.grace;
    this._id = config.id;
    this._methods = config.methods;
    this._name = config.name;
    this._schedule = config.schedule;
    this._slug = config.slug;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channels - computed: false, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
  }
  public set channels(value: string[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }

  // grace - computed: false, optional: true, required: false
  private _grace?: number; 
  public get grace() {
    return this.getNumberAttribute('grace');
  }
  public set grace(value: number) {
    this._grace = value;
  }
  public resetGrace() {
    this._grace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceInput() {
    return this._grace;
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

  // methods - computed: false, optional: true, required: false
  private _methods?: string; 
  public get methods() {
    return this.getStringAttribute('methods');
  }
  public set methods(value: string) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
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

  // pause_url - computed: true, optional: false, required: false
  public get pauseUrl() {
    return this.getStringAttribute('pause_url');
  }

  // ping_url - computed: true, optional: false, required: false
  public get pingUrl() {
    return this.getStringAttribute('ping_url');
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._channels),
      desc: cdktf.stringToTerraform(this._desc),
      grace: cdktf.numberToTerraform(this._grace),
      id: cdktf.stringToTerraform(this._id),
      methods: cdktf.stringToTerraform(this._methods),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      slug: cdktf.stringToTerraform(this._slug),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      timeout: cdktf.numberToTerraform(this._timeout),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._channels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      desc: {
        value: cdktf.stringToHclTerraform(this._desc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grace: {
        value: cdktf.numberToHclTerraform(this._grace),
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
      methods: {
        value: cdktf.stringToHclTerraform(this._methods),
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
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
