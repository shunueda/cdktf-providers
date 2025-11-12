// https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsoleApplicationInstancePermissionV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Reference to the application instance this permission belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1#app_instance ConsoleApplicationInstancePermissionV1#app_instance}
  */
  readonly appInstance: string;
  /**
  * Reference to the application this permission belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1#application ConsoleApplicationInstancePermissionV1#application}
  */
  readonly application: string;
  /**
  * Application Instance Permission name, must be unique, acts as an ID for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1#name ConsoleApplicationInstancePermissionV1#name}
  */
  readonly name: string;
  /**
  * Application Instance specification. It's immutable (update will require the resource to be recreated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1#spec ConsoleApplicationInstancePermissionV1#spec}
  */
  readonly spec: ConsoleApplicationInstancePermissionV1Spec;
}
export interface ConsoleApplicationInstancePermissionV1SpecResource {
  /**
  * Valid Kafka Connect Cluster refrence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1#connect_cluster ConsoleApplicationInstancePermissionV1#connect_cluster}
  */
  readonly connectCluster?: string;
  /**
  * Name of the resource. Must reference any sub-resource of app_instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1#name ConsoleApplicationInstancePermissionV1#name}
  */
  readonly name: string;
  /**
  * Pattern type for the resource, valid values are: LITERAL, PREFIXED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1#pattern_type ConsoleApplicationInstancePermissionV1#pattern_type}
  */
  readonly patternType: string;
  /**
  * Type of the resource, valid values are: TOPIC, CONSUMER_GROUP, SUBJECT, CONNECTOR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1#type ConsoleApplicationInstancePermissionV1#type}
  */
  readonly type: string;
}

