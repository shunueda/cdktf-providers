// https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppDeployConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#app AppDeploy#app}
  */
  readonly app: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#id AppDeploy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * deploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#deploy AppDeploy#deploy}
  */
  readonly deploy: AppDeployDeploy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#timeouts AppDeploy#timeouts}
  */
  readonly timeouts?: AppDeployTimeouts;
}
export interface AppDeployDeployPlan {
}

export function appDeployDeployPlanToTerraform(struct?: AppDeployDeployPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appDeployDeployPlanToHclTerraform(struct?: AppDeployDeployPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppDeployDeployPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppDeployDeployPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppDeployDeployPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpushare - computed: true, optional: false, required: false
  public get cpushare() {
    return this.getNumberAttribute('cpushare');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org - computed: true, optional: false, required: false
  public get org() {
    return this.getStringAttribute('org');
  }

  // public - computed: true, optional: false, required: false
  public get public() {
    return this.getBooleanAttribute('public');
  }

  // swap - computed: true, optional: false, required: false
  public get swap() {
    return this.getNumberAttribute('swap');
  }

  // teams - computed: true, optional: false, required: false
  public get teams() {
    return this.getListAttribute('teams');
  }
}

export class AppDeployDeployPlanList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AppDeployDeployPlanOutputReference {
    return new AppDeployDeployPlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppDeployDeployRouter {
}

export function appDeployDeployRouterToTerraform(struct?: AppDeployDeployRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appDeployDeployRouterToHclTerraform(struct?: AppDeployDeployRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppDeployDeployRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppDeployDeployRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppDeployDeployRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // opts - computed: true, optional: false, required: false
  private _opts = new cdktf.StringMap(this, "opts");
  public get opts() {
    return this._opts;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class AppDeployDeployRouterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AppDeployDeployRouterOutputReference {
    return new AppDeployDeployRouterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppDeployDeploy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#description AppDeploy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#detach AppDeploy#detach}
  */
  readonly detach?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#env AppDeploy#env}
  */
  readonly env?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#environment AppDeploy#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#image AppDeploy#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#message AppDeploy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#origin AppDeploy#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#port AppDeploy#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#private_image AppDeploy#private_image}
  */
  readonly privateImage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#protocol AppDeploy#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#registry_secret AppDeploy#registry_secret}
  */
  readonly registrySecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#registry_user AppDeploy#registry_user}
  */
  readonly registryUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#shipa_yaml AppDeploy#shipa_yaml}
  */
  readonly shipaYaml?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#step_interval AppDeploy#step_interval}
  */
  readonly stepInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#step_weight AppDeploy#step_weight}
  */
  readonly stepWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#steps AppDeploy#steps}
  */
  readonly steps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#tags AppDeploy#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#team AppDeploy#team}
  */
  readonly team?: string;
}

export function appDeployDeployToTerraform(struct?: AppDeployDeployOutputReference | AppDeployDeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    detach: cdktf.booleanToTerraform(struct!.detach),
    env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.env),
    environment: cdktf.stringToTerraform(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    message: cdktf.stringToTerraform(struct!.message),
    origin: cdktf.stringToTerraform(struct!.origin),
    port: cdktf.numberToTerraform(struct!.port),
    private_image: cdktf.booleanToTerraform(struct!.privateImage),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    registry_secret: cdktf.stringToTerraform(struct!.registrySecret),
    registry_user: cdktf.stringToTerraform(struct!.registryUser),
    shipa_yaml: cdktf.stringToTerraform(struct!.shipaYaml),
    step_interval: cdktf.numberToTerraform(struct!.stepInterval),
    step_weight: cdktf.numberToTerraform(struct!.stepWeight),
    steps: cdktf.numberToTerraform(struct!.steps),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    team: cdktf.stringToTerraform(struct!.team),
  }
}


export function appDeployDeployToHclTerraform(struct?: AppDeployDeployOutputReference | AppDeployDeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detach: {
      value: cdktf.booleanToHclTerraform(struct!.detach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.env),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_image: {
      value: cdktf.booleanToHclTerraform(struct!.privateImage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_secret: {
      value: cdktf.stringToHclTerraform(struct!.registrySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_user: {
      value: cdktf.stringToHclTerraform(struct!.registryUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shipa_yaml: {
      value: cdktf.stringToHclTerraform(struct!.shipaYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step_interval: {
      value: cdktf.numberToHclTerraform(struct!.stepInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    step_weight: {
      value: cdktf.numberToHclTerraform(struct!.stepWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    steps: {
      value: cdktf.numberToHclTerraform(struct!.steps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppDeployDeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppDeployDeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._detach !== undefined) {
      hasAnyValues = true;
      internalValueResult.detach = this._detach;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateImage = this._privateImage;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._registrySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrySecret = this._registrySecret;
    }
    if (this._registryUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryUser = this._registryUser;
    }
    if (this._shipaYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.shipaYaml = this._shipaYaml;
    }
    if (this._stepInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepInterval = this._stepInterval;
    }
    if (this._stepWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepWeight = this._stepWeight;
    }
    if (this._steps !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppDeployDeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._detach = undefined;
      this._env = undefined;
      this._environment = undefined;
      this._image = undefined;
      this._message = undefined;
      this._origin = undefined;
      this._port = undefined;
      this._privateImage = undefined;
      this._protocol = undefined;
      this._registrySecret = undefined;
      this._registryUser = undefined;
      this._shipaYaml = undefined;
      this._stepInterval = undefined;
      this._stepWeight = undefined;
      this._steps = undefined;
      this._tags = undefined;
      this._team = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._detach = value.detach;
      this._env = value.env;
      this._environment = value.environment;
      this._image = value.image;
      this._message = value.message;
      this._origin = value.origin;
      this._port = value.port;
      this._privateImage = value.privateImage;
      this._protocol = value.protocol;
      this._registrySecret = value.registrySecret;
      this._registryUser = value.registryUser;
      this._shipaYaml = value.shipaYaml;
      this._stepInterval = value.stepInterval;
      this._stepWeight = value.stepWeight;
      this._steps = value.steps;
      this._tags = value.tags;
      this._team = value.team;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // detach - computed: false, optional: true, required: false
  private _detach?: boolean | cdktf.IResolvable; 
  public get detach() {
    return this.getBooleanAttribute('detach');
  }
  public set detach(value: boolean | cdktf.IResolvable) {
    this._detach = value;
  }
  public resetDetach() {
    this._detach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachInput() {
    return this._detach;
  }

  // env - computed: false, optional: true, required: false
  private _env?: string[]; 
  public get env() {
    return this.getListAttribute('env');
  }
  public set env(value: string[]) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // plan - computed: true, optional: false, required: false
  private _plan = new AppDeployDeployPlanList(this, "plan", false);
  public get plan() {
    return this._plan;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_image - computed: false, optional: true, required: false
  private _privateImage?: boolean | cdktf.IResolvable; 
  public get privateImage() {
    return this.getBooleanAttribute('private_image');
  }
  public set privateImage(value: boolean | cdktf.IResolvable) {
    this._privateImage = value;
  }
  public resetPrivateImage() {
    this._privateImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateImageInput() {
    return this._privateImage;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // registry_secret - computed: false, optional: true, required: false
  private _registrySecret?: string; 
  public get registrySecret() {
    return this.getStringAttribute('registry_secret');
  }
  public set registrySecret(value: string) {
    this._registrySecret = value;
  }
  public resetRegistrySecret() {
    this._registrySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrySecretInput() {
    return this._registrySecret;
  }

  // registry_user - computed: false, optional: true, required: false
  private _registryUser?: string; 
  public get registryUser() {
    return this.getStringAttribute('registry_user');
  }
  public set registryUser(value: string) {
    this._registryUser = value;
  }
  public resetRegistryUser() {
    this._registryUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryUserInput() {
    return this._registryUser;
  }

  // router - computed: true, optional: false, required: false
  private _router = new AppDeployDeployRouterList(this, "router", false);
  public get router() {
    return this._router;
  }

  // shipa_yaml - computed: false, optional: true, required: false
  private _shipaYaml?: string; 
  public get shipaYaml() {
    return this.getStringAttribute('shipa_yaml');
  }
  public set shipaYaml(value: string) {
    this._shipaYaml = value;
  }
  public resetShipaYaml() {
    this._shipaYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shipaYamlInput() {
    return this._shipaYaml;
  }

  // step_interval - computed: false, optional: true, required: false
  private _stepInterval?: number; 
  public get stepInterval() {
    return this.getNumberAttribute('step_interval');
  }
  public set stepInterval(value: number) {
    this._stepInterval = value;
  }
  public resetStepInterval() {
    this._stepInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepIntervalInput() {
    return this._stepInterval;
  }

  // step_weight - computed: false, optional: true, required: false
  private _stepWeight?: number; 
  public get stepWeight() {
    return this.getNumberAttribute('step_weight');
  }
  public set stepWeight(value: number) {
    this._stepWeight = value;
  }
  public resetStepWeight() {
    this._stepWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepWeightInput() {
    return this._stepWeight;
  }

  // steps - computed: false, optional: true, required: false
  private _steps?: number; 
  public get steps() {
    return this.getNumberAttribute('steps');
  }
  public set steps(value: number) {
    this._steps = value;
  }
  public resetSteps() {
    this._steps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps;
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

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }
}
export interface AppDeployTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#default AppDeploy#default}
  */
  readonly default?: string;
}

export function appDeployTimeoutsToTerraform(struct?: AppDeployTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function appDeployTimeoutsToHclTerraform(struct?: AppDeployTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppDeployTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppDeployTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppDeployTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy shipa_app_deploy}
*/
export class AppDeploy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shipa_app_deploy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppDeploy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppDeploy to import
  * @param importFromId The id of the existing AppDeploy that should be imported. Refer to the {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppDeploy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shipa_app_deploy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_deploy shipa_app_deploy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppDeployConfig
  */
  public constructor(scope: Construct, id: string, config: AppDeployConfig) {
    super(scope, id, {
      terraformResourceType: 'shipa_app_deploy',
      terraformGeneratorMetadata: {
        providerName: 'shipa',
        providerVersion: '0.0.18',
        providerVersionConstraint: '0.0.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._app = config.app;
    this._id = config.id;
    this._deploy.internalValue = config.deploy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
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

  // deploy - computed: false, optional: false, required: true
  private _deploy = new AppDeployDeployOutputReference(this, "deploy");
  public get deploy() {
    return this._deploy;
  }
  public putDeploy(value: AppDeployDeploy) {
    this._deploy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppDeployTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppDeployTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app: cdktf.stringToTerraform(this._app),
      id: cdktf.stringToTerraform(this._id),
      deploy: appDeployDeployToTerraform(this._deploy.internalValue),
      timeouts: appDeployTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: cdktf.stringToHclTerraform(this._app),
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
      deploy: {
        value: appDeployDeployToHclTerraform(this._deploy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppDeployDeployList",
      },
      timeouts: {
        value: appDeployTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppDeployTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
