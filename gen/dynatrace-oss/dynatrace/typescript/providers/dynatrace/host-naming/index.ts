// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostNamingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The rule is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#enabled HostNaming#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The name to be assigned to matching entities. You can use the following placeholders here:  * `{AwsAutoScalingGroup:Name}`  * `{AwsAvailabilityZone:Name}`  * `{AwsElasticLoadBalancer:Name}`  * `{AwsRelationalDatabaseService:DBName}`  * `{AwsRelationalDatabaseService:Endpoint}`  * `{AwsRelationalDatabaseService:Engine}`  * `{AwsRelationalDatabaseService:InstanceClass}`  * `{AwsRelationalDatabaseService:Name}`  * `{AwsRelationalDatabaseService:Port}`  * `{AzureRegion:Name}`  * `{AzureScaleSet:Name}`  * `{AzureVm:Name}`  * `{CloudFoundryOrganization:Name}`  * `{CustomDevice:DetectedName}`  * `{CustomDevice:DnsName}`  * `{CustomDevice:IpAddress}`  * `{CustomDevice:Port}`  * `{DockerContainerGroupInstance:ContainerName}`  * `{DockerContainerGroupInstance:FullImageName}`  * `{DockerContainerGroupInstance:ImageVersion}`  * `{DockerContainerGroupInstance:StrippedImageName}`  * `{ESXIHost:HardwareModel}`  * `{ESXIHost:HardwareVendor}`  * `{ESXIHost:Name}`  * `{ESXIHost:ProductName}`  * `{ESXIHost:ProductVersion}`  * `{Ec2Instance:AmiId}`  * `{Ec2Instance:BeanstalkEnvironmentName}`  * `{Ec2Instance:InstanceId}`  * `{Ec2Instance:InstanceType}`  * `{Ec2Instance:LocalHostName}`  * `{Ec2Instance:Name}`  * `{Ec2Instance:PublicHostName}`  * `{Ec2Instance:SecurityGroup}`  * `{GoogleComputeInstance:Id}`  * `{GoogleComputeInstance:IpAddresses}`  * `{GoogleComputeInstance:MachineType}`  * `{GoogleComputeInstance:Name}`  * `{GoogleComputeInstance:ProjectId}`  * `{GoogleComputeInstance:Project}`  * `{Host:AWSNameTag}`  * `{Host:AixLogicalCpuCount}`  * `{Host:AzureHostName}`  * `{Host:AzureSiteName}`  * `{Host:BoshDeploymentId}`  * `{Host:BoshInstanceId}`  * `{Host:BoshInstanceName}`  * `{Host:BoshName}`  * `{Host:BoshStemcellVersion}`  * `{Host:CpuCores}`  * `{Host:DetectedName}`  * `{Host:Environment:AppName}`  * `{Host:Environment:BoshReleaseVersion}`  * `{Host:Environment:Environment}`  * `{Host:Environment:Link}`  * `{Host:Environment:Organization}`  * `{Host:Environment:Owner}`  * `{Host:Environment:Support}`  * `{Host:IpAddress}`  * `{Host:LogicalCpuCores}`  * `{Host:OneAgentCustomHostName}`  * `{Host:OperatingSystemVersion}`  * `{Host:PaasMemoryLimit}`  * `{HostGroup:Name}`  * `{KubernetesCluster:Name}`  * `{KubernetesNode:DetectedName}`  * `{OpenstackAvailabilityZone:Name}`  * `{OpenstackZone:Name}`  * `{OpenstackComputeNode:Name}`  * `{OpenstackProject:Name}`  * `{OpenstackVm:InstanceType}`  * `{OpenstackVm:Name}`  * `{OpenstackVm:SecurityGroup}`  * `{ProcessGroup:AmazonECRImageAccountId}`  * `{ProcessGroup:AmazonECRImageRegion}`  * `{ProcessGroup:AmazonECSCluster}`  * `{ProcessGroup:AmazonECSContainerName}`  * `{ProcessGroup:AmazonECSFamily}`  * `{ProcessGroup:AmazonECSRevision}`  * `{ProcessGroup:AmazonLambdaFunctionName}`  * `{ProcessGroup:AmazonRegion}`  * `{ProcessGroup:ApacheConfigPath}`  * `{ProcessGroup:ApacheSparkMasterIpAddress}`  * `{ProcessGroup:AspDotNetCoreApplicationPath}`  * `{ProcessGroup:AspDotNetCoreApplicationPath}`  * `{ProcessGroup:AzureHostName}`  * `{ProcessGroup:AzureSiteName}`  * `{ProcessGroup:CassandraClusterName}`  * `{ProcessGroup:CatalinaBase}`  * `{ProcessGroup:CatalinaHome}`  * `{ProcessGroup:CloudFoundryAppId}`  * `{ProcessGroup:CloudFoundryAppName}`  * `{ProcessGroup:CloudFoundryInstanceIndex}`  * `{ProcessGroup:CloudFoundrySpaceId}`  * `{ProcessGroup:CloudFoundrySpaceName}`  * `{ProcessGroup:ColdFusionJvmConfigFile}`  * `{ProcessGroup:ColdFusionServiceName}`  * `{ProcessGroup:CommandLineArgs}`  * `{ProcessGroup:DetectedName}`  * `{ProcessGroup:DotNetCommandPath}`  * `{ProcessGroup:DotNetCommand}`  * `{ProcessGroup:DotNetClusterId}`  * `{ProcessGroup:DotNetNodeId}`  * `{ProcessGroup:ElasticsearchClusterName}`  * `{ProcessGroup:ElasticsearchNodeName}`  * `{ProcessGroup:EquinoxConfigPath}`  * `{ProcessGroup:ExeName}`  * `{ProcessGroup:ExePath}`  * `{ProcessGroup:GlassFishDomainName}`  * `{ProcessGroup:GlassFishInstanceName}`  * `{ProcessGroup:GoogleAppEngineInstance}`  * `{ProcessGroup:GoogleAppEngineService}`  * `{ProcessGroup:GoogleCloudProject}`  * `{ProcessGroup:HybrisBinDirectory}`  * `{ProcessGroup:HybrisConfigDirectory}`  * `{ProcessGroup:HybrisConfigDirectory}`  * `{ProcessGroup:HybrisDataDirectory}`  * `{ProcessGroup:IBMCicsRegion}`  * `{ProcessGroup:IBMCtgName}`  * `{ProcessGroup:IBMImsConnectRegion}`  * `{ProcessGroup:IBMImsControlRegion}`  * `{ProcessGroup:IBMImsMessageProcessingRegion}`  * `{ProcessGroup:IBMImsSoapGwName}`  * `{ProcessGroup:IBMIntegrationNodeName}`  * `{ProcessGroup:IBMIntegrationServerName}`  * `{ProcessGroup:IISAppPool}`  * `{ProcessGroup:IISRoleName}`  * `{ProcessGroup:JbossHome}`  * `{ProcessGroup:JbossMode}`  * `{ProcessGroup:JbossServerName}`  * `{ProcessGroup:JavaJarFile}`  * `{ProcessGroup:JavaJarPath}`  * `{ProcessGroup:JavaMainCLass}`  * `{ProcessGroup:KubernetesBasePodName}`  * `{ProcessGroup:KubernetesContainerName}`  * `{ProcessGroup:KubernetesFullPodName}`  * `{ProcessGroup:KubernetesNamespace}`  * `{ProcessGroup:KubernetesPodUid}`  * `{ProcessGroup:MssqlInstanceName}`  * `{ProcessGroup:NodeJsAppBaseDirectory}`  * `{ProcessGroup:NodeJsAppName}`  * `{ProcessGroup:NodeJsScriptName}`  * `{ProcessGroup:OracleSid}`  * `{ProcessGroup:PHPScriptPath}`  * `{ProcessGroup:PHPWorkingDirectory}`  * `{ProcessGroup:Ports}`  * `{ProcessGroup:RubyAppRootPath}`  * `{ProcessGroup:RubyScriptPath}`  * `{ProcessGroup:SoftwareAGInstallRoot}`  * `{ProcessGroup:SoftwareAGProductPropertyName}`  * `{ProcessGroup:SpringBootAppName}`  * `{ProcessGroup:SpringBootProfileName}`  * `{ProcessGroup:SpringBootStartupClass}`  * `{ProcessGroup:TIBCOBusinessWorksAppNodeName}`  * `{ProcessGroup:TIBCOBusinessWorksAppSpaceName}`  * `{ProcessGroup:TIBCOBusinessWorksCeAppName}`  * `{ProcessGroup:TIBCOBusinessWorksCeVersion}`  * `{ProcessGroup:TIBCOBusinessWorksDomainName}`  * `{ProcessGroup:TIBCOBusinessWorksEnginePropertyFilePath}`  * `{ProcessGroup:TIBCOBusinessWorksEnginePropertyFile}`  * `{ProcessGroup:TIBCOBusinessWorksHome}`  * `{ProcessGroup:VarnishInstanceName}`  * `{ProcessGroup:WebLogicClusterName}`  * `{ProcessGroup:WebLogicDomainName}`  * `{ProcessGroup:WebLogicHome}`  * `{ProcessGroup:WebLogicName}`  * `{ProcessGroup:WebSphereCellName}`  * `{ProcessGroup:WebSphereClusterName}`  * `{ProcessGroup:WebSphereNodeName}`  * `{ProcessGroup:WebSphereServerName}`  * `{ProcessGroup:ActorSystem}`  * `{Service:STGServerName}`  * `{Service:DatabaseHostName}`  * `{Service:DatabaseName}`  * `{Service:DatabaseVendor}`  * `{Service:DetectedName}`  * `{Service:EndpointPath}`  * `{Service:EndpointPathGatewayUrl}`  * `{Service:IIBApplicationName}`  * `{Service:MessageListenerClassName}`  * `{Service:Port}`  * `{Service:PublicDomainName}`  * `{Service:RemoteEndpoint}`  * `{Service:RemoteName}`  * `{Service:WebApplicationId}`  * `{Service:WebContextRoot}`  * `{Service:WebServerName}`  * `{Service:WebServiceNamespace}`  * `{Service:WebServiceName}`  * `{VmwareDatacenter:Name}`  * `{VmwareVm:Name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#format HostNaming#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#id HostNaming#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#name HostNaming#name}
  */
  readonly name: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#conditions HostNaming#conditions}
  */
  readonly conditions?: HostNamingConditions[] | cdktf.IResolvable;
}
export interface HostNamingConditionsConditionApplicationType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionApplicationTypeToTerraform(struct?: HostNamingConditionsConditionApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionApplicationTypeToHclTerraform(struct?: HostNamingConditionsConditionApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionApplicationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionApplicationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionApplicationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionApplicationTypeList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionApplicationType[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionApplicationTypeOutputReference {
    return new HostNamingConditionsConditionApplicationTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionApplicationTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be APPLICATION_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionApplicationTypeComparisonToTerraform(struct?: HostNamingConditionsConditionApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionApplicationTypeComparisonToHclTerraform(struct?: HostNamingConditionsConditionApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionApplicationTypeComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionApplicationTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionApplicationTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionApplicationTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionApplicationTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionApplicationTypeComparisonOutputReference {
    return new HostNamingConditionsConditionApplicationTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionAzureComputeMode {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are DEDICATED or SHARED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionAzureComputeModeToTerraform(struct?: HostNamingConditionsConditionAzureComputeMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionAzureComputeModeToHclTerraform(struct?: HostNamingConditionsConditionAzureComputeMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionAzureComputeModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionAzureComputeMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionAzureComputeMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionAzureComputeModeList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionAzureComputeMode[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionAzureComputeModeOutputReference {
    return new HostNamingConditionsConditionAzureComputeModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionAzureComputeModeComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are DEDICATED or SHARED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionAzureComputeModeComparisonToTerraform(struct?: HostNamingConditionsConditionAzureComputeModeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionAzureComputeModeComparisonToHclTerraform(struct?: HostNamingConditionsConditionAzureComputeModeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionAzureComputeModeComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionAzureComputeModeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionAzureComputeModeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionAzureComputeModeComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionAzureComputeModeComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionAzureComputeModeComparisonOutputReference {
    return new HostNamingConditionsConditionAzureComputeModeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionAzureSku {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BASIC, DYNAMIC, FREE, PREMIUM, SHARED and STANDARD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionAzureSkuToTerraform(struct?: HostNamingConditionsConditionAzureSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionAzureSkuToHclTerraform(struct?: HostNamingConditionsConditionAzureSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionAzureSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionAzureSku | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionAzureSku | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionAzureSkuList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionAzureSku[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionAzureSkuOutputReference {
    return new HostNamingConditionsConditionAzureSkuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionAzureSkuComparision {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be AZURE_SKU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BASIC, DYNAMIC, FREE, PREMIUM, SHARED and STANDARD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionAzureSkuComparisionToTerraform(struct?: HostNamingConditionsConditionAzureSkuComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionAzureSkuComparisionToHclTerraform(struct?: HostNamingConditionsConditionAzureSkuComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionAzureSkuComparisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionAzureSkuComparision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionAzureSkuComparision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionAzureSkuComparisionList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionAzureSkuComparision[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionAzureSkuComparisionOutputReference {
    return new HostNamingConditionsConditionAzureSkuComparisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionBaseComparisonBasic {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The type of comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function hostNamingConditionsConditionBaseComparisonBasicToTerraform(struct?: HostNamingConditionsConditionBaseComparisonBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function hostNamingConditionsConditionBaseComparisonBasicToHclTerraform(struct?: HostNamingConditionsConditionBaseComparisonBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionBaseComparisonBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionBaseComparisonBasic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionBaseComparisonBasic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class HostNamingConditionsConditionBaseComparisonBasicList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionBaseComparisonBasic[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionBaseComparisonBasicOutputReference {
    return new HostNamingConditionsConditionBaseComparisonBasicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionBaseConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#attribute HostNaming#attribute}
  */
  readonly attribute: string;
  /**
  * Defines the actual set of fields depending on the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function hostNamingConditionsConditionBaseConditionKeyToTerraform(struct?: HostNamingConditionsConditionBaseConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function hostNamingConditionsConditionBaseConditionKeyToHclTerraform(struct?: HostNamingConditionsConditionBaseConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionBaseConditionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionBaseConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionBaseConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class HostNamingConditionsConditionBaseConditionKeyList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionBaseConditionKey[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionBaseConditionKeyOutputReference {
    return new HostNamingConditionsConditionBaseConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionBitness {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are 32 and 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionBitnessToTerraform(struct?: HostNamingConditionsConditionBitness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionBitnessToHclTerraform(struct?: HostNamingConditionsConditionBitness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionBitnessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionBitness | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionBitness | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionBitnessList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionBitness[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionBitnessOutputReference {
    return new HostNamingConditionsConditionBitnessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionBitnessComparision {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be BITNESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are 32 and 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionBitnessComparisionToTerraform(struct?: HostNamingConditionsConditionBitnessComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionBitnessComparisionToHclTerraform(struct?: HostNamingConditionsConditionBitnessComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionBitnessComparisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionBitnessComparision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionBitnessComparision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionBitnessComparisionList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionBitnessComparision[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionBitnessComparisionOutputReference {
    return new HostNamingConditionsConditionBitnessComparisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionCloudType {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AZURE, EC2, GOOGLE_CLOUD_PLATFORM, OPENSTACK, ORACLE and UNRECOGNIZED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionCloudTypeToTerraform(struct?: HostNamingConditionsConditionCloudType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionCloudTypeToHclTerraform(struct?: HostNamingConditionsConditionCloudType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionCloudTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionCloudType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionCloudType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionCloudTypeList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionCloudType[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionCloudTypeOutputReference {
    return new HostNamingConditionsConditionCloudTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionCloudTypeComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be CLOUD_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AZURE, EC2, GOOGLE_CLOUD_PLATFORM, OPENSTACK, ORACLE and UNRECOGNIZED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionCloudTypeComparisonToTerraform(struct?: HostNamingConditionsConditionCloudTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionCloudTypeComparisonToHclTerraform(struct?: HostNamingConditionsConditionCloudTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionCloudTypeComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionCloudTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionCloudTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionCloudTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionCloudTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionCloudTypeComparisonOutputReference {
    return new HostNamingConditionsConditionCloudTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The type of comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function hostNamingConditionsConditionComparisonToTerraform(struct?: HostNamingConditionsConditionComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function hostNamingConditionsConditionComparisonToHclTerraform(struct?: HostNamingConditionsConditionComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class HostNamingConditionsConditionComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionComparisonOutputReference {
    return new HostNamingConditionsConditionComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionCustomApplicationType {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AMAZON_ECHO, DESKTOP, EMBEDDED, IOT, MICROSOFT_HOLOLENS and UFO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionCustomApplicationTypeToTerraform(struct?: HostNamingConditionsConditionCustomApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionCustomApplicationTypeToHclTerraform(struct?: HostNamingConditionsConditionCustomApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionCustomApplicationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionCustomApplicationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionCustomApplicationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionCustomApplicationTypeList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionCustomApplicationType[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionCustomApplicationTypeOutputReference {
    return new HostNamingConditionsConditionCustomApplicationTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionCustomApplicationTypeComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be CUSTOM_APPLICATION_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AMAZON_ECHO, DESKTOP, EMBEDDED, IOT, MICROSOFT_HOLOLENS and UFO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionCustomApplicationTypeComparisonToTerraform(struct?: HostNamingConditionsConditionCustomApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionCustomApplicationTypeComparisonToHclTerraform(struct?: HostNamingConditionsConditionCustomApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionCustomApplicationTypeComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionCustomApplicationTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionCustomApplicationTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionCustomApplicationTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionCustomApplicationTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionCustomApplicationTypeComparisonOutputReference {
    return new HostNamingConditionsConditionCustomApplicationTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionCustomHostMetadataDynamicKey {
  /**
  * The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#key HostNaming#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are ENVIRONMENT, GOOGLE_COMPUTE_ENGINE and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#source HostNaming#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function hostNamingConditionsConditionCustomHostMetadataDynamicKeyToTerraform(struct?: HostNamingConditionsConditionCustomHostMetadataDynamicKeyOutputReference | HostNamingConditionsConditionCustomHostMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function hostNamingConditionsConditionCustomHostMetadataDynamicKeyToHclTerraform(struct?: HostNamingConditionsConditionCustomHostMetadataDynamicKeyOutputReference | HostNamingConditionsConditionCustomHostMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionCustomHostMetadataDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostNamingConditionsConditionCustomHostMetadataDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionCustomHostMetadataDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface HostNamingConditionsConditionCustomHostMetadata {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#attribute HostNaming#attribute}
  */
  readonly attribute: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#dynamic_key HostNaming#dynamic_key}
  */
  readonly dynamicKey: HostNamingConditionsConditionCustomHostMetadataDynamicKey;
}

export function hostNamingConditionsConditionCustomHostMetadataToTerraform(struct?: HostNamingConditionsConditionCustomHostMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: hostNamingConditionsConditionCustomHostMetadataDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function hostNamingConditionsConditionCustomHostMetadataToHclTerraform(struct?: HostNamingConditionsConditionCustomHostMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: hostNamingConditionsConditionCustomHostMetadataDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionCustomHostMetadataDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionCustomHostMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionCustomHostMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionCustomHostMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new HostNamingConditionsConditionCustomHostMetadataDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: HostNamingConditionsConditionCustomHostMetadataDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class HostNamingConditionsConditionCustomHostMetadataList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionCustomHostMetadata[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionCustomHostMetadataOutputReference {
    return new HostNamingConditionsConditionCustomHostMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey {
  /**
  * The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#key HostNaming#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are ENVIRONMENT, GOOGLE_COMPUTE_ENGINE and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#source HostNaming#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function hostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyToTerraform(struct?: HostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyOutputReference | HostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function hostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyToHclTerraform(struct?: HostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyOutputReference | HostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface HostNamingConditionsConditionCustomHostMetadataConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#attribute HostNaming#attribute}
  */
  readonly attribute: string;
  /**
  * if specified, needs to be HOST_CUSTOM_METADATA_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#dynamic_key HostNaming#dynamic_key}
  */
  readonly dynamicKey: HostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey;
}

export function hostNamingConditionsConditionCustomHostMetadataConditionKeyToTerraform(struct?: HostNamingConditionsConditionCustomHostMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: hostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function hostNamingConditionsConditionCustomHostMetadataConditionKeyToHclTerraform(struct?: HostNamingConditionsConditionCustomHostMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: hostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionCustomHostMetadataConditionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionCustomHostMetadataConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionCustomHostMetadataConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new HostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: HostNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class HostNamingConditionsConditionCustomHostMetadataConditionKeyList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionCustomHostMetadataConditionKey[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionCustomHostMetadataConditionKeyOutputReference {
    return new HostNamingConditionsConditionCustomHostMetadataConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionCustomProcessMetadataDynamicKey {
  /**
  *  The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#key HostNaming#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are CLOUD_FOUNDRY, ENVIRONMENT, GOOGLE_CLOUD, KUBERNETES and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#source HostNaming#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function hostNamingConditionsConditionCustomProcessMetadataDynamicKeyToTerraform(struct?: HostNamingConditionsConditionCustomProcessMetadataDynamicKeyOutputReference | HostNamingConditionsConditionCustomProcessMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function hostNamingConditionsConditionCustomProcessMetadataDynamicKeyToHclTerraform(struct?: HostNamingConditionsConditionCustomProcessMetadataDynamicKeyOutputReference | HostNamingConditionsConditionCustomProcessMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionCustomProcessMetadataDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostNamingConditionsConditionCustomProcessMetadataDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionCustomProcessMetadataDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface HostNamingConditionsConditionCustomProcessMetadata {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#attribute HostNaming#attribute}
  */
  readonly attribute: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#dynamic_key HostNaming#dynamic_key}
  */
  readonly dynamicKey: HostNamingConditionsConditionCustomProcessMetadataDynamicKey;
}

export function hostNamingConditionsConditionCustomProcessMetadataToTerraform(struct?: HostNamingConditionsConditionCustomProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: hostNamingConditionsConditionCustomProcessMetadataDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function hostNamingConditionsConditionCustomProcessMetadataToHclTerraform(struct?: HostNamingConditionsConditionCustomProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: hostNamingConditionsConditionCustomProcessMetadataDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionCustomProcessMetadataDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionCustomProcessMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionCustomProcessMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionCustomProcessMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new HostNamingConditionsConditionCustomProcessMetadataDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: HostNamingConditionsConditionCustomProcessMetadataDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class HostNamingConditionsConditionCustomProcessMetadataList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionCustomProcessMetadata[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionCustomProcessMetadataOutputReference {
    return new HostNamingConditionsConditionCustomProcessMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey {
  /**
  *  The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#key HostNaming#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are CLOUD_FOUNDRY, ENVIRONMENT, GOOGLE_CLOUD, KUBERNETES and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#source HostNaming#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function hostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyToTerraform(struct?: HostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyOutputReference | HostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function hostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyToHclTerraform(struct?: HostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyOutputReference | HostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface HostNamingConditionsConditionCustomProcessMetadataConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#attribute HostNaming#attribute}
  */
  readonly attribute: string;
  /**
  * if specified, needs to be PROCESS_CUSTOM_METADATA_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#dynamic_key HostNaming#dynamic_key}
  */
  readonly dynamicKey: HostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey;
}

export function hostNamingConditionsConditionCustomProcessMetadataConditionKeyToTerraform(struct?: HostNamingConditionsConditionCustomProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: hostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function hostNamingConditionsConditionCustomProcessMetadataConditionKeyToHclTerraform(struct?: HostNamingConditionsConditionCustomProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: hostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionCustomProcessMetadataConditionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionCustomProcessMetadataConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionCustomProcessMetadataConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new HostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: HostNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class HostNamingConditionsConditionCustomProcessMetadataConditionKeyList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionCustomProcessMetadataConditionKey[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionCustomProcessMetadataConditionKeyOutputReference {
    return new HostNamingConditionsConditionCustomProcessMetadataConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionDatabaseTopology {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLUSTER, EMBEDDED, FAILOVER, IPC, LOAD_BALANCING, SINGLE_SERVER and UNSPECIFIED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionDatabaseTopologyToTerraform(struct?: HostNamingConditionsConditionDatabaseTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionDatabaseTopologyToHclTerraform(struct?: HostNamingConditionsConditionDatabaseTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionDatabaseTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionDatabaseTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionDatabaseTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionDatabaseTopologyList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionDatabaseTopology[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionDatabaseTopologyOutputReference {
    return new HostNamingConditionsConditionDatabaseTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionDatabaseTopologyComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be DATABASE_TOPOLOGY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLUSTER, EMBEDDED, FAILOVER, IPC, LOAD_BALANCING, SINGLE_SERVER and UNSPECIFIED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionDatabaseTopologyComparisonToTerraform(struct?: HostNamingConditionsConditionDatabaseTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionDatabaseTopologyComparisonToHclTerraform(struct?: HostNamingConditionsConditionDatabaseTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionDatabaseTopologyComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionDatabaseTopologyComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionDatabaseTopologyComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionDatabaseTopologyComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionDatabaseTopologyComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionDatabaseTopologyComparisonOutputReference {
    return new HostNamingConditionsConditionDatabaseTopologyComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionDcrumDecoder {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ALL_OTHER, CITRIX_APPFLOW, CITRIX_ICA, CITRIX_ICA_OVER_SSL, DB2_DRDA, HTTP, HTTPS, HTTP_EXPRESS, INFORMIX, MYSQL, ORACLE, SAP_GUI, SAP_GUI_OVER_HTTP, SAP_GUI_OVER_HTTPS, SAP_HANA_DB, SAP_RFC, SSL and TDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionDcrumDecoderToTerraform(struct?: HostNamingConditionsConditionDcrumDecoder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionDcrumDecoderToHclTerraform(struct?: HostNamingConditionsConditionDcrumDecoder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionDcrumDecoderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionDcrumDecoder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionDcrumDecoder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionDcrumDecoderList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionDcrumDecoder[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionDcrumDecoderOutputReference {
    return new HostNamingConditionsConditionDcrumDecoderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionDcrumDecoderComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be DCRUM_DECODER_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ALL_OTHER, CITRIX_APPFLOW, CITRIX_ICA, CITRIX_ICA_OVER_SSL, DB2_DRDA, HTTP, HTTPS, HTTP_EXPRESS, INFORMIX, MYSQL, ORACLE, SAP_GUI, SAP_GUI_OVER_HTTP, SAP_GUI_OVER_HTTPS, SAP_HANA_DB, SAP_RFC, SSL and TDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionDcrumDecoderComparisonToTerraform(struct?: HostNamingConditionsConditionDcrumDecoderComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionDcrumDecoderComparisonToHclTerraform(struct?: HostNamingConditionsConditionDcrumDecoderComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionDcrumDecoderComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionDcrumDecoderComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionDcrumDecoderComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionDcrumDecoderComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionDcrumDecoderComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionDcrumDecoderComparisonOutputReference {
    return new HostNamingConditionsConditionDcrumDecoderComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionEntity {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Currently only EQUALS is supported. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionEntityToTerraform(struct?: HostNamingConditionsConditionEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionEntityToHclTerraform(struct?: HostNamingConditionsConditionEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionEntityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionEntity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionEntity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionEntityList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionEntity[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionEntityOutputReference {
    return new HostNamingConditionsConditionEntityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionEntityIdComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Currently only EQUALS is supported. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be ENTITY_ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionEntityIdComparisonToTerraform(struct?: HostNamingConditionsConditionEntityIdComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionEntityIdComparisonToHclTerraform(struct?: HostNamingConditionsConditionEntityIdComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionEntityIdComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionEntityIdComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionEntityIdComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionEntityIdComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionEntityIdComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionEntityIdComparisonOutputReference {
    return new HostNamingConditionsConditionEntityIdComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionHostTechValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set. Possible values are APPARMOR, BOSH, BOSHBPM, CLOUDFOUNDRY, CONTAINERD, CRIO, DIEGO_CELL, DOCKER, GARDEN, GRSECURITY, KUBERNETES, OPENSHIFT, OPENSTACK_COMPUTE, OPENSTACK_CONTROLLER and SELINUX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#verbatim_type HostNaming#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function hostNamingConditionsConditionHostTechValueToTerraform(struct?: HostNamingConditionsConditionHostTechValueOutputReference | HostNamingConditionsConditionHostTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function hostNamingConditionsConditionHostTechValueToHclTerraform(struct?: HostNamingConditionsConditionHostTechValueOutputReference | HostNamingConditionsConditionHostTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionHostTechValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostNamingConditionsConditionHostTechValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionHostTechValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface HostNamingConditionsConditionHostTech {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: HostNamingConditionsConditionHostTechValue;
}

export function hostNamingConditionsConditionHostTechToTerraform(struct?: HostNamingConditionsConditionHostTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: hostNamingConditionsConditionHostTechValueToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionHostTechToHclTerraform(struct?: HostNamingConditionsConditionHostTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: hostNamingConditionsConditionHostTechValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionHostTechValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionHostTechOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionHostTech | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionHostTech | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new HostNamingConditionsConditionHostTechValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: HostNamingConditionsConditionHostTechValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class HostNamingConditionsConditionHostTechList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionHostTech[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionHostTechOutputReference {
    return new HostNamingConditionsConditionHostTechOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionHypervisor {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AHV, HYPER_V, KVM, LPAR, QEMU, VIRTUAL_BOX, VMWARE, WPAR and XEN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionHypervisorToTerraform(struct?: HostNamingConditionsConditionHypervisor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionHypervisorToHclTerraform(struct?: HostNamingConditionsConditionHypervisor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionHypervisorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionHypervisor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionHypervisor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionHypervisorList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionHypervisor[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionHypervisorOutputReference {
    return new HostNamingConditionsConditionHypervisorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionHypervisorTypeComparision {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be HYPERVISOR_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AHV, HYPER_V, KVM, LPAR, QEMU, VIRTUAL_BOX, VMWARE, WPAR and XEN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionHypervisorTypeComparisionToTerraform(struct?: HostNamingConditionsConditionHypervisorTypeComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionHypervisorTypeComparisionToHclTerraform(struct?: HostNamingConditionsConditionHypervisorTypeComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionHypervisorTypeComparisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionHypervisorTypeComparision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionHypervisorTypeComparision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionHypervisorTypeComparisionList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionHypervisorTypeComparision[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionHypervisorTypeComparisionOutputReference {
    return new HostNamingConditionsConditionHypervisorTypeComparisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionIndexedName {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS, CONTAINS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionIndexedNameToTerraform(struct?: HostNamingConditionsConditionIndexedName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionIndexedNameToHclTerraform(struct?: HostNamingConditionsConditionIndexedName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionIndexedNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionIndexedName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionIndexedName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionIndexedNameList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionIndexedName[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionIndexedNameOutputReference {
    return new HostNamingConditionsConditionIndexedNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionIndexedNameComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS, CONTAINS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INDEXED_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionIndexedNameComparisonToTerraform(struct?: HostNamingConditionsConditionIndexedNameComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionIndexedNameComparisonToHclTerraform(struct?: HostNamingConditionsConditionIndexedNameComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionIndexedNameComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionIndexedNameComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionIndexedNameComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionIndexedNameComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionIndexedNameComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionIndexedNameComparisonOutputReference {
    return new HostNamingConditionsConditionIndexedNameComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionIndexedString {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionIndexedStringToTerraform(struct?: HostNamingConditionsConditionIndexedString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionIndexedStringToHclTerraform(struct?: HostNamingConditionsConditionIndexedString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionIndexedStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionIndexedString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionIndexedString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionIndexedStringList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionIndexedString[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionIndexedStringOutputReference {
    return new HostNamingConditionsConditionIndexedStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionIndexedStringComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INDEXED_STRING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionIndexedStringComparisonToTerraform(struct?: HostNamingConditionsConditionIndexedStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionIndexedStringComparisonToHclTerraform(struct?: HostNamingConditionsConditionIndexedStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionIndexedStringComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionIndexedStringComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionIndexedStringComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionIndexedStringComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionIndexedStringComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionIndexedStringComparisonOutputReference {
    return new HostNamingConditionsConditionIndexedStringComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionIndexedTagValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#context HostNaming#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#key HostNaming#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionIndexedTagValueToTerraform(struct?: HostNamingConditionsConditionIndexedTagValueOutputReference | HostNamingConditionsConditionIndexedTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionIndexedTagValueToHclTerraform(struct?: HostNamingConditionsConditionIndexedTagValueOutputReference | HostNamingConditionsConditionIndexedTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionIndexedTagValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostNamingConditionsConditionIndexedTagValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionIndexedTagValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface HostNamingConditionsConditionIndexedTag {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: HostNamingConditionsConditionIndexedTagValue;
}

export function hostNamingConditionsConditionIndexedTagToTerraform(struct?: HostNamingConditionsConditionIndexedTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: hostNamingConditionsConditionIndexedTagValueToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionIndexedTagToHclTerraform(struct?: HostNamingConditionsConditionIndexedTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: hostNamingConditionsConditionIndexedTagValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionIndexedTagValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionIndexedTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionIndexedTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionIndexedTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new HostNamingConditionsConditionIndexedTagValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: HostNamingConditionsConditionIndexedTagValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class HostNamingConditionsConditionIndexedTagList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionIndexedTag[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionIndexedTagOutputReference {
    return new HostNamingConditionsConditionIndexedTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionIndexedTagComparisonValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#context HostNaming#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#key HostNaming#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionIndexedTagComparisonValueToTerraform(struct?: HostNamingConditionsConditionIndexedTagComparisonValueOutputReference | HostNamingConditionsConditionIndexedTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionIndexedTagComparisonValueToHclTerraform(struct?: HostNamingConditionsConditionIndexedTagComparisonValueOutputReference | HostNamingConditionsConditionIndexedTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionIndexedTagComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostNamingConditionsConditionIndexedTagComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionIndexedTagComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface HostNamingConditionsConditionIndexedTagComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INDEXED_TAG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: HostNamingConditionsConditionIndexedTagComparisonValue;
}

export function hostNamingConditionsConditionIndexedTagComparisonToTerraform(struct?: HostNamingConditionsConditionIndexedTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: hostNamingConditionsConditionIndexedTagComparisonValueToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionIndexedTagComparisonToHclTerraform(struct?: HostNamingConditionsConditionIndexedTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: hostNamingConditionsConditionIndexedTagComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionIndexedTagComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionIndexedTagComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionIndexedTagComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionIndexedTagComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new HostNamingConditionsConditionIndexedTagComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: HostNamingConditionsConditionIndexedTagComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class HostNamingConditionsConditionIndexedTagComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionIndexedTagComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionIndexedTagComparisonOutputReference {
    return new HostNamingConditionsConditionIndexedTagComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionInteger {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS, EXISTS, GREATER_THAN, GREATER_THAN_OR_EQUAL, LOWER_THAN and LOWER_THAN_OR_EQUAL. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: number;
}

export function hostNamingConditionsConditionIntegerToTerraform(struct?: HostNamingConditionsConditionInteger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionIntegerToHclTerraform(struct?: HostNamingConditionsConditionInteger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionIntegerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionInteger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionInteger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionIntegerList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionInteger[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionIntegerOutputReference {
    return new HostNamingConditionsConditionIntegerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionIntegerComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS, EXISTS, GREATER_THAN, GREATER_THAN_OR_EQUAL, LOWER_THAN and LOWER_THAN_OR_EQUAL. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INTEGER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: number;
}

export function hostNamingConditionsConditionIntegerComparisonToTerraform(struct?: HostNamingConditionsConditionIntegerComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionIntegerComparisonToHclTerraform(struct?: HostNamingConditionsConditionIntegerComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionIntegerComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionIntegerComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionIntegerComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionIntegerComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionIntegerComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionIntegerComparisonOutputReference {
    return new HostNamingConditionsConditionIntegerComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionIpaddress {
  /**
  *  The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#case_sensitive HostNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS, IS_IP_IN_RANGE and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionIpaddressToTerraform(struct?: HostNamingConditionsConditionIpaddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionIpaddressToHclTerraform(struct?: HostNamingConditionsConditionIpaddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionIpaddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionIpaddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionIpaddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionIpaddressList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionIpaddress[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionIpaddressOutputReference {
    return new HostNamingConditionsConditionIpaddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionIpaddressComparison {
  /**
  *  The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#case_sensitive HostNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS, IS_IP_IN_RANGE and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be IP_ADDRESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionIpaddressComparisonToTerraform(struct?: HostNamingConditionsConditionIpaddressComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionIpaddressComparisonToHclTerraform(struct?: HostNamingConditionsConditionIpaddressComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionIpaddressComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionIpaddressComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionIpaddressComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionIpaddressComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionIpaddressComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionIpaddressComparisonOutputReference {
    return new HostNamingConditionsConditionIpaddressComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#attribute HostNaming#attribute}
  */
  readonly attribute: string;
  /**
  * Defines the actual set of fields depending on the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function hostNamingConditionsConditionKeyToTerraform(struct?: HostNamingConditionsConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function hostNamingConditionsConditionKeyToHclTerraform(struct?: HostNamingConditionsConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class HostNamingConditionsConditionKeyList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionKey[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionKeyOutputReference {
    return new HostNamingConditionsConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionMobilePlatform {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ANDROID, IOS, LINUX, MAC_OS, OTHER, TVOS and WINDOWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionMobilePlatformToTerraform(struct?: HostNamingConditionsConditionMobilePlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionMobilePlatformToHclTerraform(struct?: HostNamingConditionsConditionMobilePlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionMobilePlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionMobilePlatform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionMobilePlatform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionMobilePlatformList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionMobilePlatform[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionMobilePlatformOutputReference {
    return new HostNamingConditionsConditionMobilePlatformOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionMobilePlatformComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be MOBILE_PLATFORM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ANDROID, IOS, LINUX, MAC_OS, OTHER, TVOS and WINDOWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionMobilePlatformComparisonToTerraform(struct?: HostNamingConditionsConditionMobilePlatformComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionMobilePlatformComparisonToHclTerraform(struct?: HostNamingConditionsConditionMobilePlatformComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionMobilePlatformComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionMobilePlatformComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionMobilePlatformComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionMobilePlatformComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionMobilePlatformComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionMobilePlatformComparisonOutputReference {
    return new HostNamingConditionsConditionMobilePlatformComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionOsArch {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ARM, IA64, PARISC, PPC, PPCLE, S390, SPARC, X86 and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionOsArchToTerraform(struct?: HostNamingConditionsConditionOsArch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionOsArchToHclTerraform(struct?: HostNamingConditionsConditionOsArch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionOsArchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionOsArch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionOsArch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionOsArchList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionOsArch[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionOsArchOutputReference {
    return new HostNamingConditionsConditionOsArchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionOsType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AIX, DARWIN, HPUX, LINUX, SOLARIS, WINDOWS and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionOsTypeToTerraform(struct?: HostNamingConditionsConditionOsType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionOsTypeToHclTerraform(struct?: HostNamingConditionsConditionOsType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionOsTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionOsType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionOsType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionOsTypeList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionOsType[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionOsTypeOutputReference {
    return new HostNamingConditionsConditionOsTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionOsarchitectureComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be OS_ARCHITECTURE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ARM, IA64, PARISC, PPC, PPCLE, S390, SPARC, X86 and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionOsarchitectureComparisonToTerraform(struct?: HostNamingConditionsConditionOsarchitectureComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionOsarchitectureComparisonToHclTerraform(struct?: HostNamingConditionsConditionOsarchitectureComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionOsarchitectureComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionOsarchitectureComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionOsarchitectureComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionOsarchitectureComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionOsarchitectureComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionOsarchitectureComparisonOutputReference {
    return new HostNamingConditionsConditionOsarchitectureComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionOstypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be OS_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AIX, DARWIN, HPUX, LINUX, SOLARIS, WINDOWS and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionOstypeComparisonToTerraform(struct?: HostNamingConditionsConditionOstypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionOstypeComparisonToHclTerraform(struct?: HostNamingConditionsConditionOstypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionOstypeComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionOstypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionOstypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionOstypeComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionOstypeComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionOstypeComparisonOutputReference {
    return new HostNamingConditionsConditionOstypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionPaasType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AWS_ECS_EC2, AWS_ECS_FARGATE, AWS_LAMBDA, AZURE_FUNCTIONS, AZURE_WEBSITES, CLOUD_FOUNDRY, GOOGLE_APP_ENGINE, HEROKU, KUBERNETES and OPENSHIFT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionPaasTypeToTerraform(struct?: HostNamingConditionsConditionPaasType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionPaasTypeToHclTerraform(struct?: HostNamingConditionsConditionPaasType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionPaasTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionPaasType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionPaasType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionPaasTypeList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionPaasType[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionPaasTypeOutputReference {
    return new HostNamingConditionsConditionPaasTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionPaasTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be PAAS_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AWS_ECS_EC2, AWS_ECS_FARGATE, AWS_LAMBDA, AZURE_FUNCTIONS, AZURE_WEBSITES, CLOUD_FOUNDRY, GOOGLE_APP_ENGINE, HEROKU, KUBERNETES and OPENSHIFT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionPaasTypeComparisonToTerraform(struct?: HostNamingConditionsConditionPaasTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionPaasTypeComparisonToHclTerraform(struct?: HostNamingConditionsConditionPaasTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionPaasTypeComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionPaasTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionPaasTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionPaasTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionPaasTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionPaasTypeComparisonOutputReference {
    return new HostNamingConditionsConditionPaasTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionProcessMetadata {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#attribute HostNaming#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are AMAZON_ECR_IMAGE_ACCOUNT_ID,AMAZON_ECR_IMAGE_REGION, AMAZON_LAMBDA_FUNCTION_NAME, AMAZON_REGION, APACHE_CONFIG_PATH, APACHE_SPARK_MASTER_IP_ADDRESS, ASP_DOT_NET_CORE_APPLICATION_PATH, AWS_ECS_CLUSTER, AWS_ECS_CONTAINERNAME, AWS_ECS_FAMILY, AWS_ECS_REVISION, CASSANDRA_CLUSTER_NAME, CATALINA_BASE, CATALINA_HOME, CLOUD_FOUNDRY_APP_ID, CLOUD_FOUNDRY_APP_NAME, CLOUD_FOUNDRY_INSTANCE_INDEX, CLOUD_FOUNDRY_SPACE_ID, CLOUD_FOUNDRY_SPACE_NAME, COLDFUSION_JVM_CONFIG_FILE, COLDFUSION_SERVICE_NAME, COMMAND_LINE_ARGS, DOTNET_COMMAND, DOTNET_COMMAND_PATH, DYNATRACE_CLUSTER_ID, DYNATRACE_NODE_ID, ELASTICSEARCH_CLUSTER_NAME, ELASTICSEARCH_NODE_NAME, EQUINOX_CONFIG_PATH, EXE_NAME, EXE_PATH, GLASS_FISH_DOMAIN_NAME, GLASS_FISH_INSTANCE_NAME, GOOGLE_APP_ENGINE_INSTANCE, GOOGLE_APP_ENGINE_SERVICE, GOOGLE_CLOUD_PROJECT, HYBRIS_BIN_DIRECTORY, HYBRIS_CONFIG_DIRECTORY, HYBRIS_DATA_DIRECTORY, IBM_CICS_REGION, IBM_CTG_NAME, IBM_IMS_CONNECT_REGION, IBM_IMS_CONTROL_REGION, IBM_IMS_MESSAGE_PROCESSING_REGION, IBM_IMS_SOAP_GW_NAME, IBM_INTEGRATION_NODE_NAME, IBM_INTEGRATION_SERVER_NAME, IIS_APP_POOL, IIS_ROLE_NAME, JAVA_JAR_FILE, JAVA_JAR_PATH, JAVA_MAIN_CLASS, JAVA_MAIN_MODULE, JBOSS_HOME, JBOSS_MODE, JBOSS_SERVER_NAME, KUBERNETES_BASE_POD_NAME, KUBERNETES_CONTAINER_NAME, KUBERNETES_FULL_POD_NAME, KUBERNETES_NAMESPACE, KUBERNETES_POD_UID, MSSQL_INSTANCE_NAME, NODE_JS_APP_BASE_DIRECTORY, NODE_JS_APP_NAME, NODE_JS_SCRIPT_NAME, ORACLE_SID, PG_ID_CALC_INPUT_KEY_LINKAGE, PHP_SCRIPT_PATH, PHP_WORKING_DIRECTORY, RUBY_APP_ROOT_PATH, RUBY_SCRIPT_PATH, RULE_RESULT, SOFTWAREAG_INSTALL_ROOT, SOFTWAREAG_PRODUCTPROPNAME, SPRINGBOOT_APP_NAME, SPRINGBOOT_PROFILE_NAME, SPRINGBOOT_STARTUP_CLASS, TIBCO_BUSINESSWORKS_CE_APP_NAME, TIBCO_BUSINESSWORKS_CE_VERSION, TIBCO_BUSINESS_WORKS_APP_NODE_NAME, TIBCO_BUSINESS_WORKS_APP_SPACE_NAME, TIBCO_BUSINESS_WORKS_DOMAIN_NAME, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH, TIBCO_BUSINESS_WORKS_HOME, VARNISH_INSTANCE_NAME, WEB_LOGIC_CLUSTER_NAME, WEB_LOGIC_DOMAIN_NAME, WEB_LOGIC_HOME, WEB_LOGIC_NAME, WEB_SPHERE_CELL_NAME, WEB_SPHERE_CLUSTER_NAME, WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#dynamic_key HostNaming#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function hostNamingConditionsConditionProcessMetadataToTerraform(struct?: HostNamingConditionsConditionProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function hostNamingConditionsConditionProcessMetadataToHclTerraform(struct?: HostNamingConditionsConditionProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionProcessMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionProcessMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionProcessMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class HostNamingConditionsConditionProcessMetadataList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionProcessMetadata[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionProcessMetadataOutputReference {
    return new HostNamingConditionsConditionProcessMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionProcessMetadataConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#attribute HostNaming#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are AMAZON_ECR_IMAGE_ACCOUNT_ID,AMAZON_ECR_IMAGE_REGION, AMAZON_LAMBDA_FUNCTION_NAME, AMAZON_REGION, APACHE_CONFIG_PATH, APACHE_SPARK_MASTER_IP_ADDRESS, ASP_DOT_NET_CORE_APPLICATION_PATH, AWS_ECS_CLUSTER, AWS_ECS_CONTAINERNAME, AWS_ECS_FAMILY, AWS_ECS_REVISION, CASSANDRA_CLUSTER_NAME, CATALINA_BASE, CATALINA_HOME, CLOUD_FOUNDRY_APP_ID, CLOUD_FOUNDRY_APP_NAME, CLOUD_FOUNDRY_INSTANCE_INDEX, CLOUD_FOUNDRY_SPACE_ID, CLOUD_FOUNDRY_SPACE_NAME, COLDFUSION_JVM_CONFIG_FILE, COLDFUSION_SERVICE_NAME, COMMAND_LINE_ARGS, DOTNET_COMMAND, DOTNET_COMMAND_PATH, DYNATRACE_CLUSTER_ID, DYNATRACE_NODE_ID, ELASTICSEARCH_CLUSTER_NAME, ELASTICSEARCH_NODE_NAME, EQUINOX_CONFIG_PATH, EXE_NAME, EXE_PATH, GLASS_FISH_DOMAIN_NAME, GLASS_FISH_INSTANCE_NAME, GOOGLE_APP_ENGINE_INSTANCE, GOOGLE_APP_ENGINE_SERVICE, GOOGLE_CLOUD_PROJECT, HYBRIS_BIN_DIRECTORY, HYBRIS_CONFIG_DIRECTORY, HYBRIS_DATA_DIRECTORY, IBM_CICS_REGION, IBM_CTG_NAME, IBM_IMS_CONNECT_REGION, IBM_IMS_CONTROL_REGION, IBM_IMS_MESSAGE_PROCESSING_REGION, IBM_IMS_SOAP_GW_NAME, IBM_INTEGRATION_NODE_NAME, IBM_INTEGRATION_SERVER_NAME, IIS_APP_POOL, IIS_ROLE_NAME, JAVA_JAR_FILE, JAVA_JAR_PATH, JAVA_MAIN_CLASS, JAVA_MAIN_MODULE, JBOSS_HOME, JBOSS_MODE, JBOSS_SERVER_NAME, KUBERNETES_BASE_POD_NAME, KUBERNETES_CONTAINER_NAME, KUBERNETES_FULL_POD_NAME, KUBERNETES_NAMESPACE, KUBERNETES_POD_UID, MSSQL_INSTANCE_NAME, NODE_JS_APP_BASE_DIRECTORY, NODE_JS_APP_NAME, NODE_JS_SCRIPT_NAME, ORACLE_SID, PG_ID_CALC_INPUT_KEY_LINKAGE, PHP_SCRIPT_PATH, PHP_WORKING_DIRECTORY, RUBY_APP_ROOT_PATH, RUBY_SCRIPT_PATH, RULE_RESULT, SOFTWAREAG_INSTALL_ROOT, SOFTWAREAG_PRODUCTPROPNAME, SPRINGBOOT_APP_NAME, SPRINGBOOT_PROFILE_NAME, SPRINGBOOT_STARTUP_CLASS, TIBCO_BUSINESSWORKS_CE_APP_NAME, TIBCO_BUSINESSWORKS_CE_VERSION, TIBCO_BUSINESS_WORKS_APP_NODE_NAME, TIBCO_BUSINESS_WORKS_APP_SPACE_NAME, TIBCO_BUSINESS_WORKS_DOMAIN_NAME, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH, TIBCO_BUSINESS_WORKS_HOME, VARNISH_INSTANCE_NAME, WEB_LOGIC_CLUSTER_NAME, WEB_LOGIC_DOMAIN_NAME, WEB_LOGIC_HOME, WEB_LOGIC_NAME, WEB_SPHERE_CELL_NAME, WEB_SPHERE_CLUSTER_NAME, WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#dynamic_key HostNaming#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * if specified, needs to be PROCESS_PREDEFINED_METADATA_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function hostNamingConditionsConditionProcessMetadataConditionKeyToTerraform(struct?: HostNamingConditionsConditionProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function hostNamingConditionsConditionProcessMetadataConditionKeyToHclTerraform(struct?: HostNamingConditionsConditionProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionProcessMetadataConditionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionProcessMetadataConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionProcessMetadataConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class HostNamingConditionsConditionProcessMetadataConditionKeyList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionProcessMetadataConditionKey[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionProcessMetadataConditionKeyOutputReference {
    return new HostNamingConditionsConditionProcessMetadataConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionServiceTopology {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are EXTERNAL_SERVICE, FULLY_MONITORED and OPAQUE_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionServiceTopologyToTerraform(struct?: HostNamingConditionsConditionServiceTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionServiceTopologyToHclTerraform(struct?: HostNamingConditionsConditionServiceTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionServiceTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionServiceTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionServiceTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionServiceTopologyList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionServiceTopology[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionServiceTopologyOutputReference {
    return new HostNamingConditionsConditionServiceTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionServiceTopologyComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SERVICE_TOPOLOGY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are EXTERNAL_SERVICE, FULLY_MONITORED and OPAQUE_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionServiceTopologyComparisonToTerraform(struct?: HostNamingConditionsConditionServiceTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionServiceTopologyComparisonToHclTerraform(struct?: HostNamingConditionsConditionServiceTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionServiceTopologyComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionServiceTopologyComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionServiceTopologyComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionServiceTopologyComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionServiceTopologyComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionServiceTopologyComparisonOutputReference {
    return new HostNamingConditionsConditionServiceTopologyComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionServiceType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BACKGROUND_ACTIVITY, CICS_SERVICE, CUSTOM_SERVICE, DATABASE_SERVICE, ENTERPRISE_SERVICE_BUS_SERVICE, EXTERNAL, IBM_INTEGRATION_BUS_SERVICE, IMS_SERVICE, MESSAGING_SERVICE, QUEUE_LISTENER_SERVICE, RMI_SERVICE, RPC_SERVICE, WEB_REQUEST_SERVICE and WEB_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionServiceTypeToTerraform(struct?: HostNamingConditionsConditionServiceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionServiceTypeToHclTerraform(struct?: HostNamingConditionsConditionServiceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionServiceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionServiceType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionServiceType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionServiceTypeList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionServiceType[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionServiceTypeOutputReference {
    return new HostNamingConditionsConditionServiceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionServiceTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SERVICE_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BACKGROUND_ACTIVITY, CICS_SERVICE, CUSTOM_SERVICE, DATABASE_SERVICE, ENTERPRISE_SERVICE_BUS_SERVICE, EXTERNAL, IBM_INTEGRATION_BUS_SERVICE, IMS_SERVICE, MESSAGING_SERVICE, QUEUE_LISTENER_SERVICE, RMI_SERVICE, RPC_SERVICE, WEB_REQUEST_SERVICE and WEB_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionServiceTypeComparisonToTerraform(struct?: HostNamingConditionsConditionServiceTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionServiceTypeComparisonToHclTerraform(struct?: HostNamingConditionsConditionServiceTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionServiceTypeComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionServiceTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionServiceTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionServiceTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionServiceTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionServiceTypeComparisonOutputReference {
    return new HostNamingConditionsConditionServiceTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionSimpleHostTechComparisonValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set. Possible values are APPARMOR, BOSH, BOSHBPM, CLOUDFOUNDRY, CONTAINERD, CRIO, DIEGO_CELL, DOCKER, GARDEN, GRSECURITY, KUBERNETES, OPENSHIFT, OPENSTACK_COMPUTE, OPENSTACK_CONTROLLER and SELINUX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#verbatim_type HostNaming#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function hostNamingConditionsConditionSimpleHostTechComparisonValueToTerraform(struct?: HostNamingConditionsConditionSimpleHostTechComparisonValueOutputReference | HostNamingConditionsConditionSimpleHostTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function hostNamingConditionsConditionSimpleHostTechComparisonValueToHclTerraform(struct?: HostNamingConditionsConditionSimpleHostTechComparisonValueOutputReference | HostNamingConditionsConditionSimpleHostTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionSimpleHostTechComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostNamingConditionsConditionSimpleHostTechComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionSimpleHostTechComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface HostNamingConditionsConditionSimpleHostTechComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SIMPLE_HOST_TECH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: HostNamingConditionsConditionSimpleHostTechComparisonValue;
}

export function hostNamingConditionsConditionSimpleHostTechComparisonToTerraform(struct?: HostNamingConditionsConditionSimpleHostTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: hostNamingConditionsConditionSimpleHostTechComparisonValueToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionSimpleHostTechComparisonToHclTerraform(struct?: HostNamingConditionsConditionSimpleHostTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: hostNamingConditionsConditionSimpleHostTechComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionSimpleHostTechComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionSimpleHostTechComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionSimpleHostTechComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionSimpleHostTechComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new HostNamingConditionsConditionSimpleHostTechComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: HostNamingConditionsConditionSimpleHostTechComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class HostNamingConditionsConditionSimpleHostTechComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionSimpleHostTechComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionSimpleHostTechComparisonOutputReference {
    return new HostNamingConditionsConditionSimpleHostTechComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionSimpleTechComparisonValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#verbatim_type HostNaming#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function hostNamingConditionsConditionSimpleTechComparisonValueToTerraform(struct?: HostNamingConditionsConditionSimpleTechComparisonValueOutputReference | HostNamingConditionsConditionSimpleTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function hostNamingConditionsConditionSimpleTechComparisonValueToHclTerraform(struct?: HostNamingConditionsConditionSimpleTechComparisonValueOutputReference | HostNamingConditionsConditionSimpleTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionSimpleTechComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostNamingConditionsConditionSimpleTechComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionSimpleTechComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface HostNamingConditionsConditionSimpleTechComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SIMPLE_TECH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: HostNamingConditionsConditionSimpleTechComparisonValue;
}

export function hostNamingConditionsConditionSimpleTechComparisonToTerraform(struct?: HostNamingConditionsConditionSimpleTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: hostNamingConditionsConditionSimpleTechComparisonValueToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionSimpleTechComparisonToHclTerraform(struct?: HostNamingConditionsConditionSimpleTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: hostNamingConditionsConditionSimpleTechComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionSimpleTechComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionSimpleTechComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionSimpleTechComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionSimpleTechComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new HostNamingConditionsConditionSimpleTechComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: HostNamingConditionsConditionSimpleTechComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class HostNamingConditionsConditionSimpleTechComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionSimpleTechComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionSimpleTechComparisonOutputReference {
    return new HostNamingConditionsConditionSimpleTechComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionString {
  /**
  * The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#case_sensitive HostNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionStringToTerraform(struct?: HostNamingConditionsConditionString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionStringToHclTerraform(struct?: HostNamingConditionsConditionString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionStringList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionString[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionStringOutputReference {
    return new HostNamingConditionsConditionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionStringComparison {
  /**
  * The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#case_sensitive HostNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be STRING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionStringComparisonToTerraform(struct?: HostNamingConditionsConditionStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionStringComparisonToHclTerraform(struct?: HostNamingConditionsConditionStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionStringComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionStringComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionStringComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionStringComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionStringComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionStringComparisonOutputReference {
    return new HostNamingConditionsConditionStringComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionStringConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#attribute HostNaming#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are
  *    - `AMAZON_ECR_IMAGE_ACCOUNT_ID`
  *    - `AMAZON_ECR_IMAGE_REGION`
  *    - `AMAZON_LAMBDA_FUNCTION_NAME`
  *    - `AMAZON_REGION`
  *    - `APACHE_CONFIG_PATH`
  *    - `APACHE_SPARK_MASTER_IP_ADDRESS`
  *    - `ASP_DOT_NET_CORE_APPLICATION_PATH`
  *    - `AWS_ECS_CLUSTER`
  *    - `AWS_ECS_CONTAINERNAME`
  *    - `AWS_ECS_FAMILY`
  *    - `AWS_ECS_REVISION`
  *    - `CASSANDRA_CLUSTER_NAME`
  *    - `CATALINA_BASE`
  *    - `CATALINA_HOME`
  *    - `CLOUD_FOUNDRY_APP_ID`
  *    - `CLOUD_FOUNDRY_APP_NAME`
  *    - `CLOUD_FOUNDRY_INSTANCE_INDEX`
  *    - `CLOUD_FOUNDRY_SPACE_ID`
  *    - `CLOUD_FOUNDRY_SPACE_NAME`
  *    - `COLDFUSION_JVM_CONFIG_FILE`
  *    - `COLDFUSION_SERVICE_NAME`
  *    - `COMMAND_LINE_ARGS`
  *    - `DOTNET_COMMAND`
  *    - `DOTNET_COMMAND_PATH`
  *    - `DYNATRACE_CLUSTER_ID`
  *    - `DYNATRACE_NODE_ID`
  *    - `ELASTICSEARCH_CLUSTER_NAME`
  *    - `ELASTICSEARCH_NODE_NAME`
  *    - `EQUINOX_CONFIG_PATH`
  *    - `EXE_NAME`
  *    - `EXE_PATH`
  *    - `GLASS_FISH_DOMAIN_NAME`
  *    - `GLASS_FISH_INSTANCE_NAME`
  *    - `GOOGLE_APP_ENGINE_INSTANCE`
  *    - `GOOGLE_APP_ENGINE_SERVICE`
  *    - `GOOGLE_CLOUD_PROJECT`
  *    - `HYBRIS_BIN_DIRECTORY`
  *    - `HYBRIS_CONFIG_DIRECTORY`
  *    - `HYBRIS_DATA_DIRECTORY`
  *    - `IBM_CICS_REGION`
  *    - `IBM_CTG_NAME`
  *    - `IBM_IMS_CONNECT_REGION`
  *    - `IBM_IMS_CONTROL_REGION`
  *    - `IBM_IMS_MESSAGE_PROCESSING_REGION`
  *    - `IBM_IMS_SOAP_GW_NAME`
  *    - `IBM_INTEGRATION_NODE_NAME`
  *    - `IBM_INTEGRATION_SERVER_NAME`
  *    - `IIS_APP_POOL`
  *    - `IIS_ROLE_NAME`
  *    - `JAVA_JAR_FILE`
  *    - `JAVA_JAR_PATH`
  *    - `JAVA_MAIN_CLASS`
  *    - `JAVA_MAIN_MODULE`
  *    - `JBOSS_HOME`
  *    - `JBOSS_MODE`
  *    - `JBOSS_SERVER_NAME`
  *    - `KUBERNETES_BASE_POD_NAME`
  *    - `KUBERNETES_CONTAINER_NAME`
  *    - `KUBERNETES_FULL_POD_NAME`
  *    - `KUBERNETES_NAMESPACE`
  *    - `KUBERNETES_POD_UID`
  *    - `MSSQL_INSTANCE_NAME`
  *    - `NODE_JS_APP_BASE_DIRECTORY`
  *    - `NODE_JS_APP_NAME`
  *    - `NODE_JS_SCRIPT_NAME`
  *    - `ORACLE_SID`
  *    - `PG_ID_CALC_INPUT_KEY_LINKAGE`
  *    - `PHP_SCRIPT_PATH`
  *    - `PHP_WORKING_DIRECTORY`
  *    - `RUBY_APP_ROOT_PATH`
  *    - `RUBY_SCRIPT_PATH`
  *    - `RULE_RESULT`
  *    - `SOFTWAREAG_INSTALL_ROOT`
  *    - `SOFTWAREAG_PRODUCTPROPNAME`
  *    - `SPRINGBOOT_APP_NAME`
  *    - `SPRINGBOOT_PROFILE_NAME`
  *    - `SPRINGBOOT_STARTUP_CLASS`
  *    - `TIBCO_BUSINESSWORKS_CE_APP_NAME`
  *    - `TIBCO_BUSINESSWORKS_CE_VERSION`
  *    - `TIBCO_BUSINESS_WORKS_APP_NODE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_APP_SPACE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_DOMAIN_NAME`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH`
  *    - `TIBCO_BUSINESS_WORKS_HOME`
  *    - `VARNISH_INSTANCE_NAME`
  *    - `WEB_LOGIC_CLUSTER_NAME`
  *    - `WEB_LOGIC_DOMAIN_NAME`
  *    - `WEB_LOGIC_HOME`
  *    - `WEB_LOGIC_NAME`
  *    - `WEB_SPHERE_CELL_NAME`
  *    - `WEB_SPHERE_CLUSTER_NAME`
  *    - `WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#dynamic_key HostNaming#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * if specified, needs to be `STRING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function hostNamingConditionsConditionStringConditionKeyToTerraform(struct?: HostNamingConditionsConditionStringConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function hostNamingConditionsConditionStringConditionKeyToHclTerraform(struct?: HostNamingConditionsConditionStringConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionStringConditionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionStringConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionStringConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class HostNamingConditionsConditionStringConditionKeyList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionStringConditionKey[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionStringConditionKeyOutputReference {
    return new HostNamingConditionsConditionStringConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionStringKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#attribute HostNaming#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are
  *    - `AMAZON_ECR_IMAGE_ACCOUNT_ID`
  *    - `AMAZON_ECR_IMAGE_REGION`
  *    - `AMAZON_LAMBDA_FUNCTION_NAME`
  *    - `AMAZON_REGION`
  *    - `APACHE_CONFIG_PATH`
  *    - `APACHE_SPARK_MASTER_IP_ADDRESS`
  *    - `ASP_DOT_NET_CORE_APPLICATION_PATH`
  *    - `AWS_ECS_CLUSTER`
  *    - `AWS_ECS_CONTAINERNAME`
  *    - `AWS_ECS_FAMILY`
  *    - `AWS_ECS_REVISION`
  *    - `CASSANDRA_CLUSTER_NAME`
  *    - `CATALINA_BASE`
  *    - `CATALINA_HOME`
  *    - `CLOUD_FOUNDRY_APP_ID`
  *    - `CLOUD_FOUNDRY_APP_NAME`
  *    - `CLOUD_FOUNDRY_INSTANCE_INDEX`
  *    - `CLOUD_FOUNDRY_SPACE_ID`
  *    - `CLOUD_FOUNDRY_SPACE_NAME`
  *    - `COLDFUSION_JVM_CONFIG_FILE`
  *    - `COLDFUSION_SERVICE_NAME`
  *    - `COMMAND_LINE_ARGS`
  *    - `DOTNET_COMMAND`
  *    - `DOTNET_COMMAND_PATH`
  *    - `DYNATRACE_CLUSTER_ID`
  *    - `DYNATRACE_NODE_ID`
  *    - `ELASTICSEARCH_CLUSTER_NAME`
  *    - `ELASTICSEARCH_NODE_NAME`
  *    - `EQUINOX_CONFIG_PATH`
  *    - `EXE_NAME`
  *    - `EXE_PATH`
  *    - `GLASS_FISH_DOMAIN_NAME`
  *    - `GLASS_FISH_INSTANCE_NAME`
  *    - `GOOGLE_APP_ENGINE_INSTANCE`
  *    - `GOOGLE_APP_ENGINE_SERVICE`
  *    - `GOOGLE_CLOUD_PROJECT`
  *    - `HYBRIS_BIN_DIRECTORY`
  *    - `HYBRIS_CONFIG_DIRECTORY`
  *    - `HYBRIS_DATA_DIRECTORY`
  *    - `IBM_CICS_REGION`
  *    - `IBM_CTG_NAME`
  *    - `IBM_IMS_CONNECT_REGION`
  *    - `IBM_IMS_CONTROL_REGION`
  *    - `IBM_IMS_MESSAGE_PROCESSING_REGION`
  *    - `IBM_IMS_SOAP_GW_NAME`
  *    - `IBM_INTEGRATION_NODE_NAME`
  *    - `IBM_INTEGRATION_SERVER_NAME`
  *    - `IIS_APP_POOL`
  *    - `IIS_ROLE_NAME`
  *    - `JAVA_JAR_FILE`
  *    - `JAVA_JAR_PATH`
  *    - `JAVA_MAIN_CLASS`
  *    - `JAVA_MAIN_MODULE`
  *    - `JBOSS_HOME`
  *    - `JBOSS_MODE`
  *    - `JBOSS_SERVER_NAME`
  *    - `KUBERNETES_BASE_POD_NAME`
  *    - `KUBERNETES_CONTAINER_NAME`
  *    - `KUBERNETES_FULL_POD_NAME`
  *    - `KUBERNETES_NAMESPACE`
  *    - `KUBERNETES_POD_UID`
  *    - `MSSQL_INSTANCE_NAME`
  *    - `NODE_JS_APP_BASE_DIRECTORY`
  *    - `NODE_JS_APP_NAME`
  *    - `NODE_JS_SCRIPT_NAME`
  *    - `ORACLE_SID`
  *    - `PG_ID_CALC_INPUT_KEY_LINKAGE`
  *    - `PHP_SCRIPT_PATH`
  *    - `PHP_WORKING_DIRECTORY`
  *    - `RUBY_APP_ROOT_PATH`
  *    - `RUBY_SCRIPT_PATH`
  *    - `RULE_RESULT`
  *    - `SOFTWAREAG_INSTALL_ROOT`
  *    - `SOFTWAREAG_PRODUCTPROPNAME`
  *    - `SPRINGBOOT_APP_NAME`
  *    - `SPRINGBOOT_PROFILE_NAME`
  *    - `SPRINGBOOT_STARTUP_CLASS`
  *    - `TIBCO_BUSINESSWORKS_CE_APP_NAME`
  *    - `TIBCO_BUSINESSWORKS_CE_VERSION`
  *    - `TIBCO_BUSINESS_WORKS_APP_NODE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_APP_SPACE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_DOMAIN_NAME`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH`
  *    - `TIBCO_BUSINESS_WORKS_HOME`
  *    - `VARNISH_INSTANCE_NAME`
  *    - `WEB_LOGIC_CLUSTER_NAME`
  *    - `WEB_LOGIC_DOMAIN_NAME`
  *    - `WEB_LOGIC_HOME`
  *    - `WEB_LOGIC_NAME`
  *    - `WEB_SPHERE_CELL_NAME`
  *    - `WEB_SPHERE_CLUSTER_NAME`
  *    - `WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#dynamic_key HostNaming#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function hostNamingConditionsConditionStringKeyToTerraform(struct?: HostNamingConditionsConditionStringKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function hostNamingConditionsConditionStringKeyToHclTerraform(struct?: HostNamingConditionsConditionStringKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionStringKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionStringKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionStringKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class HostNamingConditionsConditionStringKeyList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionStringKey[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionStringKeyOutputReference {
    return new HostNamingConditionsConditionStringKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionSyntheticEngine {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are  EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLASSIC and CUSTOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionSyntheticEngineToTerraform(struct?: HostNamingConditionsConditionSyntheticEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionSyntheticEngineToHclTerraform(struct?: HostNamingConditionsConditionSyntheticEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionSyntheticEngineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionSyntheticEngine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionSyntheticEngine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionSyntheticEngineList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionSyntheticEngine[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionSyntheticEngineOutputReference {
    return new HostNamingConditionsConditionSyntheticEngineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionSyntheticEngineTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are  EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SYNTHETIC_ENGINE_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLASSIC and CUSTOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionSyntheticEngineTypeComparisonToTerraform(struct?: HostNamingConditionsConditionSyntheticEngineTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionSyntheticEngineTypeComparisonToHclTerraform(struct?: HostNamingConditionsConditionSyntheticEngineTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionSyntheticEngineTypeComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionSyntheticEngineTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionSyntheticEngineTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostNamingConditionsConditionSyntheticEngineTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionSyntheticEngineTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionSyntheticEngineTypeComparisonOutputReference {
    return new HostNamingConditionsConditionSyntheticEngineTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionTagValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#context HostNaming#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#key HostNaming#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionTagValueToTerraform(struct?: HostNamingConditionsConditionTagValueOutputReference | HostNamingConditionsConditionTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionTagValueToHclTerraform(struct?: HostNamingConditionsConditionTagValueOutputReference | HostNamingConditionsConditionTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionTagValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostNamingConditionsConditionTagValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionTagValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface HostNamingConditionsConditionTag {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and TAG_KEY_EQUALS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: HostNamingConditionsConditionTagValue;
}

export function hostNamingConditionsConditionTagToTerraform(struct?: HostNamingConditionsConditionTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: hostNamingConditionsConditionTagValueToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionTagToHclTerraform(struct?: HostNamingConditionsConditionTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: hostNamingConditionsConditionTagValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionTagValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new HostNamingConditionsConditionTagValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: HostNamingConditionsConditionTagValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class HostNamingConditionsConditionTagList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionTag[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionTagOutputReference {
    return new HostNamingConditionsConditionTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionTagComparisonValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#context HostNaming#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#key HostNaming#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: string;
}

export function hostNamingConditionsConditionTagComparisonValueToTerraform(struct?: HostNamingConditionsConditionTagComparisonValueOutputReference | HostNamingConditionsConditionTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionTagComparisonValueToHclTerraform(struct?: HostNamingConditionsConditionTagComparisonValueOutputReference | HostNamingConditionsConditionTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionTagComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostNamingConditionsConditionTagComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionTagComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface HostNamingConditionsConditionTagComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and TAG_KEY_EQUALS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be TAG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: HostNamingConditionsConditionTagComparisonValue;
}

export function hostNamingConditionsConditionTagComparisonToTerraform(struct?: HostNamingConditionsConditionTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: hostNamingConditionsConditionTagComparisonValueToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionTagComparisonToHclTerraform(struct?: HostNamingConditionsConditionTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: hostNamingConditionsConditionTagComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionTagComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionTagComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionTagComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionTagComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new HostNamingConditionsConditionTagComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: HostNamingConditionsConditionTagComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class HostNamingConditionsConditionTagComparisonList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionTagComparison[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionTagComparisonOutputReference {
    return new HostNamingConditionsConditionTagComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsConditionTechValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#type HostNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#verbatim_type HostNaming#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function hostNamingConditionsConditionTechValueToTerraform(struct?: HostNamingConditionsConditionTechValueOutputReference | HostNamingConditionsConditionTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function hostNamingConditionsConditionTechValueToHclTerraform(struct?: HostNamingConditionsConditionTechValueOutputReference | HostNamingConditionsConditionTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionTechValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostNamingConditionsConditionTechValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionTechValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface HostNamingConditionsConditionTech {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#negate HostNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#operator HostNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#value HostNaming#value}
  */
  readonly value?: HostNamingConditionsConditionTechValue;
}

export function hostNamingConditionsConditionTechToTerraform(struct?: HostNamingConditionsConditionTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: hostNamingConditionsConditionTechValueToTerraform(struct!.value),
  }
}


export function hostNamingConditionsConditionTechToHclTerraform(struct?: HostNamingConditionsConditionTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: hostNamingConditionsConditionTechValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionTechValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionTechOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsConditionTech | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsConditionTech | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new HostNamingConditionsConditionTechValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: HostNamingConditionsConditionTechValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class HostNamingConditionsConditionTechList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsConditionTech[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionTechOutputReference {
    return new HostNamingConditionsConditionTechOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditionsCondition {
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#unknowns HostNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * application_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#application_type HostNaming#application_type}
  */
  readonly applicationType?: HostNamingConditionsConditionApplicationType[] | cdktf.IResolvable;
  /**
  * application_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#application_type_comparison HostNaming#application_type_comparison}
  */
  readonly applicationTypeComparison?: HostNamingConditionsConditionApplicationTypeComparison[] | cdktf.IResolvable;
  /**
  * azure_compute_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#azure_compute_mode HostNaming#azure_compute_mode}
  */
  readonly azureComputeMode?: HostNamingConditionsConditionAzureComputeMode[] | cdktf.IResolvable;
  /**
  * azure_compute_mode_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#azure_compute_mode_comparison HostNaming#azure_compute_mode_comparison}
  */
  readonly azureComputeModeComparison?: HostNamingConditionsConditionAzureComputeModeComparison[] | cdktf.IResolvable;
  /**
  * azure_sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#azure_sku HostNaming#azure_sku}
  */
  readonly azureSku?: HostNamingConditionsConditionAzureSku[] | cdktf.IResolvable;
  /**
  * azure_sku_comparision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#azure_sku_comparision HostNaming#azure_sku_comparision}
  */
  readonly azureSkuComparision?: HostNamingConditionsConditionAzureSkuComparision[] | cdktf.IResolvable;
  /**
  * base_comparison_basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#base_comparison_basic HostNaming#base_comparison_basic}
  */
  readonly baseComparisonBasic?: HostNamingConditionsConditionBaseComparisonBasic[] | cdktf.IResolvable;
  /**
  * base_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#base_condition_key HostNaming#base_condition_key}
  */
  readonly baseConditionKey?: HostNamingConditionsConditionBaseConditionKey[] | cdktf.IResolvable;
  /**
  * bitness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#bitness HostNaming#bitness}
  */
  readonly bitness?: HostNamingConditionsConditionBitness[] | cdktf.IResolvable;
  /**
  * bitness_comparision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#bitness_comparision HostNaming#bitness_comparision}
  */
  readonly bitnessComparision?: HostNamingConditionsConditionBitnessComparision[] | cdktf.IResolvable;
  /**
  * cloud_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#cloud_type HostNaming#cloud_type}
  */
  readonly cloudType?: HostNamingConditionsConditionCloudType[] | cdktf.IResolvable;
  /**
  * cloud_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#cloud_type_comparison HostNaming#cloud_type_comparison}
  */
  readonly cloudTypeComparison?: HostNamingConditionsConditionCloudTypeComparison[] | cdktf.IResolvable;
  /**
  * comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#comparison HostNaming#comparison}
  */
  readonly comparison?: HostNamingConditionsConditionComparison[] | cdktf.IResolvable;
  /**
  * custom_application_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#custom_application_type HostNaming#custom_application_type}
  */
  readonly customApplicationType?: HostNamingConditionsConditionCustomApplicationType[] | cdktf.IResolvable;
  /**
  * custom_application_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#custom_application_type_comparison HostNaming#custom_application_type_comparison}
  */
  readonly customApplicationTypeComparison?: HostNamingConditionsConditionCustomApplicationTypeComparison[] | cdktf.IResolvable;
  /**
  * custom_host_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#custom_host_metadata HostNaming#custom_host_metadata}
  */
  readonly customHostMetadata?: HostNamingConditionsConditionCustomHostMetadata[] | cdktf.IResolvable;
  /**
  * custom_host_metadata_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#custom_host_metadata_condition_key HostNaming#custom_host_metadata_condition_key}
  */
  readonly customHostMetadataConditionKey?: HostNamingConditionsConditionCustomHostMetadataConditionKey[] | cdktf.IResolvable;
  /**
  * custom_process_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#custom_process_metadata HostNaming#custom_process_metadata}
  */
  readonly customProcessMetadata?: HostNamingConditionsConditionCustomProcessMetadata[] | cdktf.IResolvable;
  /**
  * custom_process_metadata_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#custom_process_metadata_condition_key HostNaming#custom_process_metadata_condition_key}
  */
  readonly customProcessMetadataConditionKey?: HostNamingConditionsConditionCustomProcessMetadataConditionKey[] | cdktf.IResolvable;
  /**
  * database_topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#database_topology HostNaming#database_topology}
  */
  readonly databaseTopology?: HostNamingConditionsConditionDatabaseTopology[] | cdktf.IResolvable;
  /**
  * database_topology_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#database_topology_comparison HostNaming#database_topology_comparison}
  */
  readonly databaseTopologyComparison?: HostNamingConditionsConditionDatabaseTopologyComparison[] | cdktf.IResolvable;
  /**
  * dcrum_decoder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#dcrum_decoder HostNaming#dcrum_decoder}
  */
  readonly dcrumDecoder?: HostNamingConditionsConditionDcrumDecoder[] | cdktf.IResolvable;
  /**
  * dcrum_decoder_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#dcrum_decoder_comparison HostNaming#dcrum_decoder_comparison}
  */
  readonly dcrumDecoderComparison?: HostNamingConditionsConditionDcrumDecoderComparison[] | cdktf.IResolvable;
  /**
  * entity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#entity HostNaming#entity}
  */
  readonly entity?: HostNamingConditionsConditionEntity[] | cdktf.IResolvable;
  /**
  * entity_id_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#entity_id_comparison HostNaming#entity_id_comparison}
  */
  readonly entityIdComparison?: HostNamingConditionsConditionEntityIdComparison[] | cdktf.IResolvable;
  /**
  * host_tech block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#host_tech HostNaming#host_tech}
  */
  readonly hostTech?: HostNamingConditionsConditionHostTech[] | cdktf.IResolvable;
  /**
  * hypervisor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#hypervisor HostNaming#hypervisor}
  */
  readonly hypervisor?: HostNamingConditionsConditionHypervisor[] | cdktf.IResolvable;
  /**
  * hypervisor_type_comparision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#hypervisor_type_comparision HostNaming#hypervisor_type_comparision}
  */
  readonly hypervisorTypeComparision?: HostNamingConditionsConditionHypervisorTypeComparision[] | cdktf.IResolvable;
  /**
  * indexed_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#indexed_name HostNaming#indexed_name}
  */
  readonly indexedName?: HostNamingConditionsConditionIndexedName[] | cdktf.IResolvable;
  /**
  * indexed_name_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#indexed_name_comparison HostNaming#indexed_name_comparison}
  */
  readonly indexedNameComparison?: HostNamingConditionsConditionIndexedNameComparison[] | cdktf.IResolvable;
  /**
  * indexed_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#indexed_string HostNaming#indexed_string}
  */
  readonly indexedString?: HostNamingConditionsConditionIndexedString[] | cdktf.IResolvable;
  /**
  * indexed_string_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#indexed_string_comparison HostNaming#indexed_string_comparison}
  */
  readonly indexedStringComparison?: HostNamingConditionsConditionIndexedStringComparison[] | cdktf.IResolvable;
  /**
  * indexed_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#indexed_tag HostNaming#indexed_tag}
  */
  readonly indexedTag?: HostNamingConditionsConditionIndexedTag[] | cdktf.IResolvable;
  /**
  * indexed_tag_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#indexed_tag_comparison HostNaming#indexed_tag_comparison}
  */
  readonly indexedTagComparison?: HostNamingConditionsConditionIndexedTagComparison[] | cdktf.IResolvable;
  /**
  * integer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#integer HostNaming#integer}
  */
  readonly integer?: HostNamingConditionsConditionInteger[] | cdktf.IResolvable;
  /**
  * integer_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#integer_comparison HostNaming#integer_comparison}
  */
  readonly integerComparison?: HostNamingConditionsConditionIntegerComparison[] | cdktf.IResolvable;
  /**
  * ipaddress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#ipaddress HostNaming#ipaddress}
  */
  readonly ipaddress?: HostNamingConditionsConditionIpaddress[] | cdktf.IResolvable;
  /**
  * ipaddress_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#ipaddress_comparison HostNaming#ipaddress_comparison}
  */
  readonly ipaddressComparison?: HostNamingConditionsConditionIpaddressComparison[] | cdktf.IResolvable;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#key HostNaming#key}
  */
  readonly key?: HostNamingConditionsConditionKey[] | cdktf.IResolvable;
  /**
  * mobile_platform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#mobile_platform HostNaming#mobile_platform}
  */
  readonly mobilePlatform?: HostNamingConditionsConditionMobilePlatform[] | cdktf.IResolvable;
  /**
  * mobile_platform_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#mobile_platform_comparison HostNaming#mobile_platform_comparison}
  */
  readonly mobilePlatformComparison?: HostNamingConditionsConditionMobilePlatformComparison[] | cdktf.IResolvable;
  /**
  * os_arch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#os_arch HostNaming#os_arch}
  */
  readonly osArch?: HostNamingConditionsConditionOsArch[] | cdktf.IResolvable;
  /**
  * os_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#os_type HostNaming#os_type}
  */
  readonly osType?: HostNamingConditionsConditionOsType[] | cdktf.IResolvable;
  /**
  * osarchitecture_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#osarchitecture_comparison HostNaming#osarchitecture_comparison}
  */
  readonly osarchitectureComparison?: HostNamingConditionsConditionOsarchitectureComparison[] | cdktf.IResolvable;
  /**
  * ostype_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#ostype_comparison HostNaming#ostype_comparison}
  */
  readonly ostypeComparison?: HostNamingConditionsConditionOstypeComparison[] | cdktf.IResolvable;
  /**
  * paas_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#paas_type HostNaming#paas_type}
  */
  readonly paasType?: HostNamingConditionsConditionPaasType[] | cdktf.IResolvable;
  /**
  * paas_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#paas_type_comparison HostNaming#paas_type_comparison}
  */
  readonly paasTypeComparison?: HostNamingConditionsConditionPaasTypeComparison[] | cdktf.IResolvable;
  /**
  * process_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#process_metadata HostNaming#process_metadata}
  */
  readonly processMetadata?: HostNamingConditionsConditionProcessMetadata[] | cdktf.IResolvable;
  /**
  * process_metadata_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#process_metadata_condition_key HostNaming#process_metadata_condition_key}
  */
  readonly processMetadataConditionKey?: HostNamingConditionsConditionProcessMetadataConditionKey[] | cdktf.IResolvable;
  /**
  * service_topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#service_topology HostNaming#service_topology}
  */
  readonly serviceTopology?: HostNamingConditionsConditionServiceTopology[] | cdktf.IResolvable;
  /**
  * service_topology_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#service_topology_comparison HostNaming#service_topology_comparison}
  */
  readonly serviceTopologyComparison?: HostNamingConditionsConditionServiceTopologyComparison[] | cdktf.IResolvable;
  /**
  * service_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#service_type HostNaming#service_type}
  */
  readonly serviceType?: HostNamingConditionsConditionServiceType[] | cdktf.IResolvable;
  /**
  * service_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#service_type_comparison HostNaming#service_type_comparison}
  */
  readonly serviceTypeComparison?: HostNamingConditionsConditionServiceTypeComparison[] | cdktf.IResolvable;
  /**
  * simple_host_tech_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#simple_host_tech_comparison HostNaming#simple_host_tech_comparison}
  */
  readonly simpleHostTechComparison?: HostNamingConditionsConditionSimpleHostTechComparison[] | cdktf.IResolvable;
  /**
  * simple_tech_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#simple_tech_comparison HostNaming#simple_tech_comparison}
  */
  readonly simpleTechComparison?: HostNamingConditionsConditionSimpleTechComparison[] | cdktf.IResolvable;
  /**
  * string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#string HostNaming#string}
  */
  readonly string?: HostNamingConditionsConditionString[] | cdktf.IResolvable;
  /**
  * string_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#string_comparison HostNaming#string_comparison}
  */
  readonly stringComparison?: HostNamingConditionsConditionStringComparison[] | cdktf.IResolvable;
  /**
  * string_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#string_condition_key HostNaming#string_condition_key}
  */
  readonly stringConditionKey?: HostNamingConditionsConditionStringConditionKey[] | cdktf.IResolvable;
  /**
  * string_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#string_key HostNaming#string_key}
  */
  readonly stringKey?: HostNamingConditionsConditionStringKey[] | cdktf.IResolvable;
  /**
  * synthetic_engine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#synthetic_engine HostNaming#synthetic_engine}
  */
  readonly syntheticEngine?: HostNamingConditionsConditionSyntheticEngine[] | cdktf.IResolvable;
  /**
  * synthetic_engine_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#synthetic_engine_type_comparison HostNaming#synthetic_engine_type_comparison}
  */
  readonly syntheticEngineTypeComparison?: HostNamingConditionsConditionSyntheticEngineTypeComparison[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#tag HostNaming#tag}
  */
  readonly tag?: HostNamingConditionsConditionTag[] | cdktf.IResolvable;
  /**
  * tag_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#tag_comparison HostNaming#tag_comparison}
  */
  readonly tagComparison?: HostNamingConditionsConditionTagComparison[] | cdktf.IResolvable;
  /**
  * tech block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#tech HostNaming#tech}
  */
  readonly tech?: HostNamingConditionsConditionTech[] | cdktf.IResolvable;
}

export function hostNamingConditionsConditionToTerraform(struct?: HostNamingConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    application_type: cdktf.listMapper(hostNamingConditionsConditionApplicationTypeToTerraform, true)(struct!.applicationType),
    application_type_comparison: cdktf.listMapper(hostNamingConditionsConditionApplicationTypeComparisonToTerraform, true)(struct!.applicationTypeComparison),
    azure_compute_mode: cdktf.listMapper(hostNamingConditionsConditionAzureComputeModeToTerraform, true)(struct!.azureComputeMode),
    azure_compute_mode_comparison: cdktf.listMapper(hostNamingConditionsConditionAzureComputeModeComparisonToTerraform, true)(struct!.azureComputeModeComparison),
    azure_sku: cdktf.listMapper(hostNamingConditionsConditionAzureSkuToTerraform, true)(struct!.azureSku),
    azure_sku_comparision: cdktf.listMapper(hostNamingConditionsConditionAzureSkuComparisionToTerraform, true)(struct!.azureSkuComparision),
    base_comparison_basic: cdktf.listMapper(hostNamingConditionsConditionBaseComparisonBasicToTerraform, true)(struct!.baseComparisonBasic),
    base_condition_key: cdktf.listMapper(hostNamingConditionsConditionBaseConditionKeyToTerraform, true)(struct!.baseConditionKey),
    bitness: cdktf.listMapper(hostNamingConditionsConditionBitnessToTerraform, true)(struct!.bitness),
    bitness_comparision: cdktf.listMapper(hostNamingConditionsConditionBitnessComparisionToTerraform, true)(struct!.bitnessComparision),
    cloud_type: cdktf.listMapper(hostNamingConditionsConditionCloudTypeToTerraform, true)(struct!.cloudType),
    cloud_type_comparison: cdktf.listMapper(hostNamingConditionsConditionCloudTypeComparisonToTerraform, true)(struct!.cloudTypeComparison),
    comparison: cdktf.listMapper(hostNamingConditionsConditionComparisonToTerraform, true)(struct!.comparison),
    custom_application_type: cdktf.listMapper(hostNamingConditionsConditionCustomApplicationTypeToTerraform, true)(struct!.customApplicationType),
    custom_application_type_comparison: cdktf.listMapper(hostNamingConditionsConditionCustomApplicationTypeComparisonToTerraform, true)(struct!.customApplicationTypeComparison),
    custom_host_metadata: cdktf.listMapper(hostNamingConditionsConditionCustomHostMetadataToTerraform, true)(struct!.customHostMetadata),
    custom_host_metadata_condition_key: cdktf.listMapper(hostNamingConditionsConditionCustomHostMetadataConditionKeyToTerraform, true)(struct!.customHostMetadataConditionKey),
    custom_process_metadata: cdktf.listMapper(hostNamingConditionsConditionCustomProcessMetadataToTerraform, true)(struct!.customProcessMetadata),
    custom_process_metadata_condition_key: cdktf.listMapper(hostNamingConditionsConditionCustomProcessMetadataConditionKeyToTerraform, true)(struct!.customProcessMetadataConditionKey),
    database_topology: cdktf.listMapper(hostNamingConditionsConditionDatabaseTopologyToTerraform, true)(struct!.databaseTopology),
    database_topology_comparison: cdktf.listMapper(hostNamingConditionsConditionDatabaseTopologyComparisonToTerraform, true)(struct!.databaseTopologyComparison),
    dcrum_decoder: cdktf.listMapper(hostNamingConditionsConditionDcrumDecoderToTerraform, true)(struct!.dcrumDecoder),
    dcrum_decoder_comparison: cdktf.listMapper(hostNamingConditionsConditionDcrumDecoderComparisonToTerraform, true)(struct!.dcrumDecoderComparison),
    entity: cdktf.listMapper(hostNamingConditionsConditionEntityToTerraform, true)(struct!.entity),
    entity_id_comparison: cdktf.listMapper(hostNamingConditionsConditionEntityIdComparisonToTerraform, true)(struct!.entityIdComparison),
    host_tech: cdktf.listMapper(hostNamingConditionsConditionHostTechToTerraform, true)(struct!.hostTech),
    hypervisor: cdktf.listMapper(hostNamingConditionsConditionHypervisorToTerraform, true)(struct!.hypervisor),
    hypervisor_type_comparision: cdktf.listMapper(hostNamingConditionsConditionHypervisorTypeComparisionToTerraform, true)(struct!.hypervisorTypeComparision),
    indexed_name: cdktf.listMapper(hostNamingConditionsConditionIndexedNameToTerraform, true)(struct!.indexedName),
    indexed_name_comparison: cdktf.listMapper(hostNamingConditionsConditionIndexedNameComparisonToTerraform, true)(struct!.indexedNameComparison),
    indexed_string: cdktf.listMapper(hostNamingConditionsConditionIndexedStringToTerraform, true)(struct!.indexedString),
    indexed_string_comparison: cdktf.listMapper(hostNamingConditionsConditionIndexedStringComparisonToTerraform, true)(struct!.indexedStringComparison),
    indexed_tag: cdktf.listMapper(hostNamingConditionsConditionIndexedTagToTerraform, true)(struct!.indexedTag),
    indexed_tag_comparison: cdktf.listMapper(hostNamingConditionsConditionIndexedTagComparisonToTerraform, true)(struct!.indexedTagComparison),
    integer: cdktf.listMapper(hostNamingConditionsConditionIntegerToTerraform, true)(struct!.integer),
    integer_comparison: cdktf.listMapper(hostNamingConditionsConditionIntegerComparisonToTerraform, true)(struct!.integerComparison),
    ipaddress: cdktf.listMapper(hostNamingConditionsConditionIpaddressToTerraform, true)(struct!.ipaddress),
    ipaddress_comparison: cdktf.listMapper(hostNamingConditionsConditionIpaddressComparisonToTerraform, true)(struct!.ipaddressComparison),
    key: cdktf.listMapper(hostNamingConditionsConditionKeyToTerraform, true)(struct!.key),
    mobile_platform: cdktf.listMapper(hostNamingConditionsConditionMobilePlatformToTerraform, true)(struct!.mobilePlatform),
    mobile_platform_comparison: cdktf.listMapper(hostNamingConditionsConditionMobilePlatformComparisonToTerraform, true)(struct!.mobilePlatformComparison),
    os_arch: cdktf.listMapper(hostNamingConditionsConditionOsArchToTerraform, true)(struct!.osArch),
    os_type: cdktf.listMapper(hostNamingConditionsConditionOsTypeToTerraform, true)(struct!.osType),
    osarchitecture_comparison: cdktf.listMapper(hostNamingConditionsConditionOsarchitectureComparisonToTerraform, true)(struct!.osarchitectureComparison),
    ostype_comparison: cdktf.listMapper(hostNamingConditionsConditionOstypeComparisonToTerraform, true)(struct!.ostypeComparison),
    paas_type: cdktf.listMapper(hostNamingConditionsConditionPaasTypeToTerraform, true)(struct!.paasType),
    paas_type_comparison: cdktf.listMapper(hostNamingConditionsConditionPaasTypeComparisonToTerraform, true)(struct!.paasTypeComparison),
    process_metadata: cdktf.listMapper(hostNamingConditionsConditionProcessMetadataToTerraform, true)(struct!.processMetadata),
    process_metadata_condition_key: cdktf.listMapper(hostNamingConditionsConditionProcessMetadataConditionKeyToTerraform, true)(struct!.processMetadataConditionKey),
    service_topology: cdktf.listMapper(hostNamingConditionsConditionServiceTopologyToTerraform, true)(struct!.serviceTopology),
    service_topology_comparison: cdktf.listMapper(hostNamingConditionsConditionServiceTopologyComparisonToTerraform, true)(struct!.serviceTopologyComparison),
    service_type: cdktf.listMapper(hostNamingConditionsConditionServiceTypeToTerraform, true)(struct!.serviceType),
    service_type_comparison: cdktf.listMapper(hostNamingConditionsConditionServiceTypeComparisonToTerraform, true)(struct!.serviceTypeComparison),
    simple_host_tech_comparison: cdktf.listMapper(hostNamingConditionsConditionSimpleHostTechComparisonToTerraform, true)(struct!.simpleHostTechComparison),
    simple_tech_comparison: cdktf.listMapper(hostNamingConditionsConditionSimpleTechComparisonToTerraform, true)(struct!.simpleTechComparison),
    string: cdktf.listMapper(hostNamingConditionsConditionStringToTerraform, true)(struct!.string),
    string_comparison: cdktf.listMapper(hostNamingConditionsConditionStringComparisonToTerraform, true)(struct!.stringComparison),
    string_condition_key: cdktf.listMapper(hostNamingConditionsConditionStringConditionKeyToTerraform, true)(struct!.stringConditionKey),
    string_key: cdktf.listMapper(hostNamingConditionsConditionStringKeyToTerraform, true)(struct!.stringKey),
    synthetic_engine: cdktf.listMapper(hostNamingConditionsConditionSyntheticEngineToTerraform, true)(struct!.syntheticEngine),
    synthetic_engine_type_comparison: cdktf.listMapper(hostNamingConditionsConditionSyntheticEngineTypeComparisonToTerraform, true)(struct!.syntheticEngineTypeComparison),
    tag: cdktf.listMapper(hostNamingConditionsConditionTagToTerraform, true)(struct!.tag),
    tag_comparison: cdktf.listMapper(hostNamingConditionsConditionTagComparisonToTerraform, true)(struct!.tagComparison),
    tech: cdktf.listMapper(hostNamingConditionsConditionTechToTerraform, true)(struct!.tech),
  }
}


export function hostNamingConditionsConditionToHclTerraform(struct?: HostNamingConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_type: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionApplicationTypeToHclTerraform, true)(struct!.applicationType),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionApplicationTypeList",
    },
    application_type_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionApplicationTypeComparisonToHclTerraform, true)(struct!.applicationTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionApplicationTypeComparisonList",
    },
    azure_compute_mode: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionAzureComputeModeToHclTerraform, true)(struct!.azureComputeMode),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionAzureComputeModeList",
    },
    azure_compute_mode_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionAzureComputeModeComparisonToHclTerraform, true)(struct!.azureComputeModeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionAzureComputeModeComparisonList",
    },
    azure_sku: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionAzureSkuToHclTerraform, true)(struct!.azureSku),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionAzureSkuList",
    },
    azure_sku_comparision: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionAzureSkuComparisionToHclTerraform, true)(struct!.azureSkuComparision),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionAzureSkuComparisionList",
    },
    base_comparison_basic: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionBaseComparisonBasicToHclTerraform, true)(struct!.baseComparisonBasic),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionBaseComparisonBasicList",
    },
    base_condition_key: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionBaseConditionKeyToHclTerraform, true)(struct!.baseConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionBaseConditionKeyList",
    },
    bitness: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionBitnessToHclTerraform, true)(struct!.bitness),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionBitnessList",
    },
    bitness_comparision: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionBitnessComparisionToHclTerraform, true)(struct!.bitnessComparision),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionBitnessComparisionList",
    },
    cloud_type: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionCloudTypeToHclTerraform, true)(struct!.cloudType),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionCloudTypeList",
    },
    cloud_type_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionCloudTypeComparisonToHclTerraform, true)(struct!.cloudTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionCloudTypeComparisonList",
    },
    comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionComparisonToHclTerraform, true)(struct!.comparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionComparisonList",
    },
    custom_application_type: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionCustomApplicationTypeToHclTerraform, true)(struct!.customApplicationType),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionCustomApplicationTypeList",
    },
    custom_application_type_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionCustomApplicationTypeComparisonToHclTerraform, true)(struct!.customApplicationTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionCustomApplicationTypeComparisonList",
    },
    custom_host_metadata: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionCustomHostMetadataToHclTerraform, true)(struct!.customHostMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionCustomHostMetadataList",
    },
    custom_host_metadata_condition_key: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionCustomHostMetadataConditionKeyToHclTerraform, true)(struct!.customHostMetadataConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionCustomHostMetadataConditionKeyList",
    },
    custom_process_metadata: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionCustomProcessMetadataToHclTerraform, true)(struct!.customProcessMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionCustomProcessMetadataList",
    },
    custom_process_metadata_condition_key: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionCustomProcessMetadataConditionKeyToHclTerraform, true)(struct!.customProcessMetadataConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionCustomProcessMetadataConditionKeyList",
    },
    database_topology: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionDatabaseTopologyToHclTerraform, true)(struct!.databaseTopology),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionDatabaseTopologyList",
    },
    database_topology_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionDatabaseTopologyComparisonToHclTerraform, true)(struct!.databaseTopologyComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionDatabaseTopologyComparisonList",
    },
    dcrum_decoder: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionDcrumDecoderToHclTerraform, true)(struct!.dcrumDecoder),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionDcrumDecoderList",
    },
    dcrum_decoder_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionDcrumDecoderComparisonToHclTerraform, true)(struct!.dcrumDecoderComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionDcrumDecoderComparisonList",
    },
    entity: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionEntityToHclTerraform, true)(struct!.entity),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionEntityList",
    },
    entity_id_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionEntityIdComparisonToHclTerraform, true)(struct!.entityIdComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionEntityIdComparisonList",
    },
    host_tech: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionHostTechToHclTerraform, true)(struct!.hostTech),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionHostTechList",
    },
    hypervisor: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionHypervisorToHclTerraform, true)(struct!.hypervisor),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionHypervisorList",
    },
    hypervisor_type_comparision: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionHypervisorTypeComparisionToHclTerraform, true)(struct!.hypervisorTypeComparision),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionHypervisorTypeComparisionList",
    },
    indexed_name: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionIndexedNameToHclTerraform, true)(struct!.indexedName),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionIndexedNameList",
    },
    indexed_name_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionIndexedNameComparisonToHclTerraform, true)(struct!.indexedNameComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionIndexedNameComparisonList",
    },
    indexed_string: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionIndexedStringToHclTerraform, true)(struct!.indexedString),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionIndexedStringList",
    },
    indexed_string_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionIndexedStringComparisonToHclTerraform, true)(struct!.indexedStringComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionIndexedStringComparisonList",
    },
    indexed_tag: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionIndexedTagToHclTerraform, true)(struct!.indexedTag),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionIndexedTagList",
    },
    indexed_tag_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionIndexedTagComparisonToHclTerraform, true)(struct!.indexedTagComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionIndexedTagComparisonList",
    },
    integer: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionIntegerToHclTerraform, true)(struct!.integer),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionIntegerList",
    },
    integer_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionIntegerComparisonToHclTerraform, true)(struct!.integerComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionIntegerComparisonList",
    },
    ipaddress: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionIpaddressToHclTerraform, true)(struct!.ipaddress),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionIpaddressList",
    },
    ipaddress_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionIpaddressComparisonToHclTerraform, true)(struct!.ipaddressComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionIpaddressComparisonList",
    },
    key: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionKeyToHclTerraform, true)(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionKeyList",
    },
    mobile_platform: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionMobilePlatformToHclTerraform, true)(struct!.mobilePlatform),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionMobilePlatformList",
    },
    mobile_platform_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionMobilePlatformComparisonToHclTerraform, true)(struct!.mobilePlatformComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionMobilePlatformComparisonList",
    },
    os_arch: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionOsArchToHclTerraform, true)(struct!.osArch),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionOsArchList",
    },
    os_type: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionOsTypeToHclTerraform, true)(struct!.osType),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionOsTypeList",
    },
    osarchitecture_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionOsarchitectureComparisonToHclTerraform, true)(struct!.osarchitectureComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionOsarchitectureComparisonList",
    },
    ostype_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionOstypeComparisonToHclTerraform, true)(struct!.ostypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionOstypeComparisonList",
    },
    paas_type: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionPaasTypeToHclTerraform, true)(struct!.paasType),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionPaasTypeList",
    },
    paas_type_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionPaasTypeComparisonToHclTerraform, true)(struct!.paasTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionPaasTypeComparisonList",
    },
    process_metadata: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionProcessMetadataToHclTerraform, true)(struct!.processMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionProcessMetadataList",
    },
    process_metadata_condition_key: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionProcessMetadataConditionKeyToHclTerraform, true)(struct!.processMetadataConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionProcessMetadataConditionKeyList",
    },
    service_topology: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionServiceTopologyToHclTerraform, true)(struct!.serviceTopology),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionServiceTopologyList",
    },
    service_topology_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionServiceTopologyComparisonToHclTerraform, true)(struct!.serviceTopologyComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionServiceTopologyComparisonList",
    },
    service_type: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionServiceTypeToHclTerraform, true)(struct!.serviceType),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionServiceTypeList",
    },
    service_type_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionServiceTypeComparisonToHclTerraform, true)(struct!.serviceTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionServiceTypeComparisonList",
    },
    simple_host_tech_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionSimpleHostTechComparisonToHclTerraform, true)(struct!.simpleHostTechComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionSimpleHostTechComparisonList",
    },
    simple_tech_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionSimpleTechComparisonToHclTerraform, true)(struct!.simpleTechComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionSimpleTechComparisonList",
    },
    string: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionStringToHclTerraform, true)(struct!.string),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionStringList",
    },
    string_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionStringComparisonToHclTerraform, true)(struct!.stringComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionStringComparisonList",
    },
    string_condition_key: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionStringConditionKeyToHclTerraform, true)(struct!.stringConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionStringConditionKeyList",
    },
    string_key: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionStringKeyToHclTerraform, true)(struct!.stringKey),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionStringKeyList",
    },
    synthetic_engine: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionSyntheticEngineToHclTerraform, true)(struct!.syntheticEngine),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionSyntheticEngineList",
    },
    synthetic_engine_type_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionSyntheticEngineTypeComparisonToHclTerraform, true)(struct!.syntheticEngineTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionSyntheticEngineTypeComparisonList",
    },
    tag: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionTagList",
    },
    tag_comparison: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionTagComparisonToHclTerraform, true)(struct!.tagComparison),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionTagComparisonList",
    },
    tech: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionTechToHclTerraform, true)(struct!.tech),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionTechList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditionsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._applicationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationType = this._applicationType?.internalValue;
    }
    if (this._applicationTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationTypeComparison = this._applicationTypeComparison?.internalValue;
    }
    if (this._azureComputeMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureComputeMode = this._azureComputeMode?.internalValue;
    }
    if (this._azureComputeModeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureComputeModeComparison = this._azureComputeModeComparison?.internalValue;
    }
    if (this._azureSku?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSku = this._azureSku?.internalValue;
    }
    if (this._azureSkuComparision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSkuComparision = this._azureSkuComparision?.internalValue;
    }
    if (this._baseComparisonBasic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseComparisonBasic = this._baseComparisonBasic?.internalValue;
    }
    if (this._baseConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseConditionKey = this._baseConditionKey?.internalValue;
    }
    if (this._bitness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitness = this._bitness?.internalValue;
    }
    if (this._bitnessComparision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitnessComparision = this._bitnessComparision?.internalValue;
    }
    if (this._cloudType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudType = this._cloudType?.internalValue;
    }
    if (this._cloudTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudTypeComparison = this._cloudTypeComparison?.internalValue;
    }
    if (this._comparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison?.internalValue;
    }
    if (this._customApplicationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApplicationType = this._customApplicationType?.internalValue;
    }
    if (this._customApplicationTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApplicationTypeComparison = this._customApplicationTypeComparison?.internalValue;
    }
    if (this._customHostMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHostMetadata = this._customHostMetadata?.internalValue;
    }
    if (this._customHostMetadataConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHostMetadataConditionKey = this._customHostMetadataConditionKey?.internalValue;
    }
    if (this._customProcessMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProcessMetadata = this._customProcessMetadata?.internalValue;
    }
    if (this._customProcessMetadataConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProcessMetadataConditionKey = this._customProcessMetadataConditionKey?.internalValue;
    }
    if (this._databaseTopology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseTopology = this._databaseTopology?.internalValue;
    }
    if (this._databaseTopologyComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseTopologyComparison = this._databaseTopologyComparison?.internalValue;
    }
    if (this._dcrumDecoder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcrumDecoder = this._dcrumDecoder?.internalValue;
    }
    if (this._dcrumDecoderComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcrumDecoderComparison = this._dcrumDecoderComparison?.internalValue;
    }
    if (this._entity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity?.internalValue;
    }
    if (this._entityIdComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIdComparison = this._entityIdComparison?.internalValue;
    }
    if (this._hostTech?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostTech = this._hostTech?.internalValue;
    }
    if (this._hypervisor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisor = this._hypervisor?.internalValue;
    }
    if (this._hypervisorTypeComparision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorTypeComparision = this._hypervisorTypeComparision?.internalValue;
    }
    if (this._indexedName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedName = this._indexedName?.internalValue;
    }
    if (this._indexedNameComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedNameComparison = this._indexedNameComparison?.internalValue;
    }
    if (this._indexedString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedString = this._indexedString?.internalValue;
    }
    if (this._indexedStringComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedStringComparison = this._indexedStringComparison?.internalValue;
    }
    if (this._indexedTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedTag = this._indexedTag?.internalValue;
    }
    if (this._indexedTagComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedTagComparison = this._indexedTagComparison?.internalValue;
    }
    if (this._integer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer?.internalValue;
    }
    if (this._integerComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerComparison = this._integerComparison?.internalValue;
    }
    if (this._ipaddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddress = this._ipaddress?.internalValue;
    }
    if (this._ipaddressComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddressComparison = this._ipaddressComparison?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    if (this._mobilePlatform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilePlatform = this._mobilePlatform?.internalValue;
    }
    if (this._mobilePlatformComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilePlatformComparison = this._mobilePlatformComparison?.internalValue;
    }
    if (this._osArch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osArch = this._osArch?.internalValue;
    }
    if (this._osType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType?.internalValue;
    }
    if (this._osarchitectureComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osarchitectureComparison = this._osarchitectureComparison?.internalValue;
    }
    if (this._ostypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ostypeComparison = this._ostypeComparison?.internalValue;
    }
    if (this._paasType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paasType = this._paasType?.internalValue;
    }
    if (this._paasTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paasTypeComparison = this._paasTypeComparison?.internalValue;
    }
    if (this._processMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processMetadata = this._processMetadata?.internalValue;
    }
    if (this._processMetadataConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processMetadataConditionKey = this._processMetadataConditionKey?.internalValue;
    }
    if (this._serviceTopology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTopology = this._serviceTopology?.internalValue;
    }
    if (this._serviceTopologyComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTopologyComparison = this._serviceTopologyComparison?.internalValue;
    }
    if (this._serviceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType?.internalValue;
    }
    if (this._serviceTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTypeComparison = this._serviceTypeComparison?.internalValue;
    }
    if (this._simpleHostTechComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleHostTechComparison = this._simpleHostTechComparison?.internalValue;
    }
    if (this._simpleTechComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleTechComparison = this._simpleTechComparison?.internalValue;
    }
    if (this._string?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string?.internalValue;
    }
    if (this._stringComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringComparison = this._stringComparison?.internalValue;
    }
    if (this._stringConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringConditionKey = this._stringConditionKey?.internalValue;
    }
    if (this._stringKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringKey = this._stringKey?.internalValue;
    }
    if (this._syntheticEngine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntheticEngine = this._syntheticEngine?.internalValue;
    }
    if (this._syntheticEngineTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntheticEngineTypeComparison = this._syntheticEngineTypeComparison?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    if (this._tagComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagComparison = this._tagComparison?.internalValue;
    }
    if (this._tech?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tech = this._tech?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditionsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unknowns = undefined;
      this._applicationType.internalValue = undefined;
      this._applicationTypeComparison.internalValue = undefined;
      this._azureComputeMode.internalValue = undefined;
      this._azureComputeModeComparison.internalValue = undefined;
      this._azureSku.internalValue = undefined;
      this._azureSkuComparision.internalValue = undefined;
      this._baseComparisonBasic.internalValue = undefined;
      this._baseConditionKey.internalValue = undefined;
      this._bitness.internalValue = undefined;
      this._bitnessComparision.internalValue = undefined;
      this._cloudType.internalValue = undefined;
      this._cloudTypeComparison.internalValue = undefined;
      this._comparison.internalValue = undefined;
      this._customApplicationType.internalValue = undefined;
      this._customApplicationTypeComparison.internalValue = undefined;
      this._customHostMetadata.internalValue = undefined;
      this._customHostMetadataConditionKey.internalValue = undefined;
      this._customProcessMetadata.internalValue = undefined;
      this._customProcessMetadataConditionKey.internalValue = undefined;
      this._databaseTopology.internalValue = undefined;
      this._databaseTopologyComparison.internalValue = undefined;
      this._dcrumDecoder.internalValue = undefined;
      this._dcrumDecoderComparison.internalValue = undefined;
      this._entity.internalValue = undefined;
      this._entityIdComparison.internalValue = undefined;
      this._hostTech.internalValue = undefined;
      this._hypervisor.internalValue = undefined;
      this._hypervisorTypeComparision.internalValue = undefined;
      this._indexedName.internalValue = undefined;
      this._indexedNameComparison.internalValue = undefined;
      this._indexedString.internalValue = undefined;
      this._indexedStringComparison.internalValue = undefined;
      this._indexedTag.internalValue = undefined;
      this._indexedTagComparison.internalValue = undefined;
      this._integer.internalValue = undefined;
      this._integerComparison.internalValue = undefined;
      this._ipaddress.internalValue = undefined;
      this._ipaddressComparison.internalValue = undefined;
      this._key.internalValue = undefined;
      this._mobilePlatform.internalValue = undefined;
      this._mobilePlatformComparison.internalValue = undefined;
      this._osArch.internalValue = undefined;
      this._osType.internalValue = undefined;
      this._osarchitectureComparison.internalValue = undefined;
      this._ostypeComparison.internalValue = undefined;
      this._paasType.internalValue = undefined;
      this._paasTypeComparison.internalValue = undefined;
      this._processMetadata.internalValue = undefined;
      this._processMetadataConditionKey.internalValue = undefined;
      this._serviceTopology.internalValue = undefined;
      this._serviceTopologyComparison.internalValue = undefined;
      this._serviceType.internalValue = undefined;
      this._serviceTypeComparison.internalValue = undefined;
      this._simpleHostTechComparison.internalValue = undefined;
      this._simpleTechComparison.internalValue = undefined;
      this._string.internalValue = undefined;
      this._stringComparison.internalValue = undefined;
      this._stringConditionKey.internalValue = undefined;
      this._stringKey.internalValue = undefined;
      this._syntheticEngine.internalValue = undefined;
      this._syntheticEngineTypeComparison.internalValue = undefined;
      this._tag.internalValue = undefined;
      this._tagComparison.internalValue = undefined;
      this._tech.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unknowns = value.unknowns;
      this._applicationType.internalValue = value.applicationType;
      this._applicationTypeComparison.internalValue = value.applicationTypeComparison;
      this._azureComputeMode.internalValue = value.azureComputeMode;
      this._azureComputeModeComparison.internalValue = value.azureComputeModeComparison;
      this._azureSku.internalValue = value.azureSku;
      this._azureSkuComparision.internalValue = value.azureSkuComparision;
      this._baseComparisonBasic.internalValue = value.baseComparisonBasic;
      this._baseConditionKey.internalValue = value.baseConditionKey;
      this._bitness.internalValue = value.bitness;
      this._bitnessComparision.internalValue = value.bitnessComparision;
      this._cloudType.internalValue = value.cloudType;
      this._cloudTypeComparison.internalValue = value.cloudTypeComparison;
      this._comparison.internalValue = value.comparison;
      this._customApplicationType.internalValue = value.customApplicationType;
      this._customApplicationTypeComparison.internalValue = value.customApplicationTypeComparison;
      this._customHostMetadata.internalValue = value.customHostMetadata;
      this._customHostMetadataConditionKey.internalValue = value.customHostMetadataConditionKey;
      this._customProcessMetadata.internalValue = value.customProcessMetadata;
      this._customProcessMetadataConditionKey.internalValue = value.customProcessMetadataConditionKey;
      this._databaseTopology.internalValue = value.databaseTopology;
      this._databaseTopologyComparison.internalValue = value.databaseTopologyComparison;
      this._dcrumDecoder.internalValue = value.dcrumDecoder;
      this._dcrumDecoderComparison.internalValue = value.dcrumDecoderComparison;
      this._entity.internalValue = value.entity;
      this._entityIdComparison.internalValue = value.entityIdComparison;
      this._hostTech.internalValue = value.hostTech;
      this._hypervisor.internalValue = value.hypervisor;
      this._hypervisorTypeComparision.internalValue = value.hypervisorTypeComparision;
      this._indexedName.internalValue = value.indexedName;
      this._indexedNameComparison.internalValue = value.indexedNameComparison;
      this._indexedString.internalValue = value.indexedString;
      this._indexedStringComparison.internalValue = value.indexedStringComparison;
      this._indexedTag.internalValue = value.indexedTag;
      this._indexedTagComparison.internalValue = value.indexedTagComparison;
      this._integer.internalValue = value.integer;
      this._integerComparison.internalValue = value.integerComparison;
      this._ipaddress.internalValue = value.ipaddress;
      this._ipaddressComparison.internalValue = value.ipaddressComparison;
      this._key.internalValue = value.key;
      this._mobilePlatform.internalValue = value.mobilePlatform;
      this._mobilePlatformComparison.internalValue = value.mobilePlatformComparison;
      this._osArch.internalValue = value.osArch;
      this._osType.internalValue = value.osType;
      this._osarchitectureComparison.internalValue = value.osarchitectureComparison;
      this._ostypeComparison.internalValue = value.ostypeComparison;
      this._paasType.internalValue = value.paasType;
      this._paasTypeComparison.internalValue = value.paasTypeComparison;
      this._processMetadata.internalValue = value.processMetadata;
      this._processMetadataConditionKey.internalValue = value.processMetadataConditionKey;
      this._serviceTopology.internalValue = value.serviceTopology;
      this._serviceTopologyComparison.internalValue = value.serviceTopologyComparison;
      this._serviceType.internalValue = value.serviceType;
      this._serviceTypeComparison.internalValue = value.serviceTypeComparison;
      this._simpleHostTechComparison.internalValue = value.simpleHostTechComparison;
      this._simpleTechComparison.internalValue = value.simpleTechComparison;
      this._string.internalValue = value.string;
      this._stringComparison.internalValue = value.stringComparison;
      this._stringConditionKey.internalValue = value.stringConditionKey;
      this._stringKey.internalValue = value.stringKey;
      this._syntheticEngine.internalValue = value.syntheticEngine;
      this._syntheticEngineTypeComparison.internalValue = value.syntheticEngineTypeComparison;
      this._tag.internalValue = value.tag;
      this._tagComparison.internalValue = value.tagComparison;
      this._tech.internalValue = value.tech;
    }
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // application_type - computed: false, optional: true, required: false
  private _applicationType = new HostNamingConditionsConditionApplicationTypeList(this, "application_type", false);
  public get applicationType() {
    return this._applicationType;
  }
  public putApplicationType(value: HostNamingConditionsConditionApplicationType[] | cdktf.IResolvable) {
    this._applicationType.internalValue = value;
  }
  public resetApplicationType() {
    this._applicationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType.internalValue;
  }

  // application_type_comparison - computed: false, optional: true, required: false
  private _applicationTypeComparison = new HostNamingConditionsConditionApplicationTypeComparisonList(this, "application_type_comparison", false);
  public get applicationTypeComparison() {
    return this._applicationTypeComparison;
  }
  public putApplicationTypeComparison(value: HostNamingConditionsConditionApplicationTypeComparison[] | cdktf.IResolvable) {
    this._applicationTypeComparison.internalValue = value;
  }
  public resetApplicationTypeComparison() {
    this._applicationTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeComparisonInput() {
    return this._applicationTypeComparison.internalValue;
  }

  // azure_compute_mode - computed: false, optional: true, required: false
  private _azureComputeMode = new HostNamingConditionsConditionAzureComputeModeList(this, "azure_compute_mode", false);
  public get azureComputeMode() {
    return this._azureComputeMode;
  }
  public putAzureComputeMode(value: HostNamingConditionsConditionAzureComputeMode[] | cdktf.IResolvable) {
    this._azureComputeMode.internalValue = value;
  }
  public resetAzureComputeMode() {
    this._azureComputeMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureComputeModeInput() {
    return this._azureComputeMode.internalValue;
  }

  // azure_compute_mode_comparison - computed: false, optional: true, required: false
  private _azureComputeModeComparison = new HostNamingConditionsConditionAzureComputeModeComparisonList(this, "azure_compute_mode_comparison", false);
  public get azureComputeModeComparison() {
    return this._azureComputeModeComparison;
  }
  public putAzureComputeModeComparison(value: HostNamingConditionsConditionAzureComputeModeComparison[] | cdktf.IResolvable) {
    this._azureComputeModeComparison.internalValue = value;
  }
  public resetAzureComputeModeComparison() {
    this._azureComputeModeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureComputeModeComparisonInput() {
    return this._azureComputeModeComparison.internalValue;
  }

  // azure_sku - computed: false, optional: true, required: false
  private _azureSku = new HostNamingConditionsConditionAzureSkuList(this, "azure_sku", false);
  public get azureSku() {
    return this._azureSku;
  }
  public putAzureSku(value: HostNamingConditionsConditionAzureSku[] | cdktf.IResolvable) {
    this._azureSku.internalValue = value;
  }
  public resetAzureSku() {
    this._azureSku.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSkuInput() {
    return this._azureSku.internalValue;
  }

  // azure_sku_comparision - computed: false, optional: true, required: false
  private _azureSkuComparision = new HostNamingConditionsConditionAzureSkuComparisionList(this, "azure_sku_comparision", false);
  public get azureSkuComparision() {
    return this._azureSkuComparision;
  }
  public putAzureSkuComparision(value: HostNamingConditionsConditionAzureSkuComparision[] | cdktf.IResolvable) {
    this._azureSkuComparision.internalValue = value;
  }
  public resetAzureSkuComparision() {
    this._azureSkuComparision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSkuComparisionInput() {
    return this._azureSkuComparision.internalValue;
  }

  // base_comparison_basic - computed: false, optional: true, required: false
  private _baseComparisonBasic = new HostNamingConditionsConditionBaseComparisonBasicList(this, "base_comparison_basic", false);
  public get baseComparisonBasic() {
    return this._baseComparisonBasic;
  }
  public putBaseComparisonBasic(value: HostNamingConditionsConditionBaseComparisonBasic[] | cdktf.IResolvable) {
    this._baseComparisonBasic.internalValue = value;
  }
  public resetBaseComparisonBasic() {
    this._baseComparisonBasic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseComparisonBasicInput() {
    return this._baseComparisonBasic.internalValue;
  }

  // base_condition_key - computed: false, optional: true, required: false
  private _baseConditionKey = new HostNamingConditionsConditionBaseConditionKeyList(this, "base_condition_key", false);
  public get baseConditionKey() {
    return this._baseConditionKey;
  }
  public putBaseConditionKey(value: HostNamingConditionsConditionBaseConditionKey[] | cdktf.IResolvable) {
    this._baseConditionKey.internalValue = value;
  }
  public resetBaseConditionKey() {
    this._baseConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseConditionKeyInput() {
    return this._baseConditionKey.internalValue;
  }

  // bitness - computed: false, optional: true, required: false
  private _bitness = new HostNamingConditionsConditionBitnessList(this, "bitness", false);
  public get bitness() {
    return this._bitness;
  }
  public putBitness(value: HostNamingConditionsConditionBitness[] | cdktf.IResolvable) {
    this._bitness.internalValue = value;
  }
  public resetBitness() {
    this._bitness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitnessInput() {
    return this._bitness.internalValue;
  }

  // bitness_comparision - computed: false, optional: true, required: false
  private _bitnessComparision = new HostNamingConditionsConditionBitnessComparisionList(this, "bitness_comparision", false);
  public get bitnessComparision() {
    return this._bitnessComparision;
  }
  public putBitnessComparision(value: HostNamingConditionsConditionBitnessComparision[] | cdktf.IResolvable) {
    this._bitnessComparision.internalValue = value;
  }
  public resetBitnessComparision() {
    this._bitnessComparision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitnessComparisionInput() {
    return this._bitnessComparision.internalValue;
  }

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType = new HostNamingConditionsConditionCloudTypeList(this, "cloud_type", false);
  public get cloudType() {
    return this._cloudType;
  }
  public putCloudType(value: HostNamingConditionsConditionCloudType[] | cdktf.IResolvable) {
    this._cloudType.internalValue = value;
  }
  public resetCloudType() {
    this._cloudType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType.internalValue;
  }

  // cloud_type_comparison - computed: false, optional: true, required: false
  private _cloudTypeComparison = new HostNamingConditionsConditionCloudTypeComparisonList(this, "cloud_type_comparison", false);
  public get cloudTypeComparison() {
    return this._cloudTypeComparison;
  }
  public putCloudTypeComparison(value: HostNamingConditionsConditionCloudTypeComparison[] | cdktf.IResolvable) {
    this._cloudTypeComparison.internalValue = value;
  }
  public resetCloudTypeComparison() {
    this._cloudTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeComparisonInput() {
    return this._cloudTypeComparison.internalValue;
  }

  // comparison - computed: false, optional: true, required: false
  private _comparison = new HostNamingConditionsConditionComparisonList(this, "comparison", false);
  public get comparison() {
    return this._comparison;
  }
  public putComparison(value: HostNamingConditionsConditionComparison[] | cdktf.IResolvable) {
    this._comparison.internalValue = value;
  }
  public resetComparison() {
    this._comparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison.internalValue;
  }

  // custom_application_type - computed: false, optional: true, required: false
  private _customApplicationType = new HostNamingConditionsConditionCustomApplicationTypeList(this, "custom_application_type", false);
  public get customApplicationType() {
    return this._customApplicationType;
  }
  public putCustomApplicationType(value: HostNamingConditionsConditionCustomApplicationType[] | cdktf.IResolvable) {
    this._customApplicationType.internalValue = value;
  }
  public resetCustomApplicationType() {
    this._customApplicationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApplicationTypeInput() {
    return this._customApplicationType.internalValue;
  }

  // custom_application_type_comparison - computed: false, optional: true, required: false
  private _customApplicationTypeComparison = new HostNamingConditionsConditionCustomApplicationTypeComparisonList(this, "custom_application_type_comparison", false);
  public get customApplicationTypeComparison() {
    return this._customApplicationTypeComparison;
  }
  public putCustomApplicationTypeComparison(value: HostNamingConditionsConditionCustomApplicationTypeComparison[] | cdktf.IResolvable) {
    this._customApplicationTypeComparison.internalValue = value;
  }
  public resetCustomApplicationTypeComparison() {
    this._customApplicationTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApplicationTypeComparisonInput() {
    return this._customApplicationTypeComparison.internalValue;
  }

  // custom_host_metadata - computed: false, optional: true, required: false
  private _customHostMetadata = new HostNamingConditionsConditionCustomHostMetadataList(this, "custom_host_metadata", false);
  public get customHostMetadata() {
    return this._customHostMetadata;
  }
  public putCustomHostMetadata(value: HostNamingConditionsConditionCustomHostMetadata[] | cdktf.IResolvable) {
    this._customHostMetadata.internalValue = value;
  }
  public resetCustomHostMetadata() {
    this._customHostMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostMetadataInput() {
    return this._customHostMetadata.internalValue;
  }

  // custom_host_metadata_condition_key - computed: false, optional: true, required: false
  private _customHostMetadataConditionKey = new HostNamingConditionsConditionCustomHostMetadataConditionKeyList(this, "custom_host_metadata_condition_key", false);
  public get customHostMetadataConditionKey() {
    return this._customHostMetadataConditionKey;
  }
  public putCustomHostMetadataConditionKey(value: HostNamingConditionsConditionCustomHostMetadataConditionKey[] | cdktf.IResolvable) {
    this._customHostMetadataConditionKey.internalValue = value;
  }
  public resetCustomHostMetadataConditionKey() {
    this._customHostMetadataConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostMetadataConditionKeyInput() {
    return this._customHostMetadataConditionKey.internalValue;
  }

  // custom_process_metadata - computed: false, optional: true, required: false
  private _customProcessMetadata = new HostNamingConditionsConditionCustomProcessMetadataList(this, "custom_process_metadata", false);
  public get customProcessMetadata() {
    return this._customProcessMetadata;
  }
  public putCustomProcessMetadata(value: HostNamingConditionsConditionCustomProcessMetadata[] | cdktf.IResolvable) {
    this._customProcessMetadata.internalValue = value;
  }
  public resetCustomProcessMetadata() {
    this._customProcessMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProcessMetadataInput() {
    return this._customProcessMetadata.internalValue;
  }

  // custom_process_metadata_condition_key - computed: false, optional: true, required: false
  private _customProcessMetadataConditionKey = new HostNamingConditionsConditionCustomProcessMetadataConditionKeyList(this, "custom_process_metadata_condition_key", false);
  public get customProcessMetadataConditionKey() {
    return this._customProcessMetadataConditionKey;
  }
  public putCustomProcessMetadataConditionKey(value: HostNamingConditionsConditionCustomProcessMetadataConditionKey[] | cdktf.IResolvable) {
    this._customProcessMetadataConditionKey.internalValue = value;
  }
  public resetCustomProcessMetadataConditionKey() {
    this._customProcessMetadataConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProcessMetadataConditionKeyInput() {
    return this._customProcessMetadataConditionKey.internalValue;
  }

  // database_topology - computed: false, optional: true, required: false
  private _databaseTopology = new HostNamingConditionsConditionDatabaseTopologyList(this, "database_topology", false);
  public get databaseTopology() {
    return this._databaseTopology;
  }
  public putDatabaseTopology(value: HostNamingConditionsConditionDatabaseTopology[] | cdktf.IResolvable) {
    this._databaseTopology.internalValue = value;
  }
  public resetDatabaseTopology() {
    this._databaseTopology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTopologyInput() {
    return this._databaseTopology.internalValue;
  }

  // database_topology_comparison - computed: false, optional: true, required: false
  private _databaseTopologyComparison = new HostNamingConditionsConditionDatabaseTopologyComparisonList(this, "database_topology_comparison", false);
  public get databaseTopologyComparison() {
    return this._databaseTopologyComparison;
  }
  public putDatabaseTopologyComparison(value: HostNamingConditionsConditionDatabaseTopologyComparison[] | cdktf.IResolvable) {
    this._databaseTopologyComparison.internalValue = value;
  }
  public resetDatabaseTopologyComparison() {
    this._databaseTopologyComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTopologyComparisonInput() {
    return this._databaseTopologyComparison.internalValue;
  }

  // dcrum_decoder - computed: false, optional: true, required: false
  private _dcrumDecoder = new HostNamingConditionsConditionDcrumDecoderList(this, "dcrum_decoder", false);
  public get dcrumDecoder() {
    return this._dcrumDecoder;
  }
  public putDcrumDecoder(value: HostNamingConditionsConditionDcrumDecoder[] | cdktf.IResolvable) {
    this._dcrumDecoder.internalValue = value;
  }
  public resetDcrumDecoder() {
    this._dcrumDecoder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcrumDecoderInput() {
    return this._dcrumDecoder.internalValue;
  }

  // dcrum_decoder_comparison - computed: false, optional: true, required: false
  private _dcrumDecoderComparison = new HostNamingConditionsConditionDcrumDecoderComparisonList(this, "dcrum_decoder_comparison", false);
  public get dcrumDecoderComparison() {
    return this._dcrumDecoderComparison;
  }
  public putDcrumDecoderComparison(value: HostNamingConditionsConditionDcrumDecoderComparison[] | cdktf.IResolvable) {
    this._dcrumDecoderComparison.internalValue = value;
  }
  public resetDcrumDecoderComparison() {
    this._dcrumDecoderComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcrumDecoderComparisonInput() {
    return this._dcrumDecoderComparison.internalValue;
  }

  // entity - computed: false, optional: true, required: false
  private _entity = new HostNamingConditionsConditionEntityList(this, "entity", false);
  public get entity() {
    return this._entity;
  }
  public putEntity(value: HostNamingConditionsConditionEntity[] | cdktf.IResolvable) {
    this._entity.internalValue = value;
  }
  public resetEntity() {
    this._entity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity.internalValue;
  }

  // entity_id_comparison - computed: false, optional: true, required: false
  private _entityIdComparison = new HostNamingConditionsConditionEntityIdComparisonList(this, "entity_id_comparison", false);
  public get entityIdComparison() {
    return this._entityIdComparison;
  }
  public putEntityIdComparison(value: HostNamingConditionsConditionEntityIdComparison[] | cdktf.IResolvable) {
    this._entityIdComparison.internalValue = value;
  }
  public resetEntityIdComparison() {
    this._entityIdComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdComparisonInput() {
    return this._entityIdComparison.internalValue;
  }

  // host_tech - computed: false, optional: true, required: false
  private _hostTech = new HostNamingConditionsConditionHostTechList(this, "host_tech", false);
  public get hostTech() {
    return this._hostTech;
  }
  public putHostTech(value: HostNamingConditionsConditionHostTech[] | cdktf.IResolvable) {
    this._hostTech.internalValue = value;
  }
  public resetHostTech() {
    this._hostTech.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTechInput() {
    return this._hostTech.internalValue;
  }

  // hypervisor - computed: false, optional: true, required: false
  private _hypervisor = new HostNamingConditionsConditionHypervisorList(this, "hypervisor", false);
  public get hypervisor() {
    return this._hypervisor;
  }
  public putHypervisor(value: HostNamingConditionsConditionHypervisor[] | cdktf.IResolvable) {
    this._hypervisor.internalValue = value;
  }
  public resetHypervisor() {
    this._hypervisor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor.internalValue;
  }

  // hypervisor_type_comparision - computed: false, optional: true, required: false
  private _hypervisorTypeComparision = new HostNamingConditionsConditionHypervisorTypeComparisionList(this, "hypervisor_type_comparision", false);
  public get hypervisorTypeComparision() {
    return this._hypervisorTypeComparision;
  }
  public putHypervisorTypeComparision(value: HostNamingConditionsConditionHypervisorTypeComparision[] | cdktf.IResolvable) {
    this._hypervisorTypeComparision.internalValue = value;
  }
  public resetHypervisorTypeComparision() {
    this._hypervisorTypeComparision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorTypeComparisionInput() {
    return this._hypervisorTypeComparision.internalValue;
  }

  // indexed_name - computed: false, optional: true, required: false
  private _indexedName = new HostNamingConditionsConditionIndexedNameList(this, "indexed_name", false);
  public get indexedName() {
    return this._indexedName;
  }
  public putIndexedName(value: HostNamingConditionsConditionIndexedName[] | cdktf.IResolvable) {
    this._indexedName.internalValue = value;
  }
  public resetIndexedName() {
    this._indexedName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedNameInput() {
    return this._indexedName.internalValue;
  }

  // indexed_name_comparison - computed: false, optional: true, required: false
  private _indexedNameComparison = new HostNamingConditionsConditionIndexedNameComparisonList(this, "indexed_name_comparison", false);
  public get indexedNameComparison() {
    return this._indexedNameComparison;
  }
  public putIndexedNameComparison(value: HostNamingConditionsConditionIndexedNameComparison[] | cdktf.IResolvable) {
    this._indexedNameComparison.internalValue = value;
  }
  public resetIndexedNameComparison() {
    this._indexedNameComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedNameComparisonInput() {
    return this._indexedNameComparison.internalValue;
  }

  // indexed_string - computed: false, optional: true, required: false
  private _indexedString = new HostNamingConditionsConditionIndexedStringList(this, "indexed_string", false);
  public get indexedString() {
    return this._indexedString;
  }
  public putIndexedString(value: HostNamingConditionsConditionIndexedString[] | cdktf.IResolvable) {
    this._indexedString.internalValue = value;
  }
  public resetIndexedString() {
    this._indexedString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedStringInput() {
    return this._indexedString.internalValue;
  }

  // indexed_string_comparison - computed: false, optional: true, required: false
  private _indexedStringComparison = new HostNamingConditionsConditionIndexedStringComparisonList(this, "indexed_string_comparison", false);
  public get indexedStringComparison() {
    return this._indexedStringComparison;
  }
  public putIndexedStringComparison(value: HostNamingConditionsConditionIndexedStringComparison[] | cdktf.IResolvable) {
    this._indexedStringComparison.internalValue = value;
  }
  public resetIndexedStringComparison() {
    this._indexedStringComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedStringComparisonInput() {
    return this._indexedStringComparison.internalValue;
  }

  // indexed_tag - computed: false, optional: true, required: false
  private _indexedTag = new HostNamingConditionsConditionIndexedTagList(this, "indexed_tag", false);
  public get indexedTag() {
    return this._indexedTag;
  }
  public putIndexedTag(value: HostNamingConditionsConditionIndexedTag[] | cdktf.IResolvable) {
    this._indexedTag.internalValue = value;
  }
  public resetIndexedTag() {
    this._indexedTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedTagInput() {
    return this._indexedTag.internalValue;
  }

  // indexed_tag_comparison - computed: false, optional: true, required: false
  private _indexedTagComparison = new HostNamingConditionsConditionIndexedTagComparisonList(this, "indexed_tag_comparison", false);
  public get indexedTagComparison() {
    return this._indexedTagComparison;
  }
  public putIndexedTagComparison(value: HostNamingConditionsConditionIndexedTagComparison[] | cdktf.IResolvable) {
    this._indexedTagComparison.internalValue = value;
  }
  public resetIndexedTagComparison() {
    this._indexedTagComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedTagComparisonInput() {
    return this._indexedTagComparison.internalValue;
  }

  // integer - computed: false, optional: true, required: false
  private _integer = new HostNamingConditionsConditionIntegerList(this, "integer", false);
  public get integer() {
    return this._integer;
  }
  public putInteger(value: HostNamingConditionsConditionInteger[] | cdktf.IResolvable) {
    this._integer.internalValue = value;
  }
  public resetInteger() {
    this._integer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer.internalValue;
  }

  // integer_comparison - computed: false, optional: true, required: false
  private _integerComparison = new HostNamingConditionsConditionIntegerComparisonList(this, "integer_comparison", false);
  public get integerComparison() {
    return this._integerComparison;
  }
  public putIntegerComparison(value: HostNamingConditionsConditionIntegerComparison[] | cdktf.IResolvable) {
    this._integerComparison.internalValue = value;
  }
  public resetIntegerComparison() {
    this._integerComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerComparisonInput() {
    return this._integerComparison.internalValue;
  }

  // ipaddress - computed: false, optional: true, required: false
  private _ipaddress = new HostNamingConditionsConditionIpaddressList(this, "ipaddress", false);
  public get ipaddress() {
    return this._ipaddress;
  }
  public putIpaddress(value: HostNamingConditionsConditionIpaddress[] | cdktf.IResolvable) {
    this._ipaddress.internalValue = value;
  }
  public resetIpaddress() {
    this._ipaddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress.internalValue;
  }

  // ipaddress_comparison - computed: false, optional: true, required: false
  private _ipaddressComparison = new HostNamingConditionsConditionIpaddressComparisonList(this, "ipaddress_comparison", false);
  public get ipaddressComparison() {
    return this._ipaddressComparison;
  }
  public putIpaddressComparison(value: HostNamingConditionsConditionIpaddressComparison[] | cdktf.IResolvable) {
    this._ipaddressComparison.internalValue = value;
  }
  public resetIpaddressComparison() {
    this._ipaddressComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressComparisonInput() {
    return this._ipaddressComparison.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new HostNamingConditionsConditionKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
  public putKey(value: HostNamingConditionsConditionKey[] | cdktf.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }

  // mobile_platform - computed: false, optional: true, required: false
  private _mobilePlatform = new HostNamingConditionsConditionMobilePlatformList(this, "mobile_platform", false);
  public get mobilePlatform() {
    return this._mobilePlatform;
  }
  public putMobilePlatform(value: HostNamingConditionsConditionMobilePlatform[] | cdktf.IResolvable) {
    this._mobilePlatform.internalValue = value;
  }
  public resetMobilePlatform() {
    this._mobilePlatform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePlatformInput() {
    return this._mobilePlatform.internalValue;
  }

  // mobile_platform_comparison - computed: false, optional: true, required: false
  private _mobilePlatformComparison = new HostNamingConditionsConditionMobilePlatformComparisonList(this, "mobile_platform_comparison", false);
  public get mobilePlatformComparison() {
    return this._mobilePlatformComparison;
  }
  public putMobilePlatformComparison(value: HostNamingConditionsConditionMobilePlatformComparison[] | cdktf.IResolvable) {
    this._mobilePlatformComparison.internalValue = value;
  }
  public resetMobilePlatformComparison() {
    this._mobilePlatformComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePlatformComparisonInput() {
    return this._mobilePlatformComparison.internalValue;
  }

  // os_arch - computed: false, optional: true, required: false
  private _osArch = new HostNamingConditionsConditionOsArchList(this, "os_arch", false);
  public get osArch() {
    return this._osArch;
  }
  public putOsArch(value: HostNamingConditionsConditionOsArch[] | cdktf.IResolvable) {
    this._osArch.internalValue = value;
  }
  public resetOsArch() {
    this._osArch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osArchInput() {
    return this._osArch.internalValue;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType = new HostNamingConditionsConditionOsTypeList(this, "os_type", false);
  public get osType() {
    return this._osType;
  }
  public putOsType(value: HostNamingConditionsConditionOsType[] | cdktf.IResolvable) {
    this._osType.internalValue = value;
  }
  public resetOsType() {
    this._osType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType.internalValue;
  }

  // osarchitecture_comparison - computed: false, optional: true, required: false
  private _osarchitectureComparison = new HostNamingConditionsConditionOsarchitectureComparisonList(this, "osarchitecture_comparison", false);
  public get osarchitectureComparison() {
    return this._osarchitectureComparison;
  }
  public putOsarchitectureComparison(value: HostNamingConditionsConditionOsarchitectureComparison[] | cdktf.IResolvable) {
    this._osarchitectureComparison.internalValue = value;
  }
  public resetOsarchitectureComparison() {
    this._osarchitectureComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osarchitectureComparisonInput() {
    return this._osarchitectureComparison.internalValue;
  }

  // ostype_comparison - computed: false, optional: true, required: false
  private _ostypeComparison = new HostNamingConditionsConditionOstypeComparisonList(this, "ostype_comparison", false);
  public get ostypeComparison() {
    return this._ostypeComparison;
  }
  public putOstypeComparison(value: HostNamingConditionsConditionOstypeComparison[] | cdktf.IResolvable) {
    this._ostypeComparison.internalValue = value;
  }
  public resetOstypeComparison() {
    this._ostypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ostypeComparisonInput() {
    return this._ostypeComparison.internalValue;
  }

  // paas_type - computed: false, optional: true, required: false
  private _paasType = new HostNamingConditionsConditionPaasTypeList(this, "paas_type", false);
  public get paasType() {
    return this._paasType;
  }
  public putPaasType(value: HostNamingConditionsConditionPaasType[] | cdktf.IResolvable) {
    this._paasType.internalValue = value;
  }
  public resetPaasType() {
    this._paasType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paasTypeInput() {
    return this._paasType.internalValue;
  }

  // paas_type_comparison - computed: false, optional: true, required: false
  private _paasTypeComparison = new HostNamingConditionsConditionPaasTypeComparisonList(this, "paas_type_comparison", false);
  public get paasTypeComparison() {
    return this._paasTypeComparison;
  }
  public putPaasTypeComparison(value: HostNamingConditionsConditionPaasTypeComparison[] | cdktf.IResolvable) {
    this._paasTypeComparison.internalValue = value;
  }
  public resetPaasTypeComparison() {
    this._paasTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paasTypeComparisonInput() {
    return this._paasTypeComparison.internalValue;
  }

  // process_metadata - computed: false, optional: true, required: false
  private _processMetadata = new HostNamingConditionsConditionProcessMetadataList(this, "process_metadata", false);
  public get processMetadata() {
    return this._processMetadata;
  }
  public putProcessMetadata(value: HostNamingConditionsConditionProcessMetadata[] | cdktf.IResolvable) {
    this._processMetadata.internalValue = value;
  }
  public resetProcessMetadata() {
    this._processMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processMetadataInput() {
    return this._processMetadata.internalValue;
  }

  // process_metadata_condition_key - computed: false, optional: true, required: false
  private _processMetadataConditionKey = new HostNamingConditionsConditionProcessMetadataConditionKeyList(this, "process_metadata_condition_key", false);
  public get processMetadataConditionKey() {
    return this._processMetadataConditionKey;
  }
  public putProcessMetadataConditionKey(value: HostNamingConditionsConditionProcessMetadataConditionKey[] | cdktf.IResolvable) {
    this._processMetadataConditionKey.internalValue = value;
  }
  public resetProcessMetadataConditionKey() {
    this._processMetadataConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processMetadataConditionKeyInput() {
    return this._processMetadataConditionKey.internalValue;
  }

  // service_topology - computed: false, optional: true, required: false
  private _serviceTopology = new HostNamingConditionsConditionServiceTopologyList(this, "service_topology", false);
  public get serviceTopology() {
    return this._serviceTopology;
  }
  public putServiceTopology(value: HostNamingConditionsConditionServiceTopology[] | cdktf.IResolvable) {
    this._serviceTopology.internalValue = value;
  }
  public resetServiceTopology() {
    this._serviceTopology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTopologyInput() {
    return this._serviceTopology.internalValue;
  }

  // service_topology_comparison - computed: false, optional: true, required: false
  private _serviceTopologyComparison = new HostNamingConditionsConditionServiceTopologyComparisonList(this, "service_topology_comparison", false);
  public get serviceTopologyComparison() {
    return this._serviceTopologyComparison;
  }
  public putServiceTopologyComparison(value: HostNamingConditionsConditionServiceTopologyComparison[] | cdktf.IResolvable) {
    this._serviceTopologyComparison.internalValue = value;
  }
  public resetServiceTopologyComparison() {
    this._serviceTopologyComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTopologyComparisonInput() {
    return this._serviceTopologyComparison.internalValue;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType = new HostNamingConditionsConditionServiceTypeList(this, "service_type", false);
  public get serviceType() {
    return this._serviceType;
  }
  public putServiceType(value: HostNamingConditionsConditionServiceType[] | cdktf.IResolvable) {
    this._serviceType.internalValue = value;
  }
  public resetServiceType() {
    this._serviceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType.internalValue;
  }

  // service_type_comparison - computed: false, optional: true, required: false
  private _serviceTypeComparison = new HostNamingConditionsConditionServiceTypeComparisonList(this, "service_type_comparison", false);
  public get serviceTypeComparison() {
    return this._serviceTypeComparison;
  }
  public putServiceTypeComparison(value: HostNamingConditionsConditionServiceTypeComparison[] | cdktf.IResolvable) {
    this._serviceTypeComparison.internalValue = value;
  }
  public resetServiceTypeComparison() {
    this._serviceTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeComparisonInput() {
    return this._serviceTypeComparison.internalValue;
  }

  // simple_host_tech_comparison - computed: false, optional: true, required: false
  private _simpleHostTechComparison = new HostNamingConditionsConditionSimpleHostTechComparisonList(this, "simple_host_tech_comparison", false);
  public get simpleHostTechComparison() {
    return this._simpleHostTechComparison;
  }
  public putSimpleHostTechComparison(value: HostNamingConditionsConditionSimpleHostTechComparison[] | cdktf.IResolvable) {
    this._simpleHostTechComparison.internalValue = value;
  }
  public resetSimpleHostTechComparison() {
    this._simpleHostTechComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleHostTechComparisonInput() {
    return this._simpleHostTechComparison.internalValue;
  }

  // simple_tech_comparison - computed: false, optional: true, required: false
  private _simpleTechComparison = new HostNamingConditionsConditionSimpleTechComparisonList(this, "simple_tech_comparison", false);
  public get simpleTechComparison() {
    return this._simpleTechComparison;
  }
  public putSimpleTechComparison(value: HostNamingConditionsConditionSimpleTechComparison[] | cdktf.IResolvable) {
    this._simpleTechComparison.internalValue = value;
  }
  public resetSimpleTechComparison() {
    this._simpleTechComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleTechComparisonInput() {
    return this._simpleTechComparison.internalValue;
  }

  // string - computed: false, optional: true, required: false
  private _string = new HostNamingConditionsConditionStringList(this, "string", false);
  public get string() {
    return this._string;
  }
  public putString(value: HostNamingConditionsConditionString[] | cdktf.IResolvable) {
    this._string.internalValue = value;
  }
  public resetString() {
    this._string.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string.internalValue;
  }

  // string_comparison - computed: false, optional: true, required: false
  private _stringComparison = new HostNamingConditionsConditionStringComparisonList(this, "string_comparison", false);
  public get stringComparison() {
    return this._stringComparison;
  }
  public putStringComparison(value: HostNamingConditionsConditionStringComparison[] | cdktf.IResolvable) {
    this._stringComparison.internalValue = value;
  }
  public resetStringComparison() {
    this._stringComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringComparisonInput() {
    return this._stringComparison.internalValue;
  }

  // string_condition_key - computed: false, optional: true, required: false
  private _stringConditionKey = new HostNamingConditionsConditionStringConditionKeyList(this, "string_condition_key", false);
  public get stringConditionKey() {
    return this._stringConditionKey;
  }
  public putStringConditionKey(value: HostNamingConditionsConditionStringConditionKey[] | cdktf.IResolvable) {
    this._stringConditionKey.internalValue = value;
  }
  public resetStringConditionKey() {
    this._stringConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringConditionKeyInput() {
    return this._stringConditionKey.internalValue;
  }

  // string_key - computed: false, optional: true, required: false
  private _stringKey = new HostNamingConditionsConditionStringKeyList(this, "string_key", false);
  public get stringKey() {
    return this._stringKey;
  }
  public putStringKey(value: HostNamingConditionsConditionStringKey[] | cdktf.IResolvable) {
    this._stringKey.internalValue = value;
  }
  public resetStringKey() {
    this._stringKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringKeyInput() {
    return this._stringKey.internalValue;
  }

  // synthetic_engine - computed: false, optional: true, required: false
  private _syntheticEngine = new HostNamingConditionsConditionSyntheticEngineList(this, "synthetic_engine", false);
  public get syntheticEngine() {
    return this._syntheticEngine;
  }
  public putSyntheticEngine(value: HostNamingConditionsConditionSyntheticEngine[] | cdktf.IResolvable) {
    this._syntheticEngine.internalValue = value;
  }
  public resetSyntheticEngine() {
    this._syntheticEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticEngineInput() {
    return this._syntheticEngine.internalValue;
  }

  // synthetic_engine_type_comparison - computed: false, optional: true, required: false
  private _syntheticEngineTypeComparison = new HostNamingConditionsConditionSyntheticEngineTypeComparisonList(this, "synthetic_engine_type_comparison", false);
  public get syntheticEngineTypeComparison() {
    return this._syntheticEngineTypeComparison;
  }
  public putSyntheticEngineTypeComparison(value: HostNamingConditionsConditionSyntheticEngineTypeComparison[] | cdktf.IResolvable) {
    this._syntheticEngineTypeComparison.internalValue = value;
  }
  public resetSyntheticEngineTypeComparison() {
    this._syntheticEngineTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticEngineTypeComparisonInput() {
    return this._syntheticEngineTypeComparison.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new HostNamingConditionsConditionTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: HostNamingConditionsConditionTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // tag_comparison - computed: false, optional: true, required: false
  private _tagComparison = new HostNamingConditionsConditionTagComparisonList(this, "tag_comparison", false);
  public get tagComparison() {
    return this._tagComparison;
  }
  public putTagComparison(value: HostNamingConditionsConditionTagComparison[] | cdktf.IResolvable) {
    this._tagComparison.internalValue = value;
  }
  public resetTagComparison() {
    this._tagComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagComparisonInput() {
    return this._tagComparison.internalValue;
  }

  // tech - computed: false, optional: true, required: false
  private _tech = new HostNamingConditionsConditionTechList(this, "tech", false);
  public get tech() {
    return this._tech;
  }
  public putTech(value: HostNamingConditionsConditionTech[] | cdktf.IResolvable) {
    this._tech.internalValue = value;
  }
  public resetTech() {
    this._tech.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techInput() {
    return this._tech.internalValue;
  }
}

export class HostNamingConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsConditionOutputReference {
    return new HostNamingConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostNamingConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#condition HostNaming#condition}
  */
  readonly condition?: HostNamingConditionsCondition[] | cdktf.IResolvable;
}

export function hostNamingConditionsToTerraform(struct?: HostNamingConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(hostNamingConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function hostNamingConditionsToHclTerraform(struct?: HostNamingConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(hostNamingConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "HostNamingConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostNamingConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HostNamingConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostNamingConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new HostNamingConditionsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: HostNamingConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class HostNamingConditionsList extends cdktf.ComplexList {
  public internalValue? : HostNamingConditions[] | cdktf.IResolvable

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
  public get(index: number): HostNamingConditionsOutputReference {
    return new HostNamingConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming dynatrace_host_naming}
*/
export class HostNaming extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_host_naming";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostNaming resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostNaming to import
  * @param importFromId The id of the existing HostNaming that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostNaming to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_host_naming", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_naming dynatrace_host_naming} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostNamingConfig
  */
  public constructor(scope: Construct, id: string, config: HostNamingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_host_naming',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._format = config.format;
    this._id = config.id;
    this._name = config.name;
    this._unknowns = config.unknowns;
    this._conditions.internalValue = config.conditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new HostNamingConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: HostNamingConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      unknowns: cdktf.stringToTerraform(this._unknowns),
      conditions: cdktf.listMapper(hostNamingConditionsToTerraform, true)(this._conditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknowns: {
        value: cdktf.stringToHclTerraform(this._unknowns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: cdktf.listMapperHcl(hostNamingConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostNamingConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