export function consoleApplicationInstancePermissionV1SpecResourceToTerraform(struct?: ConsoleApplicationInstancePermissionV1SpecResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_cluster: cdktf.stringToTerraform(struct!.connectCluster),
    name: cdktf.stringToTerraform(struct!.name),
    pattern_type: cdktf.stringToTerraform(struct!.patternType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function consoleApplicationInstancePermissionV1SpecResourceToHclTerraform(struct?: ConsoleApplicationInstancePermissionV1SpecResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_cluster: {
      value: cdktf.stringToHclTerraform(struct!.connectCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_type: {
      value: cdktf.stringToHclTerraform(struct!.patternType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleApplicationInstancePermissionV1SpecResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleApplicationInstancePermissionV1SpecResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectCluster = this._connectCluster;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._patternType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternType = this._patternType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleApplicationInstancePermissionV1SpecResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectCluster = undefined;
      this._name = undefined;
      this._patternType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectCluster = value.connectCluster;
      this._name = value.name;
      this._patternType = value.patternType;
      this._type = value.type;
    }
  }

  // connect_cluster - computed: true, optional: true, required: false
  private _connectCluster?: string; 
  public get connectCluster() {
    return this.getStringAttribute('connect_cluster');
  }
  public set connectCluster(value: string) {
    this._connectCluster = value;
  }
  public resetConnectCluster() {
    this._connectCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectClusterInput() {
    return this._connectCluster;
  }

  // name - computed: true, optional: false, required: true
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

  // pattern_type - computed: true, optional: false, required: true
  private _patternType?: string; 
  public get patternType() {
    return this.getStringAttribute('pattern_type');
  }
  public set patternType(value: string) {
    this._patternType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternTypeInput() {
    return this._patternType;
  }

  // type - computed: true, optional: false, required: true
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
}
export interface ConsoleApplicationInstancePermissionV1Spec {
  /**
  * Reference to an application instance. Must be on the same Kafka cluster as app_instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1#granted_to ConsoleApplicationInstancePermissionV1#granted_to}
  */
  readonly grantedTo: string;
  /**
  * Resources associated with this application instance permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1#resource ConsoleApplicationInstancePermissionV1#resource}
  */
  readonly resource?: ConsoleApplicationInstancePermissionV1SpecResource;
  /**
  * Permission applied to the service account, valid values are: NONE, READ, WRITE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1#service_account_permission ConsoleApplicationInstancePermissionV1#service_account_permission}
  */
  readonly serviceAccountPermission: string;
  /**
  * Permission applied to the user, valid values are: NONE, READ, WRITE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1#user_permission ConsoleApplicationInstancePermissionV1#user_permission}
  */
  readonly userPermission: string;
}

export function consoleApplicationInstancePermissionV1SpecToTerraform(struct?: ConsoleApplicationInstancePermissionV1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    granted_to: cdktf.stringToTerraform(struct!.grantedTo),
    resource: consoleApplicationInstancePermissionV1SpecResourceToTerraform(struct!.resource),
    service_account_permission: cdktf.stringToTerraform(struct!.serviceAccountPermission),
    user_permission: cdktf.stringToTerraform(struct!.userPermission),
  }
}


export function consoleApplicationInstancePermissionV1SpecToHclTerraform(struct?: ConsoleApplicationInstancePermissionV1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    granted_to: {
      value: cdktf.stringToHclTerraform(struct!.grantedTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: consoleApplicationInstancePermissionV1SpecResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleApplicationInstancePermissionV1SpecResource",
    },
    service_account_permission: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountPermission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_permission: {
      value: cdktf.stringToHclTerraform(struct!.userPermission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleApplicationInstancePermissionV1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleApplicationInstancePermissionV1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grantedTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantedTo = this._grantedTo;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._serviceAccountPermission !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountPermission = this._serviceAccountPermission;
    }
    if (this._userPermission !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPermission = this._userPermission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleApplicationInstancePermissionV1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grantedTo = undefined;
      this._resource.internalValue = undefined;
      this._serviceAccountPermission = undefined;
      this._userPermission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grantedTo = value.grantedTo;
      this._resource.internalValue = value.resource;
      this._serviceAccountPermission = value.serviceAccountPermission;
      this._userPermission = value.userPermission;
    }
  }

  // granted_to - computed: false, optional: false, required: true
  private _grantedTo?: string; 
  public get grantedTo() {
    return this.getStringAttribute('granted_to');
  }
  public set grantedTo(value: string) {
    this._grantedTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantedToInput() {
    return this._grantedTo;
  }

  // resource - computed: true, optional: true, required: false
  private _resource = new ConsoleApplicationInstancePermissionV1SpecResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: ConsoleApplicationInstancePermissionV1SpecResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // service_account_permission - computed: false, optional: false, required: true
  private _serviceAccountPermission?: string; 
  public get serviceAccountPermission() {
    return this.getStringAttribute('service_account_permission');
  }
  public set serviceAccountPermission(value: string) {
    this._serviceAccountPermission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountPermissionInput() {
    return this._serviceAccountPermission;
  }

  // user_permission - computed: false, optional: false, required: true
  private _userPermission?: string; 
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }
  public set userPermission(value: string) {
    this._userPermission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPermissionInput() {
    return this._userPermission;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1 conduktor_console_application_instance_permission_v1}
*/
export class ConsoleApplicationInstancePermissionV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_console_application_instance_permission_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsoleApplicationInstancePermissionV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsoleApplicationInstancePermissionV1 to import
  * @param importFromId The id of the existing ConsoleApplicationInstancePermissionV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsoleApplicationInstancePermissionV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_console_application_instance_permission_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_application_instance_permission_v1 conduktor_console_application_instance_permission_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsoleApplicationInstancePermissionV1Config
  */
  public constructor(scope: Construct, id: string, config: ConsoleApplicationInstancePermissionV1Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_console_application_instance_permission_v1',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appInstance = config.appInstance;
    this._application = config.application;
    this._name = config.name;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_instance - computed: false, optional: false, required: true
  private _appInstance?: string; 
  public get appInstance() {
    return this.getStringAttribute('app_instance');
  }
  public set appInstance(value: string) {
    this._appInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInstanceInput() {
    return this._appInstance;
  }

  // application - computed: false, optional: false, required: true
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new ConsoleApplicationInstancePermissionV1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ConsoleApplicationInstancePermissionV1Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_instance: cdktf.stringToTerraform(this._appInstance),
      application: cdktf.stringToTerraform(this._application),
      name: cdktf.stringToTerraform(this._name),
      spec: consoleApplicationInstancePermissionV1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_instance: {
        value: cdktf.stringToHclTerraform(this._appInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application: {
        value: cdktf.stringToHclTerraform(this._application),
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
      spec: {
        value: consoleApplicationInstancePermissionV1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsoleApplicationInstancePermissionV1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
