// https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CronjobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the app the cronjob belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob#app_id Cronjob#app_id}
  */
  readonly appId: string;
  /**
  * Description for your cronjob
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob#description Cronjob#description}
  */
  readonly description: string;
  /**
  * Models the action to be executed by the cron job. Exactly one of `url` or `command` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob#destination Cronjob#destination}
  */
  readonly destination: CronjobDestination;
  /**
  * The email address to send the cron job's output to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob#email Cronjob#email}
  */
  readonly email?: string;
  /**
  * The interval of the cron job; this should be a cron expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob#interval Cronjob#interval}
  */
  readonly interval: string;
  /**
  * The ID of the project the cronjob belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob#project_id Cronjob#project_id}
  */
  readonly projectId: string;
}
export interface CronjobDestinationCommand {
  /**
  * The interpreter to use for the command. Must be a valid path to an executable within the project environment (typically, `/bin/bash` or `/usr/bin/php` should work).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob#interpreter Cronjob#interpreter}
  */
  readonly interpreter: string;
  /**
  * A list of parameters to pass to the command. Each parameter must be a valid string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob#parameters Cronjob#parameters}
  */
  readonly parameters?: string[];
  /**
  * The path to the file to run. Must be a valid path to an executable file within the project environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob#path Cronjob#path}
  */
  readonly path: string;
}

export function cronjobDestinationCommandToTerraform(struct?: CronjobDestinationCommand | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function cronjobDestinationCommandToHclTerraform(struct?: CronjobDestinationCommand | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interpreter: {
      value: cdktf.stringToHclTerraform(struct!.interpreter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CronjobDestinationCommandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CronjobDestinationCommand | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CronjobDestinationCommand | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interpreter = undefined;
      this._parameters = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interpreter = value.interpreter;
      this._parameters = value.parameters;
      this._path = value.path;
    }
  }

  // interpreter - computed: false, optional: false, required: true
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface CronjobDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob#command Cronjob#command}
  */
  readonly command?: CronjobDestinationCommand;
  /**
  * The URL that should be requested by the cron job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob#url Cronjob#url}
  */
  readonly url?: string;
}

export function cronjobDestinationToTerraform(struct?: CronjobDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cronjobDestinationCommandToTerraform(struct!.command),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cronjobDestinationToHclTerraform(struct?: CronjobDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cronjobDestinationCommandToHclTerraform(struct!.command),
      isBlock: true,
      type: "struct",
      storageClassType: "CronjobDestinationCommand",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CronjobDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CronjobDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CronjobDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command.internalValue = value.command;
      this._url = value.url;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command = new CronjobDestinationCommandOutputReference(this, "command");
  public get command() {
    return this._command;
  }
  public putCommand(value: CronjobDestinationCommand) {
    this._command.internalValue = value;
  }
  public resetCommand() {
    this._command.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob mittwald_cronjob}
*/
export class Cronjob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mittwald_cronjob";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cronjob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cronjob to import
  * @param importFromId The id of the existing Cronjob that should be imported. Refer to the {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cronjob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mittwald_cronjob", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/cronjob mittwald_cronjob} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CronjobConfig
  */
  public constructor(scope: Construct, id: string, config: CronjobConfig) {
    super(scope, id, {
      terraformResourceType: 'mittwald_cronjob',
      terraformGeneratorMetadata: {
        providerName: 'mittwald',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._description = config.description;
    this._destination.internalValue = config.destination;
    this._email = config.email;
    this._interval = config.interval;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new CronjobDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: CronjobDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      description: cdktf.stringToTerraform(this._description),
      destination: cronjobDestinationToTerraform(this._destination.internalValue),
      email: cdktf.stringToTerraform(this._email),
      interval: cdktf.stringToTerraform(this._interval),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
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
      destination: {
        value: cronjobDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CronjobDestination",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
